import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line turbo/no-undeclared-env-vars
const BEARER_TOKEN = `Bearer ${process.env.ATTIO_API_KEY}`;

const getTomorrowISOString = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString();
};

function isWithinPast10Seconds(isoString: string) {
  const givenDate = new Date(isoString);
  const now = new Date();
  //@ts-ignore
  const differenceInSeconds = (now - givenDate) / 1000;
  return differenceInSeconds <= 10;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  try {
    const response = await fetch(
      'https://api.attio.com/v2/objects/people/records?matching_attribute=email_addresses',
      {
        method: 'PUT',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: BEARER_TOKEN,
        },
        body: JSON.stringify({
          data: {
            values: {
              name,
              email_addresses: [email],
              description: message,
            },
          },
        }),
      },
    );

    if (!response.ok) {
      console.log('response: ', await response.json());
      throw new Error('Failed to add person');
    }

    const data = await response.json();
    const isRecentRepeatSubmission = isWithinPast10Seconds(
      data.data.created_at,
    );

    if (isRecentRepeatSubmission) {
      const commentResponse = await fetch('https://api.attio.com/v2/tasks', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: BEARER_TOKEN,
        },
        body: JSON.stringify({
          data: {
            format: 'plaintext',
            is_completed: false,
            assignees: [
              { workspace_member_email_address: 'lucas@township.ventures' },
            ],
            content: 'New member added!',
            deadline_at: getTomorrowISOString(),
            linked_records: [
              {
                target_object: 'people',
                target_record_id: data.data.id.record_id,
              },
            ],
          },
        }),
      });

      if (!commentResponse.ok) {
        console.log('response: ', await response.json());
        throw new Error('Failed to add task');
      }
    }

    return NextResponse.json(
      { message: 'Successfully added person' },
      { status: 200 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // const options = {
  //   method: 'POST',
  //   headers: {
  //     accept: 'application/json',
  //     'content-type': 'application/json',
  //     authorization:
  //       'Bearer 7b1be9f5a85dfb4b064a9080ad1d3916d04ccb474385379e4151f349eea24220',
  //   },
  // };

  try {
    const response = await fetch(
      'https://api.attio.com/v2/objects/people/records',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization:
            'Bearer 7b1be9f5a85dfb4b064a9080ad1d3916d04ccb474385379e4151f349eea24220',
        },
        body: JSON.stringify({
          data: {
            values: {
              name: 'Test Send',
            },
          },
        }),
      },
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return NextResponse.json(
          { message: 'Attio accepted' },
          { status: 200 },
        );
      })
      .catch((err) => console.error(err));
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: `${err}` }, { status: 500 });
  }

  // if (req.method === 'POST') {
  //   return NextResponse.json(
  //     { message: 'Form submitted successfully' },
  //     { status: 200 },
  //   );
  // } else {
  //   return NextResponse.json(
  //     { message: `Method ${req.method} Not allowed` },
  //     { status: 500 },
  //   );
  // }
}

'use client';

import {
  Stack,
  Card,
  CardBody,
  Image,
  Link,
  SimpleGrid,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface GhostPost {
  feature_image: string;
  feature_image_alt: string;
  updated_at: string;
  title: string;
  url: string;
  reading_time: number;
  authors: {
    name: string;
  }[];
}

export const LatestBlogPosts = () => {
  const [posts, setPosts] = useState<null | [GhostPost]>(null);

  useEffect(() => {
    async function fetchBlogPosts() {
      // https://ghost.org/docs/content-api/#posts
      const response = await axios.get(
        'https://township-ventures.ghost.io/ghost/api/content/posts/?key=c72703bd4eda8e263b8d0668b4&fields=title,url,feature_image,updated_at,feature_image_alt&include=authors,tags&limit=3',
      );
      setPosts(response.data.posts);
      console.log('response.data.posts: ', response.data.posts);
    }
    fetchBlogPosts();
  }, []);

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={10}
      alignItems={{ md: 'center' }}
      maxWidth={{ base: '300px', md: '650px', lg: '850px' }}
      margin={{ base: '0 auto' }}
    >
      {posts &&
        posts.map((post) => (
          <Link href={post.url} target="_blank">
            <Card
              direction={{ base: 'column' }}
              overflow="hidden"
              variant="outline"
              borderRadius="4px"
              boxShadow="2px 2px 12px hsl(0deg 0% 0% / 0.2)"
            >
              <Image
                objectFit="cover"
                src={post.feature_image}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md" textDecoration="underline" pb="4">
                    {post.title}
                  </Heading>
                  <Text textDecoration="none">
                    {post.authors[0]?.name} <br />
                    {new Date(post.updated_at).toLocaleDateString()}
                  </Text>
                </CardBody>
              </Stack>
            </Card>
          </Link>
        ))}
    </SimpleGrid>
  );
};

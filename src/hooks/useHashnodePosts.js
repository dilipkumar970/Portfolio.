// useHashnodePosts.js
import { useEffect, useState } from "react";

const blogHosts = [
  "correctionofbiosfile.hashnode.dev",
  "installationwindows.hashnode.dev",
  "certificategeneration.hashnode.dev",
  "installationubuntu.hashnode.dev",
];

const useHashnodePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all(
      blogHosts.map((host) =>
        fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query {
                publication(host: "${host}") {
                  posts(first: 20) {
                    edges {
                      node {
                        title
                        brief
                        slug
                        url
                        publishedAt
                        coverImage {
                          url
                        }
                      }
                    }
                  }
                }
              }
            `,
          }),
        }).then((res) => res.json())
      )
    )
      .then((allResponses) => {
        const allPosts = allResponses.flatMap((res) => {
          const edges = res?.data?.publication?.posts?.edges || [];
          return edges.map((edge) => edge.node);
        });

        setPosts(allPosts);
      })
      .catch((err) => console.error("❌ Error fetching blogs:", err));
  }, []);

  return posts;
};

export default useHashnodePosts;

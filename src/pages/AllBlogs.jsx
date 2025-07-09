import React from "react";
import useHashnodePosts from "../hooks/useHashnodePosts";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";

const AllBlogs = () => {
  const posts = useHashnodePosts();

  return (
    <>
      <Navbar />

      <section className="py-10 px-5 sm:px-10 md:px-20 bg-primary min-h-screen">
        <h1 className="text-white text-3xl font-bold mb-10 text-center">
          All Blogs
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">No blog posts found.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default AllBlogs;

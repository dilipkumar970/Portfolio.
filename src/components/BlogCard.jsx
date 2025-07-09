import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white w-full max-w-xs mx-auto rounded-xl p-4 shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={post.coverImage?.url}
        alt={post.title}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="text-gray-900 text-base font-semibold mb-2 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-700 text-sm mb-3 line-clamp-3">
        {post.brief?.slice(0, 120)}...
      </p>
      <a
        href={post.url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 hover:underline text-sm"
      >
        Read More →
      </a>
    </div>
  );
};

export default BlogCard;

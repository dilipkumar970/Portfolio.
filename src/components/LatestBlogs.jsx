import useHashnodePosts from "../hooks/useHashnodePosts";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { SectionWrapper } from "../hoc";

const LatestBlogs = () => {
  const posts = useHashnodePosts();

  return (
    <section className="py-10 px-5 sm:px-10 md:px-20">
      <h2 className="text-2xl font-bold mb-6 text-left text-white">Latest Blogs</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/blogs" className="text-blue-600 hover:underline font-medium">
          View All Blogs →
        </Link>
      </div>
    </section>
  );
};

export default SectionWrapper(LatestBlogs, "blogs");


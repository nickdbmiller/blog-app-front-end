import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton.jsx"
import { getPosts } from "../services/post.js"
import Layout from "./Layout";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setPosts(posts.data);
    };
    fetchPosts();
  }, [toggle]);
  
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Layout>
      <ul>
        {posts?.map((post) => {
          return (
            <li
              className="cards"
              key={post._id}
            >
              <Link
                to = {`/update/${post._id}`}
                _id={post._id}
                title={post.title}
                content={post.content}
              >
                  <h3>{post.title}</h3>
                  <h4>{post.content}</h4>
              </Link>
              <DeleteButton 
                handleToggle={handleToggle}
                _id={post._id}
              />
            </li>
          )
        })}
      </ul>
    </Layout>
  );
};

"use client";
import { getData } from "./utils/api";

export default async function Post() {
  const postpromise = getData();
  const [posts] = await Promise.all([postpromise]);

  if (!posts) {
    console.log("hellp");
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {/* {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

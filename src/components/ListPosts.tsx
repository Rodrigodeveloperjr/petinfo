import { Post } from "./Post";

const ListPosts = () => {
  return (
    <menu className="w-full max-w-800 pt-8 mx-auto px-5">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </menu>
  );
};

export { ListPosts };

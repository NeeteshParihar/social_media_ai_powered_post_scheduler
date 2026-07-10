import PostList from "./PostList";

const QueuePanel = ({ posts }) => {
    
  const scheduledPosts = posts.filter((post) => post.status === "scheduled");
  const publishedPosts = posts.filter((post) => post.status === "published");

  return (
    <div className="flex-1 flex flex-col gap-6 min-w-0 max-w-[600px]">
      {/* upcoming ( to be posted ) */}
      <PostList
        postsList={scheduledPosts}
        title="upcoming"
        componentType="scheduled"
      />
      {/* published */}
      <PostList
        postsList={publishedPosts}
        title="published"
        componentType="published"
      />
    </div>
  );
};

export default QueuePanel;

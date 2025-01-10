import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const posts = [
  {
    image: "/placeholder.svg?height=100&width=100",
    engagement: {
      comments: 245,
      likes: 1.2,
      dms: 89,
    },
    time: "2 hours ago",
  },
  {
    image: "/placeholder.svg?height=100&width=100",
    engagement: {
      comments: 189,
      likes: 0.9,
      dms: 67,
    },
    time: "5 hours ago",
  },
  {
    image: "/placeholder.svg?height=100&width=100",
    engagement: {
      comments: 156,
      likes: 0.8,
      dms: 45,
    },
    time: "8 hours ago",
  },
];

export function TopPosts() {
  return (
    <div className="space-y-4">
      {posts.map((post, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-md overflow-hidden">
            <img
              src={post.image}
              alt="Post thumbnail"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium">Post #{i + 1}</p>
              <p className="text-xs text-muted-foreground">{post.time}</p>
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span>{post.engagement.comments} comments</span>
              <span>{post.engagement.likes}k likes</span>
              <span>{post.engagement.dms} DMs</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

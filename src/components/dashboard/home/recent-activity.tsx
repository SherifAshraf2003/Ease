import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const activity = [
  {
    user: {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=32&width=32",
      handle: "@sarah_j",
    },
    action: "commented on your post",
    time: "2 min ago",
  },
  {
    user: {
      name: "Michael Chen",
      image: "/placeholder.svg?height=32&width=32",
      handle: "@mchen",
    },
    action: "sent you a DM",
    time: "5 min ago",
  },
  {
    user: {
      name: "Emma Wilson",
      image: "/placeholder.svg?height=32&width=32",
      handle: "@emma_w",
    },
    action: "liked your comment",
    time: "10 min ago",
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activity.map((item, i) => (
        <div key={i} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={item.user.image} />
            <AvatarFallback>{item.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {item.user.handle} {item.action}
            </p>
            <p className="text-sm text-muted-foreground">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

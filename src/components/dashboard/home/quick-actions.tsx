import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Key } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid gap-4">
      <Button className="w-full justify-start">
        <Plus className="mr-2 h-4 w-4" />
        Add New Template
      </Button>
      <Button className="w-full justify-start" variant="outline">
        <Key className="mr-2 h-4 w-4" />
        Set Up Keyword Trigger
      </Button>
      <Button className="w-full justify-start" variant="outline">
        <MessageSquare className="mr-2 h-4 w-4" />
        Review Flagged Conversations
      </Button>
    </div>
  );
}

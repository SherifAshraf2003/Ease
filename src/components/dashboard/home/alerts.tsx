import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, TrendingUp } from "lucide-react";

export function Alerts() {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Automation Paused</AlertTitle>
        <AlertDescription>
          Instagram API rate limit reached. Automation will resume in 15
          minutes.
        </AlertDescription>
      </Alert>
      <Alert>
        <TrendingUp className="h-4 w-4" />
        <AlertTitle>Trending Post Detected</AlertTitle>
        <AlertDescription>
          Your latest post is gaining significant traction. Consider increasing
          engagement automation.
        </AlertDescription>
      </Alert>
    </div>
  );
}

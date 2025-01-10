import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EngagementMetrics } from "../../../components/dashboard/analytics/engagement-metrics";
import { ChannelAnalysis } from "../../../components/dashboard/analytics/channel-analysis";
import { ResponseEffectiveness } from "../../../components/dashboard/analytics/response-effectiveness";
import { CustomerSentiment } from "../../../components/dashboard/analytics/customer-sentiment";
import { AudienceInsights } from "../../../components/dashboard/analytics/audience-insights";
import { TimeframeSelect } from "../../../components/dashboard/analytics/timeframe-select";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            Detailed insights into your social media engagement
          </p>
        </div>
        <TimeframeSelect />
      </div>

      <Tabs defaultValue="engagement" className="space-y-4">
        <TabsList>
          <TabsTrigger value="engagement">Engagement</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="responses">Responses</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="space-y-4">
          <EngagementMetrics />
        </TabsContent>

        <TabsContent value="channels" className="space-y-4">
          <ChannelAnalysis />
        </TabsContent>

        <TabsContent value="responses" className="space-y-4">
          <ResponseEffectiveness />
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <AudienceInsights />
        </TabsContent>
      </Tabs>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Templates } from "../../../components/dashboard/automations/templates";
import { KeywordTriggers } from "../../../components/dashboard/automations/keyword-triggers";
import { AIBehavior } from "../../../components/dashboard/automations/ai-behavior";
import { PlatformPreferences } from "../../../components/dashboard/automations/platform-preferences";

export default function AutomationsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold">Automations</h1>
        <p className="text-muted-foreground">
          Manage your automation settings and preferences
        </p>
      </div>

      <Tabs defaultValue="templates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="keyword-triggers">Keyword Triggers</TabsTrigger>
          <TabsTrigger value="ai-behavior">AI Behavior</TabsTrigger>
          <TabsTrigger value="platform-preferences">
            Platform Preferences
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates">
          <Templates />
        </TabsContent>

        <TabsContent value="keyword-triggers">
          <KeywordTriggers />
        </TabsContent>

        <TabsContent value="ai-behavior">
          <AIBehavior />
        </TabsContent>

        <TabsContent value="platform-preferences">
          <PlatformPreferences />
        </TabsContent>
      </Tabs>
    </div>
  );
}

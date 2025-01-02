import { Bot, MessageSquare, Share2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: <MessageSquare className="w-10 h-10 text-Primary" />,
      title: "Comment-triggered DM Automation",
      description:
        "Automatically send DMs when users comment on your posts, enhancing engagement effortlessly.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-Primary" />,
      title: "Smart DM Responses",
      description:
        "Respond instantly to keywords with tailored messages, ensuring relevant interactions every time.",
    },
    {
      icon: <Share2 className="w-10 h-10 text-Primary" />,
      title: "Dual-action Engagement",
      description:
        "Like comments and send DMs simultaneously, maximizing your engagement potential with every interaction.",
    },
    {
      icon: <Bot className="w-10 h-10 text-Primary" />,
      title: "AI-powered Messaging",
      description:
        "Utilize AI to craft personalized messages, making every conversation feel unique and meaningful.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Turn Social Media Into Your{" "}
            <span className="text-Primary ">24/7 Sales Machine</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto">
            Automate your social media engagement and turn every interaction
            into a potential sale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-primary/10"
            >
              <CardContent className="p-6">
                <div className="mb-6 w-fit  group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

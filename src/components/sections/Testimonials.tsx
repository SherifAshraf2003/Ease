"use client";
import { Card } from "../ui/card";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our engagement rates skyrocketed after using Ease!",
      name: "Alice Johnson",
      title: "Marketing Manager, XYZ Corp",
    },
    {
      quote: "The automated responses saved us hours each week!",
      name: "Michael Smith",
      title: "Social Media Lead, ABC Inc.",
    },
    {
      quote: "Ease has made our customer interactions feel personal again.",
      name: "Sarah Lee",
      title: "Community Manager, DEF Ltd.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Customer Testimonials
        </h2>
        <p className="text-center text-muted-foreground">
          Ease has transformed our social media engagement strategy.
        </p>
        <div className="h-[30rem] rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

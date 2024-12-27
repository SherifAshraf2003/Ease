"use client";
import { Card } from "../ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our engagement rates skyrocketed after using Ease!",
      author: "Alice Johnson",
      role: "Marketing Manager, XYZ Corp",
      stars: 5,
    },
    {
      quote: "The automated responses saved us hours each week!",
      author: "Michael Smith",
      role: "Social Media Lead, ABC Inc.",
      stars: 5,
    },
    {
      quote: "Ease has made our customer interactions feel personal again.",
      author: "Sarah Lee",
      role: "Community Manager, DEF Ltd.",
      stars: 5,
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
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-primary/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted" />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

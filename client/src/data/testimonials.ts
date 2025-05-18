export interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
  initials: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    text: "FiLot has transformed my crypto investing experience with its simple, button-based interface. I've earned 25% returns in just 3 months without any technical knowledge.",
    author: "Sarah K.",
    location: "Dubai",
    initials: "SK",
    rating: 5
  },
  {
    id: "testimonial2",
    text: "The AI recommendations are impressively accurate. FiLot helped me avoid a major market downturn by suggesting position exits at exactly the right time.",
    author: "Michael T.",
    location: "Singapore",
    initials: "MT",
    rating: 5
  },
  {
    id: "testimonial3",
    text: "As an institutional investor, I appreciate the enterprise-grade security. The returns speak for themselves.",
    author: "James L.",
    location: "London",
    initials: "JL",
    rating: 5
  }
];

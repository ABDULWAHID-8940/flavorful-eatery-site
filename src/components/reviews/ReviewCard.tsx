import { Star } from "lucide-react";

interface Review {
  rating: number;
  review: string;
  author: string;
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-primary' : 'text-muted-foreground'}`} fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground italic">"{review.review}"</p>
      <p className="text-right font-semibold mt-4">- {review.author}</p>
    </div>
  );
};

export default ReviewCard;
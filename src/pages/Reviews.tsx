import ReviewCard from "@/components/reviews/ReviewCard";

const reviewsData = [
  { rating: 5, review: 'Absolutely amazing! The Jollof was the best I have ever had. Will be back for more.', author: 'Afi' },
  { rating: 5, review: 'A true taste of home. The atmosphere is warm and the staff are incredibly welcoming.', author: 'Bayo' },
  { rating: 4, review: 'Great food and lovely ambiance. The injera platter was delicious and very filling.', author: 'Chidinma' },
  { rating: 5, review: 'A must-visit for anyone who loves African food. The flavors are authentic and the service is top-notch.', author: 'David' },
];

const Reviews = () => {
  return (
    <div className="container py-16">
       <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">What Our Customers Say</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We pride ourselves on providing an exceptional dining experience.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviewsData.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
import OfferCard from "@/components/offers/OfferCard";

const offersData = [
  {
    title: 'Weekly Special',
    description: 'Enjoy a 3-course meal featuring our chef\'s latest creations. A new menu every week!',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/offer-weekly-special-3vvkafc-1763406764689.webp',
  },
  {
    title: 'Happy Hour',
    description: 'Get 2-for-1 on all our signature cocktails and mocktails. Monday to Friday, 4-6 PM.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7a324c89-1af0-4263-ac87-5b142101d8e1/offer-happy-hour-sqh5fv0-1763406772791.webp',
  },
];

const Offers = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Special Offers</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Delicious deals you don\'t want to miss.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {offersData.map(offer => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
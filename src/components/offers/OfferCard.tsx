import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Offer {
  title: string;
  description: string;
  image: string;
}

interface OfferCardProps {
  offer: Offer;
}

const OfferCard = ({ offer }: OfferCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <img src={offer.image} alt={offer.title} className="w-full h-64 object-cover" />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-2">{offer.title}</CardTitle>
        <p className="text-muted-foreground">{offer.description}</p>
      </CardContent>
    </Card>
  );
};

export default OfferCard;
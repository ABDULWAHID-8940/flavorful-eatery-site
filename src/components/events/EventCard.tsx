import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Event {
  title: string;
  date: string;
  description: string;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{event.title}</CardTitle>
        <p className="text-sm text-muted-foreground">{event.date}</p>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
      </CardContent>
      <CardFooter>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
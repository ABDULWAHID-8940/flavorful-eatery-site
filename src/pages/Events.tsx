import EventCard from "@/components/events/EventCard";

const eventsData = [
  {
    title: 'Live Music Night',
    date: 'Every Friday',
    description: 'Enjoy the soulful sounds of local musicians while you dine. A perfect start to your weekend.',
  },
  {
    title: 'Cooking Class with Chef Amina',
    date: 'Last Saturday of the Month',
    description: 'Learn the secrets of East African cuisine in this hands-on cooking class. Limited spots available.',
  },
];

const Events = () => {
  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Upcoming Events</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join us for more than just a meal.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {eventsData.map(event => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
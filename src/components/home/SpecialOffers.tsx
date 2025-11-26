import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const offers = [
  {
    title: 'Happy Hour',
    description: '50% off all drinks, weekdays 4-6 PM.',
    cta: 'Order Now',
  },
  {
    title: 'Weekend Special',
    description: 'Special set menu for two, this weekend only.',
    cta: 'Book Event',
  },
  {
    title: 'Holiday Feast',
    description: 'Pre-order your holiday feast with us!',
    cta: 'Order Now',
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold">🎉 Special Offers & Upcoming Events</h2>
        <div className="mt-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {offers.map((offer) => (
                <CarouselItem key={offer.title} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group transform rounded-lg shadow-lg transition-all hover:rotate-1 hover:scale-105">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-red-500 px-3 py-1 text-sm font-bold text-white">
                          Limited Time
                        </div>
                        <h3 className="mt-4 text-2xl font-bold">{offer.title}</h3>
                        <p className="mt-2 text-gray-600">{offer.description}</p>
                        <Button className="mt-4 bg-amber-500 hover:bg-amber-600">{offer.cta}</Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
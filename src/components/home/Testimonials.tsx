import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Aisha Bello',
    testimonial: 'The best Jollof rice I have ever tasted! The ambiance is amazing, and the staff is so friendly.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=aisha',
  },
  {
    name: 'Chinedu Okoro',
    testimonial: 'A true taste of home. I felt like I was back in Lagos. Highly recommended!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=chinedu',
  },
  {
    name: 'Fatou Sow',
    testimonial: 'I celebrated my birthday here, and it was perfect. The food, the music, everything was just right.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=fatou',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold">💬 What Our Customers Say</h2>
        <div className="mt-12">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="rounded-lg shadow-lg">
                      <CardContent className="p-6 text-center">
                        <Avatar className="mx-auto h-20 w-20">
                          <AvatarImage src={testimonial.avatar} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="mt-4 flex justify-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">⭐</span>
                          ))}
                        </div>
                        <p className="mt-4 text-gray-600">'{testimonial.testimonial}'</p>
                        <p className="mt-6 font-bold">- {testimonial.name}</p>
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

export default Testimonials;
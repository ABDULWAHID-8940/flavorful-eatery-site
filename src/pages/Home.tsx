import AboutStory from '@/components/home/AboutStory';
import FeaturedDishes from '@/components/home/FeaturedDishes';
import Hero from '@/components/home/Hero';
import MenuCategories from '@/components/home/MenuCategories';
import Newsletter from '@/components/home/Newsletter';
import SpecialOffers from '@/components/home/SpecialOffers';
import Testimonials from '@/components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <MenuCategories />
      <SpecialOffers />
      <Testimonials />
      <AboutStory />
      <Newsletter />
    </div>
  );
};

export default Home;
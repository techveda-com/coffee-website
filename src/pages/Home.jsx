import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import CategoryTabs from "../components/home/CategoryTabs";
import ProductSlider from "../components/common/ProductSlider";
import CoffeeBeansSection from "../components/home/CoffeeBeansSection";
import { coffeeData, dessertData } from "../data/sliderData";
import TestimonialSection from "../components/home/TestimonialSection";
import NewsletterBanner from "../components/home/NewsletterBanner";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategoryTabs />
      <ProductSlider
        title="Our Special Coffee"
        items={coffeeData}
        id="coffee-section"
      />
      <ProductSlider
        title="Our Special Desserts"
        items={dessertData}
        id="dessert-section"
      />
      <CoffeeBeansSection />
      <TestimonialSection />
      <NewsletterBanner />
      <Footer />
    </>
  );
}

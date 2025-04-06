import Contact from "@/components/landing/contact";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Pricing from "@/components/landing/pricing";
import Tape from "@/components/landing/tape";
import Testimonials from "@/components/landing/testimonials";

const Page = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <div className="relative w-full overflow-hidden">
        <Tape />
        <Testimonials />
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Page;

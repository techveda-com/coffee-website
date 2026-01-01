import { Mail } from "lucide-react";

const NewsletterBanner = () => {
  return (
    <section className="relative w-full bg-[#E2D9C8] min-h-62.5 flex items-center overflow-hidden py-12">
      {/* Left Side Coffee Beans Image */}
      <div className="absolute left-0 top-0 bottom-0 w-[20%] lg:w-[25%] hidden md:block">
        <img
          src="/left-newsletter-beans.png"
          alt="Coffee beans border left"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Right Side Coffee Beans Image */}
      <div className="absolute right-0 top-0 bottom-0 w-[20%] lg:w-[25%] hidden md:block">
        <img
          src="/right-newsletter-beans.png"
          alt="Coffee beans border right"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Center Content: Title, Description, and Form */}
      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-[#1A1A1A] text-3xl md:text-4xl font-bold">
            Join in and get 15% off!
          </h2>
          <p className="text-[#5D4037] text-sm md:text-base font-medium opacity-90">
            Subscribe to our newsletter to get 15% off discount code.
          </p>

          {/* Subscription Input Field and Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <div className="relative w-full sm:w-80">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="input w-full pl-12 h-14 bg-[#F2EDE4] border-none rounded-full focus:outline-none text-[#30261C]"
              />
            </div>

            <button className="btn h-14 px-10 bg-[#30261C] hover:bg-[#1a1510] text-white border-none rounded-full normal-case text-base shadow-lg transition-all active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;

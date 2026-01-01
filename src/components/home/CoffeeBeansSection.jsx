import { ChevronsRight } from "lucide-react";

const CoffeeBeansBanner = () => {
  return (
    <section className="relative w-full bg-[#E2D9C8] min-h-60 md:min-h-75 flex items-center overflow-hidden py-8 md:py-0">
      {/* Left Side Image */}
      {/* On mobile: visible but smaller/faded to act as a background element */}
      <div className="absolute left-0 bottom-0 w-[40%] md:w-[25%] lg:w-[35%] h-full opacity-40 md:opacity-100">
        <img
          src="/left-beans.png"
          alt="Coffee beans scoop"
          className="hidden object-contain object-bottom-left scale-125 w-full h-full lg:block"
        />
      </div>

      {/* Right Side Image */}
      <div className="absolute right-0 top-0 w-[40%] md:w-[25%] lg:w-[35%] h-full opacity-40 md:opacity-100">
        <img
          src="/right-beans.png"
          alt="Scattered coffee beans"
          className="w-full h-full object-contain object-top-right scale-125 md:scale-110 origin-left-bottom"
        />
      </div>

      {/* Center Content */}
      <div className="container mx-auto px-6 z-10 flex justify-center">
        <div className="max-w-md space-y-4 md:space-y-6 text-center">
          <div className="space-y-1">
            <h2 className="text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Check Out Our Best <br className="hidden xs:block" />
              Coffee Beans
            </h2>
          </div>

          <div className="flex justify-center">
            <button className="group flex items-center gap-2 bg-[#30261C] hover:bg-[#1a1510] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-medium transition-all shadow-md active:scale-95">
              Explore Out Products
              <ChevronsRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeBeansBanner;

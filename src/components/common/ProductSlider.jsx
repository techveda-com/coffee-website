import { useRef } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

const ProductSlider = ({ id, title, items }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      // Scrolls roughly 2 cards on desktop, 1 on mobile
      const scrollAmount =
        direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id={id}>
      <div className="w-full bg-[#EFE3D4] py-16 px-4 md:px-12">
        <h2 className="text-3xl font-medium text-[#30261C] text-center uppercase mb-8 tracking-widest">
          {title}
        </h2>

        <div className="relative max-w-350 mx-auto group">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 px-2 pointer-events-none">
            <button
              onClick={() => scroll("left")}
              className="btn btn-circle btn-md border-none bg-[#D9C7B2] hover:bg-[#c5b39e] shadow-lg pointer-events-auto opacity-100 "
            >
              <ChevronLeft size={24} className="text-[#3E2723]" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="btn btn-circle btn-md border-none bg-[#D9C7B2] hover:bg-[#c5b39e] shadow-lg pointer-events-auto opacity-100 "
            >
              <ChevronRight size={24} className="text-[#3E2723]" />
            </button>
          </div>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            className="carousel carousel-center w-full space-x-6 p-4 scrollbar-hide"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="carousel-item w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
              >
                {/* Card Design */}
                <div className="card bg-[#E9DCCF] w-full rounded-[2.5rem] p-5 transition-transform hover:scale-[1.02] duration-300 shadow-sm hover:shadow-md">
                  {/* Image Section */}
                  <figure className="relative w-full aspect-square overflow-hidden rounded-3xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="btn btn-circle btn-sm absolute top-4 right-4 bg-black/20 border-none backdrop-blur-md hover:bg-black/40">
                      <Heart size={18} className="text-white" />
                    </button>
                  </figure>

                  {/* Content Section */}
                  <div className="card-body px-0 pb-0 pt-6 flex flex-col gap-2">
                    <h2 className="card-title text-2xl font-bold text-[#2B1B17]">
                      {item.name}
                    </h2>
                    <p className="text-[#5D4037] text-sm leading-relaxed opacity-80 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="card-actions justify-between items-center mt-4">
                      <span className="text-2xl font-bold text-[#2B1B17]">
                        Rs. {item.price}
                      </span>
                      <button className="btn bg-[#2B0B08] hover:bg-[#1a0605] text-white border-none px-8 rounded-xl first-letter:uppercase">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;

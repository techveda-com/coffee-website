import { testimonialData } from "../../data/testimonials";
import { Star } from "lucide-react";
import "../../assets/css/testimonial.css";
const TestimonialSection = () => {
  // We double the data to ensure the loop is seamless
  const extendedData = [...testimonialData, ...testimonialData];

  return (
    <section className="w-full bg-[#F5F1EB] py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 space-y-2 px-4">
        <h3 className="text-[#30261C] text-2xl font-medium font-serif">
          Come and Join
        </h3>
        <h2 className="text-[#30261C] text-4xl md:text-5xl font-bold font-serif uppercase tracking-wider">
          Our Happy Customers
        </h2>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4 px-4">
          {extendedData.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="bg-[#E9DCCF] rounded-[2.5rem] p-8 shadow-sm border border-[#D9C7B2]/30 flex flex-col gap-6 min-w-87.5 md:min-w-100 whitespace-normal"
            >
              {/* Top Row: Avatar and Name */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="relative p-1 rounded-full border-2 border-[#D9C7B2]">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#E9DCCF]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#2B1B17]">
                      {item.name}
                    </h4>
                    <p className="text-[#5D4037] text-sm opacity-80">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < item.rating
                          ? "fill-[#F4A91E] text-[#F4A91E]"
                          : "fill-gray-300 text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Feedback Text */}
              <p className="text-[#5D4037] leading-relaxed italic opacity-90">
                "{item.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

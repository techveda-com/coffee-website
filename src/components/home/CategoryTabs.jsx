import { Coffee, CupSoda, IceCream, Milk } from "lucide-react";

const categories = [
  { name: "Hot Coffee", icon: Coffee },
  { name: "Cold Coffee", icon: CupSoda },
  { name: "Cup Coffee", icon: Milk },
  { name: "Dessert", icon: IceCream },
];

export default function Categories() {
  return (
    <section className="bg-[#E2D9C8]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-3 cursor-pointer
                           hover:scale-105 transition"
              >
                <Icon size={40} className="text-[#544A3E]" />
                <p className="text-sm font-semibold tracking-wide text-[#544A3E] uppercase">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

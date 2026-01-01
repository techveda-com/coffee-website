export default function Hero() {
  return (
    <section
      className="relative h-[90vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/coffee-hero.png')",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-start px-6 md:px-20">
        <div className="max-w-xl text-left text-white">
          <p className="uppercase tracking-widest mb-3">Welcome</p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We serve the <br />
            richest coffee <br />
            in the city!
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor
          </p>

          <button className="mt-8 bg-white text-black px-8 py-3 font-semibold uppercase tracking-wide hover:bg-gray-200 transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

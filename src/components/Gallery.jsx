const images = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",

  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop",
]

function Gallery() {
  return (
    <section className="py-24 px-10 md:px-20 bg-[#fff8f0]">

      <h2 className="text-5xl font-bold text-center text-[#6b4226]">
        Our Gallery
      </h2>

      <p className="text-center text-gray-600 mt-4 text-lg">
        A glimpse of our freshly baked delights and cozy bakery moments.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg"
          >

            <img
              src={image}
              alt="Bakery"
              className="w-full h-80 object-cover hover:scale-110 transition duration-500"
            />

          </div>
        ))}

      </div>
    </section>
  )
}

export default Gallery
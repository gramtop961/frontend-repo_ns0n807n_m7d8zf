import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Whey Isolate 2lb',
    price: 39.99,
    rating: 4.8,
    reviews: 412,
    image:
      'https://images.unsplash.com/photo-1579722821208-0b8de24b2b51?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Adjustable Dumbbells (Pair)',
    price: 199.0,
    rating: 4.7,
    reviews: 221,
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2ffeeb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Protein Snack Pack',
    price: 14.99,
    rating: 4.6,
    reviews: 138,
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Organic Broccoli Sprouts',
    price: 9.99,
    rating: 4.9,
    reviews: 86,
    image:
      'https://images.unsplash.com/photo-1506802913710-40e2e66339c3?q=80&w=1200&auto=format&fit=crop'
  }
];

function ProductCard({ image, name, price, rating, reviews }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-white font-medium truncate">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-cyan-300 font-semibold">${price.toFixed(2)}</p>
          <div className="flex items-center gap-1 text-yellow-300">
            <Star className="h-4 w-4 fill-yellow-300" />
            <span className="text-sm text-white/80">{rating} ({reviews})</span>
          </div>
        </div>
        <button className="mt-4 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] text-white font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">Featured picks</h2>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm">Shop all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

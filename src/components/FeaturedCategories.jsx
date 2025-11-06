import { Dumbbell, FlaskConical, Sprout, Sandwich } from 'lucide-react';

const categories = [
  {
    name: 'Supplements',
    icon: FlaskConical,
    items: 128,
    gradient: 'from-[#2563EB] to-[#7C3AED]'
  },
  {
    name: 'Equipment',
    icon: Dumbbell,
    items: 76,
    gradient: 'from-[#7C3AED] to-[#06B6D4]'
  },
  {
    name: 'Snacks',
    icon: Sandwich,
    items: 54,
    gradient: 'from-[#06B6D4] to-[#2563EB]'
  },
  {
    name: 'Sprouts',
    icon: Sprout,
    items: 32,
    gradient: 'from-[#2563EB] to-[#06B6D4]'
  }
];

function CategoryCard({ name, icon: Icon, items, gradient }) {
  return (
    <button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6 text-left">
      <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${gradient}`} />
      <div className="relative flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-black/40 backdrop-blur flex items-center justify-center border border-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-white font-medium">{name}</p>
          <p className="text-white/70 text-sm">{items} products</p>
        </div>
      </div>
    </button>
  );
}

export default function FeaturedCategories() {
  return (
    <section className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">Shop by category</h2>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 text-sm">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.name} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

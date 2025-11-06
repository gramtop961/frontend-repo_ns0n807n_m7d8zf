import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl opacity-30 bg-[#2563EB]" />
        <div className="absolute top-40 left-1/3 h-80 w-80 rounded-full blur-3xl opacity-20 bg-[#7C3AED]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full blur-3xl opacity-20 bg-[#06B6D4]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <FeaturedProducts />
      </main>

      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Athletic Market. All rights reserved.</p>
            <div className="flex items-center gap-6 text-white/70 text-sm">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

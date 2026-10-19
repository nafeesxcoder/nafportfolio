import Link from "next/link";
import { industries } from "../data/site";

/** Industries band for the home page. Full detail on /industries. */
export default function IndustriesSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-purple-500/20">
            <i className="fas fa-industry text-purple-400 text-sm"></i>
            <span className="text-sm font-medium text-purple-300">
              Industries
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Built for Your Sector
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We already know the integrations, the compliance details and the
            pages that convert in these industries.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <Link
              key={ind.name}
              href="/industries"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-purple-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600/40 to-pink-600/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <i className={`fas ${ind.icon} text-purple-200 text-sm`}></i>
              </div>
              <h3 className="text-white font-semibold text-sm group-hover:text-purple-300 transition-colors">
                {ind.name}
              </h3>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed line-clamp-3">
                {ind.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

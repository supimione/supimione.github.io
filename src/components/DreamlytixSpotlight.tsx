import { FiExternalLink } from "react-icons/fi";
import InViewSection from "./InViewSection";

const features = [
  "Secure & modern websites",
  "Scalable admin panels & dashboards",
  "User-friendly mobile applications",
  "Performance-driven architecture",
];

export default function DreamlytixSpotlight() {
  return (
    <InViewSection
      id="dreamlytix"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 z-10"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden gradient-border fade-up-lg"
          style={{ background: "rgba(6, 6, 17, 0.8)" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 pointer-events-none" />

          <div className="relative z-10">
            <span
              className="inline-block text-blue-400 text-xs uppercase tracking-widest mb-4 fade-left"
              style={{ transitionDelay: "0.2s" }}
            >
              Currently Building
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold text-gradient mb-3">
              Dreamlytix
            </h3>
            <p className="text-white/80 text-base sm:text-lg font-medium mb-4">
              Turning Ideas Into Digital Reality
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-4xl">
              Transforming traditional schools into digitally empowered
              ecosystems through modern, scalable software solutions and SaaS
              products. We help educational institutions and growing businesses
              modernize their operations with cutting-edge technology, reliable
              infrastructure, and performance-driven design.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-gray-300 text-sm"
                >
                  <span className="text-blue-400">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://dreamlytix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 text-xs rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-glow transition-all duration-300"
            >
              Visit Dreamlytix
              <FiExternalLink className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </InViewSection>
  );
}

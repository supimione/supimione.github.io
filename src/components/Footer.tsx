export default function Footer() {
  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative z-10 w-full px-4 sm:px-6 md:px-20 py-6 sm:py-8 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-gray-600">
          &copy; 2026 Supratim Das. All Rights Reserved.
        </span>
        <nav aria-label="Footer navigation"><ul className="flex gap-4 sm:gap-6">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs text-gray-600 hover:text-blue-400 transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul></nav>
      </div>
    </footer>
  );
}

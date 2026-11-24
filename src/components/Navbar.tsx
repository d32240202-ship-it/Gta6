interface NavbarProps {
  onOpenTrailer: () => void;
}

export function Navbar({ onOpenTrailer }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 h-16 bg-[#0B0A0E]/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1280px] mx-auto h-full px-6 md:px-10 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-xl md:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] rounded"
        >
          GTA VI
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="التنقل الرئيسي"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C5BFD1]"
        >
          <a
            href="#characters"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#FF5A5F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] rounded-sm"
          >
            الشخصيات
          </a>
          <a
            href="#world"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#FF5A5F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] rounded-sm"
          >
            عالم ليونيدا
          </a>
          <button
            type="button"
            onClick={onOpenTrailer}
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#FF5A5F] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] rounded-sm"
          >
            المشاهد
          </button>
          <a
            href="#editions"
            className="hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#FF5A5F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] rounded-sm"
          >
            الإصدارات
          </a>
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="shrink-0">
          <a
            href="#register"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-bold text-white bg-[#FF5A5F] hover:bg-[#E8494F] transition-colors duration-150 rounded-lg whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            احجز تنبيه الإصدار
          </a>
        </div>
      </div>
    </header>
  );
}

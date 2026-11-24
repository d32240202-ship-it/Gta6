export function Footer() {
  return (
    <footer className="bg-[#0B0A0E] py-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-display text-xl font-extrabold text-white mb-2">
            GTA VI
          </div>
          <p className="text-xs text-[#9D96AA] max-w-md leading-relaxed">
            صفحة استعراضية تعريفية بلعبة Grand Theft Auto VI في ولاية ليونيدا. جميع الصور الفنية مخصصة للعرض التفاعلي.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[#B5AEC2]">
          <a href="#characters" className="hover:text-white transition-colors">
            الشخصيات
          </a>
          <a href="#world" className="hover:text-white transition-colors">
            عالم ليونيدا
          </a>
          <a href="#editions" className="hover:text-white transition-colors">
            الإصدارات
          </a>
          <a href="#register" className="hover:text-white transition-colors">
            تنبيه الإصدار
          </a>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="font-mono-data text-[#9D96AA]">18+ · 2026</span>
        </div>
      </div>
    </footer>
  );
}

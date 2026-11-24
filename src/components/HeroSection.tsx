import { Play, ArrowDownLeft } from 'lucide-react';
import { HERO_MEDIA } from '../data/gameData';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  onOpenTrailer: () => void;
}

export function HeroSection({ onOpenTrailer }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative min-h-[84vh] flex items-end overflow-hidden border-b border-white/10"
    >
      {/* Background Key Art */}
      <div className="absolute inset-0">
        <SafeImage
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          fallbackTitle="GTA VI — فايس سيتي عند الغروب"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured multi-stop scrim for >= 4.5:1 text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0B0A0E] via-[#0B0A0E]/65 to-[#0B0A0E]/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-l from-[#0B0A0E]/85 via-[#0B0A0E]/35 to-transparent"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-28 pb-14 md:pb-20">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-2.5 text-xs md:text-sm text-[#E4DFEC] mb-4 font-medium">
            <span>ولاية ليونيدا</span>
            <span aria-hidden="true" className="text-[#FF5A5F]">·</span>
            <span>فايس سيتي</span>
            <span aria-hidden="true" className="text-[#FF5A5F]">·</span>
            <span className="font-mono-data">خريف 2026</span>
          </div>

          <h1
            className="font-display font-extrabold text-white leading-[1.12] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 4rem)' }}
          >
            أهلاً بك في ليونيدا؛ الفصل الأضخم في تاريخ السلسلة
          </h1>

          <p className="text-base md:text-lg text-[#D5CFE0] leading-relaxed mb-8 max-w-xl">
            تأخذك Grand Theft Auto VI إلى شوارع فايس سيتي المضاءة بشمس الغروب وما يحيط بها من مستنقعات وجزر مفتوحة، في قصة مزدوجة تجمع بين لوسيا وجيسون وسط عالم يتغير مع كل قرار.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={onOpenTrailer}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#FF5A5F] hover:bg-[#E8494F] text-white font-bold text-sm md:text-base rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Play className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>استعرض مشاهد العرض التشويقي</span>
            </button>

            <a
              href="#world"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm md:text-base font-medium text-[#F4F1F8] hover:text-[#FF8A65] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] rounded-lg"
            >
              <span>استكشف خريطة المناطق</span>
              <ArrowDownLeft className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Clean Unboxed Release Strip */}
        <div className="mt-12 pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="text-xs text-[#9D96AA] mb-1">المنصات عند الإطلاق</div>
            <div className="font-medium text-white font-mono-data">PS5 · Xbox Series X|S</div>
          </div>
          <div>
            <div className="text-xs text-[#9D96AA] mb-1">ناشر اللعبة</div>
            <div className="font-medium text-white">Rockstar Games</div>
          </div>
          <div>
            <div className="text-xs text-[#9D96AA] mb-1">عدد الأبطال</div>
            <div className="font-medium text-white tabular-nums">شخصيتان رئيسيتان</div>
          </div>
          <div>
            <div className="text-xs text-[#9D96AA] mb-1">موعد الصدور المستهدف</div>
            <div className="font-medium text-white font-mono-data">Autumn 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

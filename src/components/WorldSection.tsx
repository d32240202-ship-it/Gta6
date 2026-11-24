import { useState } from 'react';
import { MapPin, Compass, ArrowUpLeft } from 'lucide-react';
import { WORLD_REGIONS, type WorldRegion } from '../data/gameData';
import { SafeImage } from './SafeImage';

export function WorldSection() {
  const [selectedRegion, setSelectedRegion] = useState<WorldRegion>(
    WORLD_REGIONS[0]
  );

  return (
    <section
      id="world"
      className="py-20 md:py-28 border-b border-white/10 bg-[#0E0C12]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#FF8A65] mb-2">
              02. عالم ليونيدا المفتوح
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
              خريطة تتنفس بالحياة من الشاطئ إلى المستنقعات
            </h2>
            <p className="text-base text-[#B5AEC2] leading-relaxed">
              اختر أي منطقة في الشبكة أدناه لاستعراض تفاصيلها الجغرافية، المناخ، وأبرز الأنشطة المتاحة داخل ولاية ليونيدا.
            </p>
          </div>
          <div className="text-xs font-mono-data text-[#9D96AA] whitespace-nowrap shrink-0">
            4 مناطق رئيسية قابلة للاستكشاف
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {WORLD_REGIONS.map((region) => {
            const isActive = selectedRegion.id === region.id;
            const spanClass =
              region.id === 'vice-beach' || region.id === 'vice-metro'
                ? 'lg:col-span-2'
                : 'lg:col-span-1';

            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setSelectedRegion(region)}
                aria-pressed={isActive}
                className={`group relative text-right rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] ${spanClass} ${
                  isActive
                    ? 'border-[#FF5A5F] bg-[#17141F]'
                    : 'border-white/10 bg-[#14121A] hover:border-white/25'
                }`}
              >
                <div className="relative h-64 md:h-72 w-full overflow-hidden">
                  <SafeImage
                    src={region.image}
                    alt={`${region.nameAr} — ${region.nameEn}`}
                    fallbackTitle={region.nameAr}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B0A0E] via-[#0B0A0E]/55 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <div className="flex items-center justify-between gap-4 text-xs text-[#C5BFD1] mb-2">
                      <span className="font-mono-data text-[#FF8A65]">
                        {region.index}. {region.nameEn}
                      </span>
                      <span className="font-mono-data text-[#9D96AA] hidden sm:inline">
                        {region.coordinates}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                        {region.nameAr}
                      </h3>
                      <ArrowUpLeft
                        className={`w-5 h-5 shrink-0 transition-transform duration-150 ${
                          isActive
                            ? 'text-[#FF5A5F]'
                            : 'text-[#9D96AA] group-hover:text-white group-hover:-translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm text-[#D5CFE0] mt-1 line-clamp-1">
                      {region.tagline}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Region Detail Panel (Single-elevation surface) */}
        <div className="bg-[#14121A] border border-white/10 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#9D96AA] mb-3">
                <span className="inline-flex items-center gap-1.5 text-[#FF8A65] font-medium">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{selectedRegion.nameEn}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-data">{selectedRegion.coordinates}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedRegion.climate}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                {selectedRegion.index}. {selectedRegion.nameAr}
              </h3>

              <p className="text-base text-[#D5CFE0] leading-relaxed">
                {selectedRegion.summary}
              </p>
            </div>

            <div className="lg:col-span-5 lg:border-r lg:border-white/10 lg:pr-8">
              <div className="flex items-center gap-2 text-xs font-medium text-[#9D96AA] mb-4">
                <Compass className="w-4 h-4 text-[#FF8A65]" aria-hidden="true" />
                <span>أبرز معالم وأنشطة المنطقة</span>
              </div>
              <ul className="space-y-3 text-sm text-[#E4DFEC]">
                {selectedRegion.highlights.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span className="font-mono-data text-xs text-[#FF8A65] mt-1 shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

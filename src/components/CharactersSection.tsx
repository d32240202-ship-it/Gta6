import { useState } from 'react';
import { CHARACTERS, type CharacterProfile } from '../data/gameData';
import { SafeImage } from './SafeImage';

export function CharactersSection() {
  const [activeId, setActiveId] = useState<'lucia' | 'jason'>('lucia');
  const activeChar: CharacterProfile =
    CHARACTERS.find((c) => c.id === activeId) ?? CHARACTERS[0];

  return (
    <section
      id="characters"
      className="py-20 md:py-28 border-b border-white/10 bg-[#0B0A0E]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section Header + Interactive Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-[#FF8A65] mb-2">
              01. الشخصيات الرئيسية
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              شراكة مصيرية في قلب ليونيدا
            </h2>
          </div>

          {/* Functional Segmented Switcher */}
          <div
            role="tablist"
            aria-label="اختيار الشخصية"
            className="inline-flex items-center p-1 bg-[#14121A] border border-white/10 rounded-lg self-start"
          >
            {CHARACTERS.map((char) => {
              const isSelected = char.id === activeId;
              return (
                <button
                  key={char.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(char.id)}
                  className={`px-5 py-2 text-sm font-bold rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] ${
                    isSelected
                      ? 'bg-[#FF5A5F] text-white'
                      : 'text-[#B5AEC2] hover:text-white'
                  }`}
                >
                  {char.nameAr} · {char.nameEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Balanced Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Portrait Container */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-white/10 bg-[#14121A] min-h-[420px]">
            <SafeImage
              src={activeChar.image}
              alt={`${activeChar.nameAr} — ${activeChar.role}`}
              fallbackTitle={activeChar.nameAr}
              className="w-full h-full object-cover aspect-[3/4] lg:aspect-auto lg:h-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B0A0E]/90 to-transparent"
            />
            <div className="absolute bottom-5 inset-x-6 flex items-baseline justify-between gap-4">
              <div>
                <div className="font-display text-2xl font-bold text-white">
                  {activeChar.nameAr}
                </div>
                <div className="text-xs text-[#D5CFE0]">
                  {activeChar.origin}
                </div>
              </div>
              <span className="font-mono-data text-xs text-[#FF8A65]">
                {activeChar.nameEn.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Dossier & Attributes */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#14121A] border border-white/10 rounded-xl p-6 md:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-[#B5AEC2] mb-4">
                <span className="text-[#FF8A65] font-medium">{activeChar.role}</span>
                <span aria-hidden="true">·</span>
                <span>{activeChar.district}</span>
              </div>

              <blockquote className="font-display text-xl md:text-2xl font-semibold text-white leading-relaxed mb-6 pb-6 border-b border-white/10">
                «{activeChar.quote}»
              </blockquote>

              <p className="text-base text-[#D5CFE0] leading-relaxed mb-8">
                {activeChar.bio}
              </p>

              {/* Unboxed Specs Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-y border-white/10 mb-8">
                <div>
                  <div className="text-xs text-[#9D96AA] mb-1">المركبة الأساسية</div>
                  <div className="text-sm font-medium text-white">
                    {activeChar.vehicle}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#9D96AA] mb-1">نطاق النفوذ الميداني</div>
                  <div className="text-sm font-medium text-white">
                    {activeChar.district}
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Bars with Tabular Numerals */}
            <div className="space-y-4">
              <div className="text-xs font-medium text-[#9D96AA]">
                مؤشرات المهارة الأساسية
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {activeChar.attributes.map((attr) => (
                  <div key={attr.label}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <span className="text-[#E4DFEC]">{attr.label}</span>
                      <span className="font-mono-data text-xs text-[#FF8A65]">
                        {attr.value}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FF5A5F] rounded-full transition-all duration-300"
                        style={{ width: `${attr.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

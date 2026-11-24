import { useEffect, useState } from 'react';
import { X, ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';
import { TRAILER_CHAPTERS } from '../data/gameData';
import { SafeImage } from './SafeImage';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev + 1) % TRAILER_CHAPTERS.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex(
          (prev) => (prev - 1 + TRAILER_CHAPTERS.length) % TRAILER_CHAPTERS.length
        );
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !isAutoPlaying) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TRAILER_CHAPTERS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isOpen, isAutoPlaying]);

  if (!isOpen) return null;

  const chapter = TRAILER_CHAPTERS[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="استعراض مشاهد العرض التشويقي للعبة GTA VI"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#0B0A0E]/90 backdrop-blur-md"
    >
      <div className="w-full max-w-4xl bg-[#14121A] border border-white/15 rounded-xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-display font-bold text-white">
              العرض التشويقي الأول — GTA VI
            </span>
            <span aria-hidden="true" className="text-white/25">·</span>
            <span className="font-mono-data text-xs text-[#FF8A65]">
              {chapter.timestamp}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق العرض"
            className="p-2 text-[#C5BFD1] hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F]"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scene Frame */}
        <div className="relative aspect-[16/9] bg-[#0B0A0E]">
          <SafeImage
            src={chapter.image}
            alt={chapter.title}
            fallbackTitle={chapter.title}
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0A0E] via-[#0B0A0E]/45 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <div className="text-xs text-[#FF8A65] font-medium mb-1">
              {chapter.location} · {chapter.timestamp}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              {chapter.title}
            </h3>
            <p className="text-sm md:text-base text-[#D5CFE0] max-w-2xl leading-relaxed">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Controls & Chapters */}
        <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {TRAILER_CHAPTERS.map((item, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setIsAutoPlaying(false);
                  }}
                  className={`px-3.5 py-2 text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] ${
                    active
                      ? 'bg-[#FF5A5F] text-white font-bold'
                      : 'bg-[#0B0A0E] text-[#B5AEC2] hover:text-white border border-white/10'
                  }`}
                >
                  <span className="font-mono-data ml-1.5">{item.timestamp}</span>
                  <span>{item.location}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-label={isAutoPlaying ? 'إيقاف العرض التلقائي' : 'تشغيل العرض التلقائي'}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#E4DFEC] bg-[#0B0A0E] border border-white/10 hover:border-white/25 rounded-lg cursor-pointer whitespace-nowrap shrink-0"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>إيقاف</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>تشغيل</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + TRAILER_CHAPTERS.length) %
                    TRAILER_CHAPTERS.length
                );
                setIsAutoPlaying(false);
              }}
              aria-label="المشهد السابق"
              className="p-2 text-[#E4DFEC] bg-[#0B0A0E] border border-white/10 hover:border-white/25 rounded-lg cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => {
                setCurrentIndex((prev) => (prev + 1) % TRAILER_CHAPTERS.length);
                setIsAutoPlaying(false);
              }}
              aria-label="المشهد التالي"
              className="p-2 text-[#E4DFEC] bg-[#0B0A0E] border border-white/10 hover:border-white/25 rounded-lg cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

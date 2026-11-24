import { useState, type FormEvent } from 'react';
import { Check, BellRing } from 'lucide-react';
import { EDITIONS, type GameEdition } from '../data/gameData';

type PlatformOption = 'PS5' | 'Xbox Series X|S';

export function EditionsSection() {
  const [selectedEditionId, setSelectedEditionId] =
    useState<GameEdition['id']>('deluxe');
  const [platform, setPlatform] = useState<PlatformOption>('PS5');
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedRecord, setSubmittedRecord] = useState<{
    email: string;
    edition: string;
    platform: PlatformOption;
  } | null>(null);

  const selectedEdition =
    EDITIONS.find((e) => e.id === selectedEditionId) ?? EDITIONS[0];

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailPattern.test(trimmed)) {
      setErrorMsg('يرجى إدخال بريد إلكتروني صحيح لتأكيد التنبيه.');
      return;
    }

    setErrorMsg('');
    setSubmittedRecord({
      email: trimmed,
      edition: selectedEdition.nameAr,
      platform,
    });
  }

  return (
    <section
      id="editions"
      className="py-20 md:py-28 border-b border-white/10 bg-[#0B0A0E]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header + Platform Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-[#FF8A65] mb-2">
              03. الإصدارات والتسجيل المسبق
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              اختر نسختك واحجز تنبيه الإطلاق
            </h2>
          </div>

          <div
            role="group"
            aria-label="اختيار المنصة"
            className="inline-flex items-center p-1 bg-[#14121A] border border-white/10 rounded-lg self-start"
          >
            {(['PS5', 'Xbox Series X|S'] as PlatformOption[]).map((item) => {
              const active = platform === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setPlatform(item)}
                  aria-pressed={active}
                  className={`px-4 py-2 text-xs md:text-sm font-mono-data rounded-md transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] ${
                    active
                      ? 'bg-[#FF5A5F] text-white font-medium'
                      : 'text-[#B5AEC2] hover:text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {EDITIONS.map((edition) => {
            const isSelected = edition.id === selectedEditionId;
            return (
              <button
                key={edition.id}
                type="button"
                onClick={() => setSelectedEditionId(edition.id)}
                aria-pressed={isSelected}
                className={`text-right flex flex-col justify-between p-6 md:p-8 rounded-xl border transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A5F] ${
                  isSelected
                    ? 'bg-[#17141F] border-[#FF5A5F]'
                    : 'bg-[#14121A] border-white/10 hover:border-white/25'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-[#9D96AA] mb-3">
                    <span className="font-mono-data">{edition.nameEn}</span>
                    <span>{edition.releaseWindow}</span>
                  </div>

                  <div className="flex items-baseline justify-between gap-4 mb-4 pb-4 border-b border-white/10">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {edition.nameAr}
                    </h3>
                    <span className="font-mono-data text-2xl font-medium text-[#FF8A65]">
                      ${edition.priceUsd.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-sm text-[#D5CFE0] leading-relaxed mb-6">
                    {edition.summary}
                  </p>

                  <ul className="space-y-3 text-sm text-[#E4DFEC] mb-6">
                    {edition.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-[#FF5A5F] mt-1 shrink-0"
                          aria-hidden="true"
                        />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium">
                  <span className="text-[#9D96AA]">المنصة: {platform}</span>
                  <span
                    className={
                      isSelected ? 'text-[#FF5A5F]' : 'text-[#C5BFD1]'
                    }
                  >
                    {isSelected ? 'النسخة المختارة' : 'اضغط للاختيار'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lead Capture / Release Alert Form */}
        <div
          id="register"
          className="bg-[#14121A] border border-white/10 rounded-xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs text-[#FF8A65] font-medium mb-2">
                <BellRing className="w-4 h-4" aria-hidden="true" />
                <span>قائمة التنبيه الفوري للطلب المسبق</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                كن أول من يعلم عند فتح الطلب المسبق
              </h3>
              <p className="text-sm md:text-base text-[#C5BFD1] leading-relaxed">
                سجّل بريدك الإلكتروني لاستلام إشعار فوري فور توفر{' '}
                <strong className="text-white font-semibold">
                  {selectedEdition.nameAr}
                </strong>{' '}
                على منصة{' '}
                <span className="font-mono-data text-white">{platform}</span>،
                مع العروض الدعائية الرسمية وتحديثات خريطة ليونيدا.
              </p>
            </div>

            <div className="lg:col-span-6">
              {submittedRecord ? (
                <div
                  role="status"
                  className="bg-[#17141F] border border-[#FF5A5F]/50 rounded-lg p-6"
                >
                  <div className="flex items-center gap-2 text-white font-display text-lg font-bold mb-2">
                    <Check
                      className="w-5 h-5 text-[#FF5A5F]"
                      aria-hidden="true"
                    />
                    <span>تم تسجيل تنبيه الإصدار بنجاح</span>
                  </div>
                  <p className="text-sm text-[#D5CFE0] leading-relaxed mb-4">
                    سيتم إرسال إشعار فور توفر{' '}
                    <strong className="text-white">
                      {submittedRecord.edition}
                    </strong>{' '}
                    ({submittedRecord.platform}) إلى البريد:{' '}
                    <span className="font-mono-data text-[#FF8A65]" dir="ltr">
                      {submittedRecord.email}
                    </span>
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRecord(null);
                      setEmail('');
                    }}
                    className="text-xs font-medium text-[#C5BFD1] hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    تعديل البيانات أو تسجيل بريد آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <label
                    htmlFor="launch-email"
                    className="block text-xs font-medium text-[#C5BFD1]"
                  >
                    البريد الإلكتروني
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      id="launch-email"
                      type="email"
                      dir="ltr"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder="player@example.com"
                      aria-invalid={Boolean(errorMsg)}
                      className="flex-1 min-h-[46px] px-4 py-3 bg-[#0B0A0E] border border-white/15 rounded-lg text-sm text-white placeholder:text-[#6E677A] focus:outline-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F]"
                    />
                    <button
                      type="submit"
                      className="min-h-[46px] px-7 py-3 bg-[#FF5A5F] hover:bg-[#E8494F] text-white font-bold text-sm rounded-lg transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      تفعيل التنبيه
                    </button>
                  </div>
                  {errorMsg && (
                    <p role="alert" className="text-xs text-[#FF8A65]">
                      {errorMsg}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

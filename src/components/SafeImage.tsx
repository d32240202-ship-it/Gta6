import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1B1823] via-[#14121A] to-[#0B0A0E] text-[#A8A2B3] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-7 h-7 mb-2 opacity-60" aria-hidden="true" />
        <span className="text-sm font-medium text-[#E4DFEC]">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
}

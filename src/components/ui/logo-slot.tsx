import Image from "next/image";
import { cn } from "@/lib/cn";

export function LogoSlot({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[72px] items-center justify-center rounded-md border border-line bg-white px-4",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="max-h-8 w-auto object-contain"
      />
    </div>
  );
}

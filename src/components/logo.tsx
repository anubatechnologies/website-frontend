import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Anuba Technologies Logo"
      width={32}
      height={32}
      className={className}
    />
  );
}

import type { ReactNode } from "react";

type USPVisualCardProps = {
  className: string;
  children: ReactNode;
};

export default function USPVisualCard({
  className,
  children,
}: USPVisualCardProps) {
  return (
    <div
      className={`relative mx-auto h-[519px] w-full max-w-[519px] overflow-hidden rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}

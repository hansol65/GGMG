import type { ReactNode } from "react";

type USPTextCardSectionProps = {
  sectionClassName: string;
  wrapperClassName?: string;
  rowClassName?: string;
  textClassName?: string;
  cardClassName?: string;
  badgeClassName?: string;
  badge: string;
  title: ReactNode;
  description: ReactNode;
  highlights?: string[];
  highlightedIndex?: number;
  textDelay?: string;
  cardDelay?: string;
  children: ReactNode;
};

const joinClassNames = (...classNames: Array<string | undefined>) => {
  return classNames.filter(Boolean).join(" ");
};

export default function USPTextCardSection({
  sectionClassName = "bg-white",
  wrapperClassName = "mx-auto w-full max-w-[1440px] px-6 pb-20 pt-20 md:px-12 md:pb-28 md:pt-28 min-[1025px]:px-[189px] min-[1025px]:pb-[253px] min-[1025px]:pt-[252px]",
  rowClassName,
  textClassName = "max-w-[507px]",
  cardClassName,
  badgeClassName = "rounded-lg bg-white px-5 py-3",
  badge,
  title,
  description,
  highlights = [],
  highlightedIndex = 0,
  textDelay,
  cardDelay = "90ms",
  children,
}: USPTextCardSectionProps) {
  return (
    <section className={sectionClassName}>
      <div className={wrapperClassName}>
        <article
          className={joinClassNames(
            "mx-auto flex w-full flex-col items-center gap-10 min-[1025px]:max-w-[1062px] min-[1025px]:flex-row min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-9",
            rowClassName,
          )}
        >
          <div
            className={joinClassNames(
              "reveal mx-auto w-full max-w-[500px] min-[1025px]:mx-0",
              textClassName,
            )}
            data-reveal
            style={textDelay ? { transitionDelay: textDelay } : undefined}
          >
            <span
              className={joinClassNames(
                "inline-flex items-center justify-center gap-2.5 border border-gray-200 text-body2 text-gray-400",
                badgeClassName,
              )}
            >
              {badge}
            </span>

            <h3 className="mt-5 text-h2">{title}</h3>

            <p className="mt-5 text-body1 text-gray-300">{description}</p>

            {highlights.length > 0 && (
              <ul className="mt-10 flex w-full items-start text-center gap-4 space-y-0 whitespace-nowrap min-[1024px]:mt-[110px] min-[1024px]:block min-[1024px]:space-y-5 min-[1024px]:text-left">
                {highlights.map((highlight, index) => (
                  <li
                    key={highlight}
                    className={
                      index === highlightedIndex
                        ? "min-w-0 flex-1 text-body2 leading-tight text-gray-400 md:max-[1023px]:text-body1 min-[1024px]:flex-none min-[1024px]:text-h3"
                        : "min-w-0 flex-1 text-body2 leading-tight text-gray-200 md:max-[1023px]:text-body1 min-[1024px]:flex-none min-[1024px]:text-h3"
                    }
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className={joinClassNames(
              "reveal mx-auto w-full max-w-[519px] shrink-0 min-[1025px]:mx-0",
              cardClassName,
            )}
            data-reveal
            style={{ transitionDelay: cardDelay }}
          >
            {children}
          </div>
        </article>
      </div>
    </section>
  );
}

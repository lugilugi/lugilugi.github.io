import type { CSSProperties, ReactNode } from "react";

/** Position of an element on a 1920×1080 Canva slide, in slide pixels. */
export type Box = [left: number, top: number, width: number, height: number];

export function pos([l, t, w, h]: Box): CSSProperties {
  return { "--l": l, "--t": t, "--w": w, "--h": h } as CSSProperties;
}

/** One Canva slide. Children are placed with `pos()` and scale with the slide width. */
export function Slide({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`slide ${className}`} {...rest}>
      {children}
    </section>
  );
}

/** An image filling an exact slide box (cropped from the Canva export). */
export function SlideImage({ box, src, alt }: { box: Box; src: string; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="el img" style={pos(box)} src={src} alt={alt} loading="lazy" />;
}

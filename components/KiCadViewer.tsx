"use client";

import Script from "next/script";
import { asset } from "@/lib/asset";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

/**
 * Interactive KiCad viewer (schematics + PCBs) powered by KiCanvas — https://kicanvas.org
 *
 * Put your files in /public/kicad/ and pass their URLs, e.g.
 *   <KiCadViewer src="/kicad/foc-controller.kicad_pcb" />
 *   <KiCadViewer files={["/kicad/uwb.kicad_pro", "/kicad/uwb.kicad_sch", "/kicad/uwb.kicad_pcb"]} controls="full" />
 *
 * KiCanvas is in alpha. To pin a version, download https://kicanvas.org/kicanvas/kicanvas.js
 * into /public/kicanvas.js and set NEXT_PUBLIC_KICANVAS_SRC=/kicanvas.js.
 */
const KICANVAS_SRC = process.env.NEXT_PUBLIC_KICANVAS_SRC ?? "https://kicanvas.org/kicanvas/kicanvas.js";

type Props = {
  /** A single .kicad_sch or .kicad_pcb file. */
  src?: string;
  /** Several files from one project (.kicad_pro, .kicad_sch, .kicad_pcb). */
  files?: string[];
  /** none = static image, basic = pan/zoom/select, full = adds side panels. */
  controls?: "none" | "basic" | "full";
  /** Initial view: "objects", "page", or reference designators like "U1 C101". */
  zoom?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function KiCadViewer({ src, files, controls = "basic", zoom, className = "kicad", style }: Props) {
  return (
    <>
      <Script src={asset(KICANVAS_SRC)} type="module" strategy="afterInteractive" />
      <kicanvas-embed src={files || !src ? undefined : asset(src)} controls={controls} zoom={zoom} className={className} style={style}>
        {files?.map((f) => <kicanvas-source key={f} src={asset(f)} />)}
      </kicanvas-embed>
    </>
  );
}

type CustomEl<T> = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & T;

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "kicanvas-embed": CustomEl<{ src?: string; controls?: string; controlslist?: string; theme?: string; zoom?: string }>;
      "kicanvas-source": CustomEl<{ src?: string; type?: string; name?: string }>;
    }
  }
}

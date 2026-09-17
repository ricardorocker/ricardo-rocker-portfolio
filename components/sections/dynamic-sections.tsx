"use client";

import dynamic from "next/dynamic";

const ProofBar = dynamic(() => import("./proof-bar").then(m => ({ default: m.ProofBar })), {
  ssr: false,
  loading: () => <div className="h-12" />,
});
const Services = dynamic(() => import("./services").then(m => ({ default: m.Services })), {
  ssr: false,
  loading: () => <div className="h-64" />,
});
const TrustSignals = dynamic(() => import("./trust-signals").then(m => ({ default: m.TrustSignals })), {
  ssr: false,
  loading: () => <div className="h-24" />,
});
const Bento = dynamic(() => import("./bento").then(m => ({ default: m.Bento })), {
  ssr: false,
  loading: () => <div className="h-96" />,
});
const LogoCloud = dynamic(() => import("./logo-cloud").then(m => ({ default: m.LogoCloud })), {
  ssr: false,
  loading: () => <div className="h-16" />,
});
const Faq = dynamic(() => import("./faq").then(m => ({ default: m.Faq })), {
  ssr: false,
  loading: () => <div className="h-64" />,
});
const Process = dynamic(() => import("./process").then(m => ({ default: m.Process })), {
  ssr: false,
  loading: () => <div className="h-80" />,
});

export function DynamicSections() {
  return (
    <>
      <ProofBar />
      <Services />
      <TrustSignals />
      <Bento />
      <LogoCloud />
      <Faq />
      <Process />
    </>
  );
}

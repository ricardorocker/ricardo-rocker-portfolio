import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";
import { DynamicSections } from "@/components/sections/dynamic-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DynamicSections />
      <Stats />
      <Cta />
    </>
  );
}

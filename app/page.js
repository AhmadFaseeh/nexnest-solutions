import Hero from "@/components/Hero";
import ServicesBento from "@/components/ServicesBento";
import LogoTicker from "@/components/LogoTicker";

export default function Page() {
  return (
    <main className="relative selection:bg-amber-400 selection:text-slate-950">
      <Hero />
      <LogoTicker />
      <ServicesBento />
    </main>
  );
}

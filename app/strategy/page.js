import StrategyHero from "@/components/StrategyHero";
import TechAuditSimulator from "@/components/TechAuditSimulator";
import StrategicProcess from "@/components/StrategicProcess";
import ROICalculator from "@/components/ROICalculator";
import AIConsultant from "@/components/AIConsultant";

export default function StrategyPage() {
    return (
        <main className="relative selection:bg-amber-400 selection:text-slate-950 bg-[#020617]">
            <StrategyHero />
            <TechAuditSimulator />
            <StrategicProcess />
            <ROICalculator />
            <AIConsultant />
        </main>
    );
}

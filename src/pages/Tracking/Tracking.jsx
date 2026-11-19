import { useEffect, useState } from "react";
import Container from "../../components/ui/Container"; // عدّلي المسار حسب مكان Container عندك
import {
  TrackingHeader,
  TripSidebar,
  TrackingMap,
} from "../../components/tracking/TrackingParts";

/* بيانات تجريبية: لما يتوفر API بنبدّلها */
const demoTrip = {
  code: "SR-6499399",
  from: "حلب",
  to: "دمشق",
  fromCoords: [36.2021, 37.1343], // [خط العرض, خط الطول]
  toCoords: [33.5138, 36.2765],
  company: { name: "الشام للنقل", logo: "ش", color: "#109d9c", bg: "#e7f9f6" },
  departureTime: "17:00",
  arrivalTime: "23:04",
  distanceKm: 366,
  durationHours: 6.07,
};

/* منطق المحاكاة */
const START_PROGRESS = 7.2; // نفس القيمة الابتدائية بالنموذج
const STEP = 0.2; // كم % نزيد بكل خطوة
const TICK_MS = 200; // كل كم ميلي ثانية

function formatEta(hours) {
  if (hours < 1) return "أقل من ساعة";
  if (hours < 2) return "ساعة تقريباً";
  if (hours < 3) return "ساعتان تقريباً";
  return `${Math.round(hours)} ساعات تقريباً`;
}

function useTripSimulation(durationHours) {
  const [progress, setProgress] = useState(START_PROGRESS);
  const [isRunning, setIsRunning] = useState(true);

  const isFinished = progress >= 100;
  const isPlaying = isRunning && !isFinished;

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setProgress((p) => Math.min(p + STEP, 100));
    }, TICK_MS);
    return () => clearInterval(id); // تنظيف عند الإيقاف أو الخروج من الصفحة
  }, [isPlaying]);

  const eta = isFinished
    ? "وصلت الرحلة"
    : formatEta(durationHours * (1 - progress / 100));

  const statusText = isFinished
    ? "وصلت الحافلة إلى الوجهة"
    : isPlaying
      ? "الحافلة تتحرك نحو الوجهة"
      : "الحركة متوقفة مؤقتاً";

  return {
    progress,
    isPlaying,
    isFinished,
    eta,
    statusText,
    toggle: () => setIsRunning((r) => !r),
    reset: () => {
      setProgress(START_PROGRESS);
      setIsRunning(true);
    },
  };
}

/* الصفحة */
export default function Tracking() {
  const sim = useTripSimulation(demoTrip.durationHours);

  return (
    <main className="bg-[var(--surface)]] pb-[60px]">
      <Container>
        <TrackingHeader />
        <section className="grid items-stretch gap-[18px] lg:grid-cols-[349px_minmax(0,1fr)]">
          <TripSidebar trip={demoTrip} sim={sim} />
          <TrackingMap trip={demoTrip} progress={sim.progress} />
        </section>
      </Container>
    </main>
  );
}
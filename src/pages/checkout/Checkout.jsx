import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/ui/Container";
import { CheckoutHead, SeatSelectionStep, TripSummary } from "../../components/checkout/CheckoutParts";

// مؤقت لحد ما نربط الـ API
const TRIP = {
  company: "الشام للنقل", logo: "ش", logoColor: "#109d9c", logoBg: "#e7f9f6",
  type: "رحلة مباشرة", from: "حلب", to: "دمشق",
  departure: "07:30", arrival: "13:34", date: "2026-11-22", price: 130000,
};
const TOTAL_SEATS = 44;
const BOOKED_SEATS = [2, 7, 10, 16, 21, 29, 30, 38, 43];

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const passengers = Number(searchParams.get("passengers")) || 1;

  const [step, setStep] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (number) => {
    setSelectedSeats((prev) => {
      if (prev.includes(number)) return prev.filter((s) => s !== number);
      if (passengers === 1) return [number]; // مسافر واحد: الاختيار الجديد بيبدّل القديم
      if (prev.length >= passengers) return prev;
      return [...prev, number].sort((a, b) => a - b);
    });
  };

  return (
    <main className="min-h-[70vh]">
      <Container>
        <CheckoutHead step={step} />

        <section className="grid grid-cols-1 items-start gap-[21px] pb-[90px] lg:grid-cols-[minmax(0,1fr)_320px]">
          {step === 1 && (
            <SeatSelectionStep
              totalSeats={TOTAL_SEATS}
              bookedSeats={BOOKED_SEATS}
              selectedSeats={selectedSeats}
              passengers={passengers}
              onToggleSeat={toggleSeat}
              onNext={() => setStep(2)}
            />
          )}
          {/* الخطوة 2 و3 لاحقاً */}

          <TripSummary trip={TRIP} passengers={passengers} selectedSeats={selectedSeats} />
        </section>
      </Container>
    </main>
  );
}
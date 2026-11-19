import { useLocation } from "react-router-dom";

import PageBanner from "../../components/chooseTrip/PageBanner";
import SearchBox from "../../components/home/SearchBox";
import CompanySelector from "../../components/chooseTrip/CompanySelector";
import ResultsHeader from "../../components/chooseTrip/ResultsHeader";
import FiltersPanel from "../../components/chooseTrip/FiltersPanel";
import TripCard from "../../components/chooseTrip/TripCard";

export default function ChooseTrip() {
  const location = useLocation();
  const searchData = location.state;

  console.log("Search Data:", searchData);

  // بيانات تجريبية للرحلات
  const trips = [
    {
      id: "aleppo-sweida-1",
      company: "الفرات للسياحة",
      logo: "ف",
      rating: "4.8",
      badge: "الأكثر حجزاً",
      type: "حافلة سياحية",
      departure: "09:00",
      arrival: "16:56",
      from: "حلب",
      to: "السويداء",
      duration: "7 س 56 د",
      routeType: "مباشرة",
      price: "140,000 ل.س",
      seats: 12,
      distance: "465 كم",
    },
    {
      id: "aleppo-sweida-5",
      company: "الفرات للسياحة",
      logo: "ف",
      rating: "4.8",
      badge: "الأكثر حجزاً",
      type: "حافلة سياحية",
      departure: "20:30",
      arrival: "04:26",
      from: "حلب",
      to: "السويداء",
      duration: "7 س 56 د",
      routeType: "مباشرة",
      price: "138,000 ل.س",
      seats: 8,
      distance: "465 كم",
    },
  ];

  return (
    <>
      <PageBanner />

      <main className="min-h-[70vh]">
        <div className="relative z-10 mx-auto -mt-8 max-w-6xl px-4">

          <SearchBox initialData={searchData} />

          <CompanySelector />

          <ResultsHeader />

          {/* Results Layout */}
          <div
            dir="rtl"
            className="grid grid-cols-1 items-start gap-5 md:grid-cols-[260px_minmax(0,1fr)]"
          >
            <FiltersPanel />

            <div className="flex min-w-0 flex-col gap-[15px]">
              {trips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>

          </div>

        </div>
      </main>
    </>
  );
}
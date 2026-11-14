import Hero from "../../components/home/Hero";
import SearchBox from "../../components/home/SearchBox";
import { useNavigate } from "react-router-dom";
import MetricsStrip from "../../components/home/MetricsStrip";
import Destinations from "../../components/home/Destinations";
import ProcessSteps from "../../components/home/ProcessSteps";
import RouteFeature from "../../components/home/RouteFeature";
import CTABanner from "../../components/home/CTABanner";


export default function Home() {

  const navigate = useNavigate();

  const handleSearch = (searchData) => {
    navigate("/results", {
      state: searchData,
    });
  };

return (
  <main className="bg-page text-ink">
    <Hero />

    <div className="relative z-3 mx-auto max-w-[1216px] px-4 sm:px-6 lg:px-8">
      <SearchBox onSearch={handleSearch} />
    </div>

    <div className="mt-8">
      <MetricsStrip />
      <Destinations />
      <ProcessSteps />
       <RouteFeature />
       <CTABanner />

    </div>
  </main>

  );
}
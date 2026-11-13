import Hero from "../../components/home/Hero";
import SearchBox from "../../components/home/SearchBox";


export default function Home() {
  return (
   <main className="bg-page text-ink">

  <Hero />

  <div className="relative z-[3] mx-auto max-w-[1216px] px-4 sm:px-6 lg:px-8">
    <SearchBox />
  </div>

</main>
  )
}
import { useLocation } from "react-router-dom";

export default function ChooseTrip() {

  const location = useLocation();

  const searchData = location.state;

  console.log("Search Data:", searchData);

  return (
    <main dir="rtl" className="min-h-screen p-6">

      <h1 className="text-2xl font-black">
        اختر رحلتك
      </h1>

      {searchData && (
        <div className="mt-5 rounded-xl border p-5">

          <p>مدينة الانطلاق: {searchData.originId}</p>

          <p>مدينة الوصول: {searchData.destinationId}</p>

          <p>تاريخ الرحلة: {searchData.date}</p>

          <p>عدد المسافرين: {searchData.passengers}</p>

        </div>
      )}

    </main>
  );
}
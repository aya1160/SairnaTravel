// import { Bus } from "lucide-react";
// import TripCard from "./TripCard";

// export default function TripList({
//   trips = [],
//   onSelectTrip,
// }) {
//   if (trips.length === 0) {
//     return (
//       <div className="empty-state">
//         <Bus size={32} />
//         <p>لا توجد رحلات متاحة حالياً</p>
//       </div>
//     );
//   }

//   return (
//     <div className="trip-list">
//       {trips.map((trip) => (
//         <TripCard
//           key={trip.id}
//           trip={trip}
//           onSelectTrip={onSelectTrip}
//         />
//       ))}
//     </div>
//   );
// }
import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/home/Home";


import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/auth/Profile";
import ChooseTrip from "./pages/ChooseTrip/ChooseTrip";
import Tracking from "./pages/Tracking/Tracking";
import Companies from "./pages/companies/Companies";
import MyBookings from "./pages/myBookings/MyBookings";
import Checkout from "./pages/checkout/Checkout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
<Route path="results" element={<ChooseTrip />} />
        <Route path="companies" element={<Companies/>} />
        <Route path="my-trips" element={<MyBookings/>} />
        <Route path="tracking" element={<Tracking />} />
<Route path="/checkout/:tripId" element={<Checkout />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />

        
      </Route>
    </Routes>
  );
}
/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import PagePlaceholder from './pages/PagePlaceholder'
import Hero from './components/home/Hero'   

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="results" element={<PagePlaceholder title="اختر رحلة" />} />

        <Route path="companies" element={<PagePlaceholder title="شركات النقل" />} />
        <Route path="my-trips" element={<PagePlaceholder title="حجوزاتي" />} />
        <Route path="tracking" element={<PagePlaceholder title="تتبّع الرحلة" />} />
        <Route path="login" element={<PagePlaceholder title="تسجيل الدخول" />} />
        <Route path="register" element={<PagePlaceholder title="إنشاء حساب" />} />
        <Route path="*" element={<PagePlaceholder title="الصفحة غير موجودة" />} />
      </Route>
    </Routes>
  )
}
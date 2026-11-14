import { Outlet } from "react-router-dom";
import AnnouncementBar from './AnnouncementBar'
import Header from './Header'

export default function Layout() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
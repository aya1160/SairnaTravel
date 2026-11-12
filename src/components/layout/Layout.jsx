import { Outlet } from 'react-router'
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
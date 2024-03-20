import { lazy } from "react"
import { Dashboard, EmojiEvents } from "@mui/icons-material"
import { PAGE_URL } from "../resources/page_url"
import { performanceRoutes } from "./performanceRoutes"

const DashboardComponent = lazy(() => import("../components/pages/dashboardComponent"))

export const routes = [
  {
    title: "Dashboard",
    icon: Dashboard,
    path: PAGE_URL.dashboard,
    element: <DashboardComponent />,
    sideMenuView: true,
    children: [],
  },
  {
    title: "Performance",
    icon: EmojiEvents,
    path: PAGE_URL.performance,
    element: null,
    sideMenuView: true,
    children: performanceRoutes,
  },
]

export { performanceRoutes }

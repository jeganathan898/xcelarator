import { Navigate, Outlet } from "react-router-dom"
import LayoutComponent from "../components/layout/layoutComponent"
import { useSelector } from "react-redux"
import { IInitialState } from "../redux/interface"

export default function PrivateRouting() {
  const is_authenticated  = useSelector((state:IInitialState) => state.is_authenticated)

  return is_authenticated ? (
    <LayoutComponent>
        <Outlet />
    </LayoutComponent>
  ) : (
    <Navigate to="/" replace />
  )
}

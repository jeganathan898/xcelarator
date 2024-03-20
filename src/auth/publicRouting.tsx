import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { IInitialState } from "../redux/interface"

export default function PublicRouting() {
  const is_authenticated  = useSelector((state:IInitialState) => state.is_authenticated)

  return !is_authenticated ? <Outlet /> : <Navigate to="/" replace />
}

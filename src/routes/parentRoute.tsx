import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

interface IParentComponent {
    childerPath:string
    parentPath:string
}

export default function ParentRoute(props:IParentComponent) {
    const {parentPath, childerPath} = props
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname === parentPath){
            navigate(childerPath)
        }
    },[location.pathname, parentPath, childerPath])

  return <Outlet />
}

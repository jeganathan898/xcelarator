import { useState } from "react"
import { SubMenuContainer, SubMenuRow, SubMenuList, SubMenuLink } from "../../../assets/styles"
import { IRouting } from "../../../interface"
import { getPathname } from "../../../utilities/basicHelper"
import { useNavigate } from "react-router-dom"
import InnerMenuComponent from "./innerMenuComponent"

interface ISubMenuComponent {
  childRoutes: IRouting[]
}

export default function SubMenuComponent(props: ISubMenuComponent) {
  const navigate = useNavigate()
  const [menuAccordian, setMenuAccordian] = useState<string[]>([getPathname(location.pathname, 2)])

  const accordionControl = (path: string) => {
    const selectedPath = getPathname(path, 2)
    const cloneData = JSON.parse(JSON.stringify(menuAccordian))
    if (!menuAccordian.includes(selectedPath)) {
      if (selectedPath !== getPathname(location.pathname, 2)) {
        navigate(path)
      }
      cloneData.push(selectedPath)
      setMenuAccordian(cloneData)
    } else {
      const findIndex = menuAccordian.findIndex((f: string) => f === selectedPath)
      cloneData.splice(findIndex, 1)
      setMenuAccordian(cloneData)
    }
  }

  return (
    <SubMenuContainer>
      <SubMenuRow>
        {props.childRoutes
          .filter((f: IRouting) => f.sideMenuView)
          .map((item: IRouting, i: number) => {
            if (item.children.length > 0) {
              const active = menuAccordian.includes(getPathname(item.path, 2))
              return <InnerMenuComponent key={i} {...{ active, route: item, accordionControl }} />
            } else {
              return (
                <SubMenuList key={i} className="animate__animated animate__fadeInLeft animate__faster">
                  <SubMenuLink className={({ isActive }) => (isActive ? "active" : "")} to={item.path}>
                    <span className="icon">
                      <item.icon />
                    </span>
                    <span className="label">{item.title}</span>
                  </SubMenuLink>
                </SubMenuList>
              )
            }
          })}
      </SubMenuRow>
    </SubMenuContainer>
  )
}

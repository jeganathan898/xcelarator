import { ExpandMore } from "@mui/icons-material"
import { AccordionMenu, AccordionMenuLink, AccordionDropdown, SubMenuList, SubMenuLink } from "../../../assets/styles"
import { IRouting } from "../../../interface"

interface ISubMenuComponent {
  active: boolean
  accordionControl: (path: string) => void
  route: IRouting
}

export default function InnerMenuComponent(props: ISubMenuComponent) {
  const { active, accordionControl, route } = props
  return (
    <AccordionMenu
      elevation={0}
      disableGutters
      expanded={active}
      className="animate__animated animate__fadeInLeft animate__faster"
    >
      <AccordionMenuLink
        className={active ? "active" : ""}
        id={route.path}
        onClick={() => accordionControl(route.path)}
      >
        <span className="title_sec">
          <span className="icon">
            <route.icon />
          </span>
          <span className="title">{route.title}</span>
        </span>
        <span className="expand_icon">
          <ExpandMore />
        </span>
      </AccordionMenuLink>
      <AccordionDropdown>
        {route.children
          .filter((f: IRouting) => f.sideMenuView)
          .map((child: IRouting, j: number) => {
            return (
              <SubMenuList key={j}>
                <SubMenuLink className={({ isActive }) => (isActive ? "active" : "")} to={child.path}>
                  <span className="icon">
                    <child.icon />
                  </span>
                  <span className="label">{child.title}</span>
                </SubMenuLink>
              </SubMenuList>
            )
          })}
      </AccordionDropdown>
    </AccordionMenu>
  )
}

import { Link, useLocation } from "react-router-dom"
import {
  BrandSection,
  ImgTag,
  SideNavInner,
  SideNavStyle,
  MainMenuContainer,
  MainMenuRow,
  MainMenuList,
  MainMenuLink,
} from "../../../assets/styles"
//Images
import logo from "../../../assets/img/logo.svg"
import letter_logo from "../../../assets/img/grey_letter_logo.svg"
import { IRouting } from "../../../interface"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setCollape } from "../../../redux/action"
import { getPathname } from "../../../utilities/basicHelper"
import { PAGE_URL } from "../../../resources/page_url"
import SubMenuComponent from "./subMenuComponent"
import { routes } from "../../../routes"

export default function SideMenuComponent() {
  const location = useLocation()
  const dispatch = useDispatch()
  const [childRoutes, setChildRoutes] = useState<IRouting[]>([])

  useEffect(() => {
    const getRoutes = () => {
      const parentRoutes = routes.find(
        (f: IRouting) => getPathname(f.path, 1) === getPathname(location.pathname, 1)
      )
      if (parentRoutes) {
        setChildRoutes(parentRoutes.children)
        dispatch(setCollape(parentRoutes.children.length > 0))
      }
    }

    getRoutes()
  }, [location.pathname])

  return (
    <>
      <SideNavStyle $collapse={childRoutes.length > 0}>
        <BrandSection>
          <Link to={PAGE_URL.dashboard}>
            {childRoutes.length > 0 ? (
              <ImgTag src={logo} $imgfit="contain" alt="Sedap" />
            ) : (
              <ImgTag src={letter_logo} $imgfit="contain" alt="Sedap" />
            )}
          </Link>
        </BrandSection>
        <SideNavInner>
          <MainMenuContainer>
            <MainMenuRow>
              {routes
                .filter((f: IRouting) => f.sideMenuView)
                .map((item: IRouting, i: number) => {
                  return (
                    <MainMenuList key={i}>
                      <MainMenuLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                        <span>
                          <span className="icon">
                            <item.icon />
                          </span>
                          <span className="label">{item.title}</span>
                        </span>
                      </MainMenuLink>
                    </MainMenuList>
                  )
                })}
            </MainMenuRow>
          </MainMenuContainer>

          {childRoutes.length > 0 && <SubMenuComponent childRoutes={childRoutes} />}
        </SideNavInner>
      </SideNavStyle>
    </>
  )
}

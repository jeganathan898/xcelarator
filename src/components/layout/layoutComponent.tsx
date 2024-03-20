//Redux
import { useSelector } from "react-redux"
import { IInitialState } from "../../redux/interface"
//Styled Components
import { LayoutStyle, MainContentSection } from "../../assets/styles"
//Components
import HeaderComponent from "../partial/headerComponent"
import SideMenuComponent from "../partial/sideNavBar/sideMenuComponent"

export default function LayoutComponent({ children }: any) {
  const collapse = useSelector((state: IInitialState) => state.collapse)

  return (
    <LayoutStyle>
      <HeaderComponent />
      <SideMenuComponent />
      <MainContentSection $collapse={collapse}>
        {children}
      </MainContentSection>
    </LayoutStyle>
  )
}

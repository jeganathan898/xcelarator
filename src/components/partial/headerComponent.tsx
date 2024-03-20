import { Search, Notifications } from "@mui/icons-material"
import {
  AdminProfButton,
  HeaderMenu,
  HeaderStyle,
  ImgTag,
  NotifcationButton,
  SearchBar,
} from "../../assets/styles"
import { useDispatch, useSelector } from "react-redux"
import { IInitialState } from "../../redux/interface"
import { setAuthentication } from "../../redux/action"

export default function HeaderComponent() {
  const dispatch = useDispatch()
  const collapse = useSelector((state: IInitialState) => state.collapse)
  
  const logOut = () => {
    localStorage.removeItem("auth_token")
    dispatch(setAuthentication(false))
  }
  return (
    <>
      <HeaderStyle $collapse={collapse}>
        <SearchBar>
          <Search className="search_icon" />
          <input type="text" placeholder="Search" />
        </SearchBar>

        <HeaderMenu>
          <ul>
            <li>
              <NotifcationButton>
                <Notifications />
                <span className="unread_count">15</span>
              </NotifcationButton>
            </li>
            <li>
              <AdminProfButton onClick={logOut}>
                <ImgTag
                  $imgfit="cover"
                  src="https://cutewallpaper.org/24/image-placeholder-png/male-placeholder-transparent-png-715x657-free-download-on-nicepng.png"
                  alt="avatar"
                />
              </AdminProfButton>
            </li>
          </ul>
        </HeaderMenu>
      </HeaderStyle>
    </>
  )
}

import { ThemeProvider } from "styled-components"
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material"
import { GlobalStyle, PageLoader, SectionLoader } from "./assets/styles"
import { light } from "./assets/styles/themeColor"
import { Suspense, useEffect } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { IBasicRouting, IRouting } from "./interface"
import { PAGE_URL } from "./resources/page_url"
import ParentRoute from "./routes/parentRoute"
import PrivateRouting from "./auth/privateRouting"
import { routes } from "./routes"
import PublicRouting from "./auth/publicRouting"
import { authRoutes } from "./routes/authRoutes"
import Loader from "./templates/loader"
import { useDispatch, useSelector } from "react-redux"
import { IInitialState } from "./redux/interface"
import { setAuthentication } from "./redux/action"

function App() {
  const dispatch = useDispatch()
  const is_authenticated  = useSelector((state:IInitialState) => state.is_authenticated)

  const THEME = createTheme({
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
  })

  const routingRecurstion = (parent: IRouting, i: number) => {
    if (parent.children.length > 0) {
      const pathProps = {
        parentPath: parent.path,
        childerPath: parent.children[0].path,
      }
      return (
        <Route key={i} path={parent.path} element={<ParentRoute {...pathProps} />}>
          {parent.children.map((child: IRouting, j: number) => {
            if (child.children.length > 0) {
              return routingRecurstion(child, j)
            } else {
              return (
                <Route
                  key={j}
                  path={child.path}
                  element={
                    <Suspense
                      fallback={
                        <SectionLoader>
                          <Loader />
                        </SectionLoader>
                      }
                    >
                      {child.element}
                    </Suspense>
                  }
                />
              )
            }
          })}
        </Route>
      )
    } else {
      return (
        <Route
          key={i}
          path={parent.path}
          element={
            <Suspense
              fallback={
                <SectionLoader>
                  <Loader />
                </SectionLoader>
              }
            >
              {parent.element}
            </Suspense>
          }
        />
      )
    }
  }

  useEffect(()=>{
    // if(localStorage.getItem("auth_token")){
      dispatch(setAuthentication(true))
    // }
  },[dispatch])

  return (
    <>
      <ThemeProvider theme={light}>
        <MuiThemeProvider theme={THEME}>
          <GlobalStyle />
          <Routes>
            <Route
              path="/"
              element={<Navigate to={is_authenticated ? PAGE_URL.dashboard : PAGE_URL.login} />}
            />

            <Route element={<PublicRouting />}>
              {authRoutes.map((item: IBasicRouting, i: number) => {
                return (
                  <Route
                    key={i}
                    path={item.path}
                    element={
                      <Suspense
                        fallback={
                          <PageLoader>
                            <Loader />
                          </PageLoader>
                        }
                      >
                        {item.element}
                      </Suspense>
                    }
                  />
                )
              })}
            </Route>

            <Route element={<PrivateRouting />}>
              {routes.map((parent: IRouting, i: number) => {
                return routingRecurstion(parent, i)
              })}
            </Route>
          </Routes>
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  )
}

export default App

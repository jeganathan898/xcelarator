import { lazy } from "react"
import { PAGE_URL } from "../resources/page_url.ts"

const LoginComponent = lazy(() => import("../components/pages/authentication/loginComponent.tsx"))
const SignupComponent = lazy(() => import("../components/pages/authentication/signupComponent.tsx"))

export const authRoutes = [
  {
    path: PAGE_URL.login,
    element: <LoginComponent />,
  },
  {
    path: PAGE_URL.signup,
    element: <SignupComponent />,
  },
]

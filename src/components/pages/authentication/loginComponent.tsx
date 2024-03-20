import {
  AuthForm,
  AuthLogo,
  AuthTitleSection,
  Button,
  FormControl,
  FormSection,
  ImageSection,
  LinkSection,
} from "../../../assets/styles"
import login_img from "../../../assets/img/login.svg"
import FormInputComponent from "../../form/formInputComponent"

import logo from "../../../assets/img/white_logo.svg"
import { Link } from "react-router-dom"
import AuthLayoutComponent from "./authLayoutComponent"
import { PAGE_URL } from "../../../resources/page_url"
import { useDispatch } from "react-redux"
import { setAuthentication } from "../../../redux/action"
import { useLazyQuery } from "@apollo/client"
import { LOGIN_AUTH } from "../../../api/query"
import { useState } from "react"
import { IChangeEvent } from "../../../interface"

interface IFormData {
  email: string
  password: string
}

interface IState {
  formData: IFormData
  errorData: IFormData
}

const formValue = {
  email: "",
  password: "",
}

export default function LoginComponent() {
  const dispatch = useDispatch()
  const [loginAuth] = useLazyQuery(LOGIN_AUTH, { fetchPolicy: "network-only" })
  const [state, setState] = useState<IState>({
    formData: formValue,
    errorData: formValue,
  })
  const { formData, errorData } = state

  const changeHandler = (e: IChangeEvent) => {
    const { name, value } = e.target

    setState((state) => ({
      ...state,
      formData: {
        ...state.formData,
        [name]: value,
      },
      errorData: {
        ...state.errorData,
        [name]: "",
      },
    }))
  }

  const login = async () => {
    const response = await loginAuth({ variables: { email: "admin@gmail.com", password: "Admin@123" } })
    const { data } = response
    if (data.loginAuth.token) {
      localStorage.setItem("auth_token", data.loginAuth.token)
      dispatch(setAuthentication(true))
    }
  }
  return (
    <>
      <AuthLayoutComponent>
        <ImageSection>
          <img className="img" src={login_img} alt="login" />
        </ImageSection>

        <FormSection>
          <AuthLogo>
            <img src={logo} alt="logo" />
          </AuthLogo>
          <AuthTitleSection>
            <h3>Sign in</h3>
            <p>to access People</p>
          </AuthTitleSection>
          <AuthForm>
            <FormControl>
              <FormInputComponent
                placeholder="Email Address"
                name="email"
                type="text"
                value={formData.email}
                onChange={changeHandler}
                error={errorData.email}
              />
            </FormControl>

            <FormControl>
              <FormInputComponent
                placeholder="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={changeHandler}
                error={errorData.password}
              />
            </FormControl>

            <Button $variant="reflex_secondary" onClick={login}>
              Sign In
            </Button>

            <LinkSection>
              <Link className="forget_link" to="/">
                Forgot Password?
              </Link>
              Don't have a Xcelerator account? <Link to={PAGE_URL.signup}>Sign Up Now</Link>
            </LinkSection>
          </AuthForm>
        </FormSection>
      </AuthLayoutComponent>
    </>
  )
}

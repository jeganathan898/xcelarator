import { Link } from "react-router-dom"
import logo from "../../../assets/img/white_logo.svg"
import {
  ImageSection,
  FormSection,
  AuthLogo,
  AuthTitleSection,
  AuthForm,
  LinkSection,
  FormControl,
  Button,
  FormLabel,
  FormLabelRow,
} from "../../../assets/styles"
import { PAGE_URL } from "../../../resources/page_url"
import FormInputComponent from "../../form/formInputComponent"
import AuthLayoutComponent from "./authLayoutComponent"
import FormCheckBoxComponent from "../../form/formCheckBoxComponent"
import sign_up from "../../../assets/img/signup.svg"

export default function SignupComponent() {
  return (
    <AuthLayoutComponent>
      <FormSection>
        <AuthLogo>
          <img src={logo} alt="logo" />
        </AuthLogo>
        <AuthTitleSection>
          <h3>Sign Up</h3>
          <p>to access People</p>
        </AuthTitleSection>
        <AuthForm>
          <FormControl>
            <FormInputComponent
              placeholder="Name"
              name="name"
              type="text"
              value=""
              onChange={(e: any) => console.log(e)}
            />
          </FormControl>

          <FormControl>
            <FormInputComponent
              placeholder="Email Address"
              name="email_address"
              type="text"
              value=""
              onChange={(e: any) => console.log(e)}
            />
          </FormControl>

          <FormControl>
            <FormInputComponent
              placeholder="Password"
              name="password"
              type="password"
              value=""
              onChange={(e: any) => console.log(e)}
            />
          </FormControl>

          <FormControl>
            <FormInputComponent
              placeholder="Confirm Password"
              name="password"
              type="password"
              value=""
              onChange={(e: any) => console.log(e)}
            />
          </FormControl>

          <FormLabelRow justifyContent="center" my={3}>
            <FormCheckBoxComponent
              name="terms_and_conditions"
              onChange={(e: any) => console.log(e)}
              id="terms_and_conditions"
            />
            <FormLabel htmlFor="terms_and_conditions">
              I agree to the Terms of Service and Privacy Policy.
            </FormLabel>
          </FormLabelRow>

          <Button $variant="reflex_secondary">Sign In</Button>

          <LinkSection>
            Have a Xcelerator account? <Link to={PAGE_URL.login}>Sign In</Link>
          </LinkSection>
        </AuthForm>
      </FormSection>

      <ImageSection>
        <img className="img" src={sign_up} alt="sign up" />
      </ImageSection>
    </AuthLayoutComponent>
  )
}

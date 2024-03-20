import { AuthBackground, AuthFooter, AuthLayout } from "../../../assets/styles";

export default function AuthLayoutComponent({ children }: any) {
  return (
    <AuthBackground>
      <AuthLayout>
        {children}
      </AuthLayout>

      <AuthFooter>
          <p>© {new Date().getUTCFullYear()}, Colan Info Tech Pvt. Ltd. All Rights Reserved.</p>
      </AuthFooter>
    </AuthBackground>
  )
}

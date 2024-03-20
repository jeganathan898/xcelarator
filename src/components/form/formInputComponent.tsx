import { Delete, Edit, VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material"
import { FormHint, FormInput, InputAction, InputActionRow } from "../../assets/styles"
import { IFormField } from "../../interface"
import { useState } from "react"

export default function FormInputComponent(props: IFormField) {
  const { type, name, value, error, onChange, action, actionMethods, placeholder } = props
  const formProps = { name, value, placeholder, onChange }
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <FormInput $error={(error as string)?.length > 0} $type={type}>
        {type === "text" && <input type="text" {...formProps} />}

        {type === "password" && <input type={showPassword ? "text" : "password"} {...formProps} />}

        {type === "password" && (
          <InputActionRow>
            <InputAction onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOutlined />  : <VisibilityOffOutlined />}
            </InputAction>
          </InputActionRow>
        )}

        {action && (
          <InputActionRow>
            {(action === 2 || action === 3) && (
              <InputAction className="info" onClick={actionMethods?.edit}>
                <Edit />
              </InputAction>
            )}

            {(action === 1 || action === 3) && (
              <InputAction className="danger" onClick={actionMethods?.delete}>
                <Delete />
              </InputAction>
            )}
          </InputActionRow>
        )}

        {type === "textarea" && <textarea rows={6} {...formProps} />}
      </FormInput>
      {error && <FormHint>{error}</FormHint>}
    </>
  )
}

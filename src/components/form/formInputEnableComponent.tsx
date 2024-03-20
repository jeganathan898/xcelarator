import { useState } from "react"
import { Edit, Check, Close } from "@mui/icons-material"
import {
  FormInputEnable,
  InputActionRow,
  InputAction,
} from "../../assets/styles"
import { IFormField } from "../../interface"

export default function FormInputEnableComponent(props: IFormField) {
  const [enable, setEnable] = useState<boolean>(true)
  const { name, value, onChange } = props
  const formProps = { name, value, onChange }

  return (
    <FormInputEnable>
      <input {...formProps} disabled={enable} />

      <InputActionRow>
        {enable && (
          <InputAction className="info" onClick={() => setEnable(false)}>
            <Edit />
          </InputAction>
        )}

        {!enable && (
          <>
            <InputAction className="success" onClick={() => setEnable(false)}>
              <Check />
            </InputAction>

            <InputAction className="danger" onClick={() => setEnable(true)}>
              <Close />
            </InputAction>
          </>
        )}
      </InputActionRow>
    </FormInputEnable>
  )
}

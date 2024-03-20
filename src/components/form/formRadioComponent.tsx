import { FormRadio } from "../../assets/styles"
import { IFormRadio } from "../../interface"

export default function FormRadioComponent(props: IFormRadio) {
  const { name, onChange, checked, id, label } = props
  const formProps = { name, onChange, checked, id }
  return (
    <FormRadio>
      <input type="radio" {...formProps} />
      <span className="selected">{label}</span>
    </FormRadio>
  )
}

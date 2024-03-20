import { FormCheckBox } from "../../assets/styles"
import { IFormToggle } from "../../interface"

export default function FormCheckBoxComponent(props: IFormToggle) {
  return (
    <FormCheckBox>
      <input type="checkbox" {...props} />
      <span className="checkmark"></span>
    </FormCheckBox>
  )
}

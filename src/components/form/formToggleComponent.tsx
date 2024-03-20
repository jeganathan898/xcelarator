import { ToggleSwitch } from "../../assets/styles"
import { IFormToggle } from "../../interface"

export default function FormToggleComponent(props: IFormToggle) {
  return (
    <ToggleSwitch>
      <input type="checkbox" {...props} />
      <span className="toggleSlider"></span>
    </ToggleSwitch>
  )
}

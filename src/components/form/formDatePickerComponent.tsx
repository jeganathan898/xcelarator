import { CalendarMonth } from "@mui/icons-material"
import ReactDatePicker from "react-datepicker"
import { FormInput, FormDatePicker, FormHint } from "../../assets/styles"
import { IFormDateField } from "../../interface"

export default function FormDatePickerComponent(props: IFormDateField) {
  const { name, selected, error, onChange } = props
  const formProps = { name, selected, onChange }

  return (
    <>
      <FormInput $error={(error as string)?.length > 0} $type="datePicker">
        <FormDatePicker>
          <ReactDatePicker dateFormat="dd-MM-yyyy" {...formProps} />
          <CalendarMonth className="input_icon" />
        </FormDatePicker>
      </FormInput>
      {error && <FormHint>{error}</FormHint>}
    </>
  )
}

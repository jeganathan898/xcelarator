import { SvgIconComponent } from "@mui/icons-material"
import { IButton } from "../assets/styles/interface"

export interface IBasicRouting {
  path: string
  element: any
}
export interface IRouting {
  path: string
  element: any
  title: string
  icon: SvgIconComponent
  sideMenuView: boolean
  children: IRouting[]
}
export type IChangeEvent =
  | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
export type IFormFields = "text" | "textarea" | "datePicker" | "password"
export interface IActionMethods {
  edit: () => void
  delete: () => void
}
export interface IFormField {
  type: IFormFields
  name: string
  value: string
  onChange: (e: IChangeEvent) => void
  error?: string
  required?: boolean
  placeholder?: string
  action?: 1 | 2 | 3
  actionMethods?: IActionMethods
}
export interface IFormDateField {
  name: string
  selected: Date | null
  error?: string
  onChange: (e: Date) => void
  placeholder?: string
}
export interface IFormToggle {
  id?: string
  name: string
  checked?: boolean
  onChange: (e: IChangeEvent) => void
}
export interface IFormRadio {
  label: string
  id?: string
  name: string
  checked?: boolean
  onChange: (e: IChangeEvent) => void
}
export interface IAutoCompleteProps {
  name: string
  options: any[]
  placeholder?: string
  error?: boolean
  action?: 1 | 2 | 3
  actionMethods?: IActionMethods
  onChange: (e: IChangeEvent, values: {}) => void
}
export type IFormAutoComplete = IAutoCompleteProps & {
  value?: any
}
export type IFormMultiSelect = IAutoCompleteProps & {
  value?: any[]
  disableValue?: any
}
export interface IDropdown {
  content: any
  buttonProps: IButton
  options: any[]
  getValues?: (value: any) => void
}
export interface IPreformanceModule {
  label: string
  name: string
  displayName: string
  status: boolean
  icon: string
}

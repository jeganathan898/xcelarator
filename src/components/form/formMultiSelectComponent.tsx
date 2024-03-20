import { Autocomplete, Chip } from "@mui/material"
import {
  FormDropdownOption,
  FormTextField,
  InputAction,
  InputActionRow,
} from "../../assets/styles"
import { IFormMultiSelect } from "../../interface"
import { Edit, Delete } from "@mui/icons-material"

export default function FormMultiSelectComponent(props: IFormMultiSelect) {
  const { options, value, disableValue, placeholder, action, actionMethods } =
    props
  return (
    <Autocomplete
      className="focus_shadow"
      multiple
      options={options}
      defaultValue={value}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      filterSelectedOptions
      renderInput={(params) => (
        <>
          <FormTextField placeholder={placeholder} {...params} />
          {action && (
            <InputActionRow>
              {(action === 2 || action === 3) && (
                <InputAction className="edit" onClick={actionMethods?.edit}>
                  <Edit />
                </InputAction>
              )}

              {(action === 1 || action === 3) && (
                <InputAction className="delete" onClick={actionMethods?.delete}>
                  <Delete />
                </InputAction>
              )}
            </InputActionRow>
          )}
        </>
      )}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option.name}
            {...getTagProps({ index })}
            disabled={option.id === disableValue}
          />
        ))
      }
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <FormDropdownOption {...props}>{option.name}</FormDropdownOption>
      )}
    />
  )
}

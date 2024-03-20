import { Autocomplete } from "@mui/material"
import {
  FormDropdownOption,
  FormInput,
  InputAction,
  InputActionRow,
} from "../../assets/styles"
import { IFormAutoComplete } from "../../interface"
import { Delete, Edit } from "@mui/icons-material"

export default function FormAutoCompleteComponent(props: IFormAutoComplete) {
  const { options, placeholder, onChange, action, actionMethods, value } = props
  return (
    <>
      <Autocomplete
        onChange={(e, value) => onChange(e, value)}
        options={options}
        value={value}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        inputValue={value?.name}
        renderInput={(params) => (
          <FormInput ref={params.InputProps.ref} $type="text">
            <input
              type="text"
              placeholder={placeholder}
              {...params.inputProps}
            />

            {action && (
              <InputActionRow>
                {(action === 2 || action === 3) && (
                  <InputAction className="edit" onClick={actionMethods?.edit}>
                    <Edit />
                  </InputAction>
                )}

                {(action === 1 || action === 3) && (
                  <InputAction
                    className="delete"
                    onClick={actionMethods?.delete}
                  >
                    <Delete />
                  </InputAction>
                )}
              </InputActionRow>
            )}
          </FormInput>
        )}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <FormDropdownOption {...props}>{option.name}</FormDropdownOption>
        )}
      />
    </>
  )
}

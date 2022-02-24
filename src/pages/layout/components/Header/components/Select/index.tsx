import { Props } from './types'
import { components } from 'react-select'
import { Container, MySelect, Label, IconDown, customStyle } from './style'

const MultiSelect = ({
  defaultValue,
  options,
  value,
  onChange = () => {},
  placeholder,
  field,
  label,
  isDisabled,
  isSearchable,
  loadingMessage,
  nooptionsmessage,
  isMulti,
}: Props) => {
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator data-cy={props.dataCy} {...props}>
        {props.IconDown ? props.IconDown : <IconDown />}
      </components.DropdownIndicator>
    )
  }

  const NoOptionsMessage = (props: any) => {
    return (
      <components.NoOptionsMessage data-cy={props.dataCy} {...props}>
        <span className="custom-css-class">{nooptionsmessage}</span>
      </components.NoOptionsMessage>
    )
  }

  return (
    <Container>
      {label ? (
        <Label htmlFor={label} focused={true}>
          {label}
        </Label>
      ) : null}
      <MySelect
        {...field}
        value={value}
        inputId={label}
        options={options}
        isMulti={isMulti}
        onChange={onChange}
        styles={customStyle}
        isDisabled={isDisabled}
        defaultValue={defaultValue}
        isSearchable={isSearchable}
        loadingMessage={loadingMessage}
        placeholder={placeholder ? placeholder : ''}
        components={{ DropdownIndicator, NoOptionsMessage }}
      />
    </Container>
  )
}

export default MultiSelect

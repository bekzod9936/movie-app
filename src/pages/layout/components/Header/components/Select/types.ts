export interface PropsOption {
  value?: any
  label?: any
}

export interface Props {
  defaultValue?: string | number
  onChange?: (e: any) => void
  placeholder?: string
  nooptionsmessage?: any
  label?: any
  value?: any
  field?: any
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isSearchable?: boolean
  options?: PropsOption[]
  loadingMessage?: any
  isMulti?: boolean
}

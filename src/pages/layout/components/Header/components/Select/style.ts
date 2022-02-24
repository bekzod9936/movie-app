import Select from 'react-select'
import styled from 'styled-components'
import { InputLabel } from '@mui/material'
import { ReactComponent as Down } from 'assets/icons/down.svg'

export const Container = styled.div`
  max-width: 300px;
`

export const MySelect = styled(Select)`
  .css-1ss0qri-control {
    background-color: white !important;
  }
  .css-xb97g8:hover {
    background-color: #ddd !important;
  }
  .css-xb97g8 {
    background-color: transparent !important;
  }
  .css-1okebmr-indicatorSeparator {
    width: 0 !important;
  }
  [class$='-indicatorSeparator'] {
    background-color: transparent !important;
  }
  .css-1pahdxg-control {
    border: none !important;
  }
  [class$='-placeholder'] {
    font-weight: 500;
    color: #a5a5a5 !important;
    font-size: 16px !important;
  }
  [class$='ValueContainer'],
  [class$='-control'] {
    min-height: 40px !important;
  }
  [class$='-singleValue'],
  .css-12jo7m5 {
    color: #223367 !important;
    font-size: 16px !important;
    font-weight: 500 !important;
  }
  [class$='-indicatorContainer'] {
    padding: 0 !important;
  }

  [class$='-control'] > div:first-child {
    padding: 2px 10px !important;
  }
`

export const Label = styled(InputLabel)`
  color: #c7c7c7 !important;
  font-weight: bold !important;
  font-size: 15px !important;
  margin-bottom: 7px !important;
  cursor: pointer;
`

export const IconDown = styled(Down)`
  margin-right: 10px;
`

export const customStyle = {
  control: (base: any) => ({
    ...base,
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      border: 'inherite',
    },
    backgroundColor: 'white',
  }),

  option: (base: any, state: any) => {
    return {
      ...base,
      color: state.isDisabled ? '#c7c7c7' : '#223367',
      fontWeight: '500',
      backgroundColor: state.isSelected ? '#E8F0FE' : 'white',
      cursor: state.isDisabled ? 'not-allowed' : 'pointer',
    }
  },
}

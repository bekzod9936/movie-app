import { Button } from '@mui/material'
import { ReactComponent as IconFilter } from 'assets/icons/filter.svg'

const AdvencedSearch = () => {
  return (
    <div>
      <Button startIcon={<IconFilter />}>Advanced Search</Button>
    </div>
  )
}

export default AdvencedSearch

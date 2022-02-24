import { useState } from 'react'
import useHeader from './useHeader'
import Select from './components/Select'
import AdvencedSearch from './components/AdvencedSearch'
import { useFilterParamsStore } from 'services/store/filterParams'
import { Container, Content, Title, Filters, MyButton } from './style'
import { ReactComponent as IconSearch } from 'assets/icons/search.svg'

const Header = () => {
  const [select, setSelect] = useState()

  useHeader()

  const rates = useFilterParamsStore((state) => state.rates)
  const genres = useFilterParamsStore((state) => state.genres)
  const languages = useFilterParamsStore((state) => state.languages)

  const handleChange = (value: any) => {
    setSelect(value)
  }

  return (
    <Container>
      <Content>
        <Title>Find Your Movie</Title>
        <Filters>
          <Select
            label="Genre"
            value={select}
            options={genres}
            placeholder="Select Genre"
            onChange={handleChange}
            isMulti={true}
          />
          <Select
            label="Language"
            value={select}
            options={languages}
            placeholder="Select Language"
            onChange={handleChange}
            isMulti={true}
          />
          <Select
            label="Rate"
            value={select}
            options={rates}
            placeholder="Select Rate"
            onChange={handleChange}
            isMulti={true}
          />
          <AdvencedSearch />
          <MyButton startIcon={<IconSearch />} variant="contained">
            Search
          </MyButton>
        </Filters>
      </Content>
    </Container>
  )
}

export default Header

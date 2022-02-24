import { useQuery } from 'react-query'
import { fetchGenre, fetchLanguages } from 'services/api'
import { useFilterParamsStore } from 'services/store/filterParams'

const useHeader = () => {
  const setGenres = useFilterParamsStore((state) => state.setGenres)
  const setLanguages = useFilterParamsStore((state) => state.setLanguages)

  const responseLanguages = useQuery('fetchLanguages', fetchLanguages, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: false,
    onSuccess: (data) => {
      setLanguages(data.data.map((v: string) => ({ value: v, label: v })))
    },
  })

  const responseGenres = useQuery('fetchGenre', fetchGenre, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      setGenres(data.data.map((v: string) => ({ value: v, label: v })))
      setTimeout(() => responseLanguages.refetch(), 1000)
    },
  })

  return { responseGenres, responseLanguages }
}

export default useHeader

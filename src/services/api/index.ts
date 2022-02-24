import axiosInterceptor from 'services/interceptor'

export const fetchList = () => {
  const response = axiosInterceptor('/advancedsearch')
  return response
}

export const fetchGenre = () => {
  const response = axiosInterceptor('/getParams', {
    params: { param: 'genre' },
  })
  return response
}

export const fetchLanguages = () => {
  const response = axiosInterceptor('/getParams', {
    params: { param: 'language' },
  })
  return response
}

import axios from 'axios'

export const getUserInfo = () => {
  return axios.get(
    'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users',
    {headers: {Prefer: 'code=200, example=success'}},
  )
}

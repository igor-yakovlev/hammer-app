import fetch from 'auth/FetchInterceptor'

const UserService = {}


UserService.getUsers = function (params) {
  return fetch({
    url: `/users`,
    method: 'get',
    params
  })
}


UserService.getUsersById = function (id, params) {
  return fetch({
    url: `/users/${id}`,
    method: 'get',
    params
  })
}

export default UserService
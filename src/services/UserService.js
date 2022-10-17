import fetch from 'auth/FetchInterceptor'

const UserService = {}

const BASE_URL = 'https://jsonplaceholder.typicode.com';

UserService.getUsers = function (params) {
  return fetch({
    url: `${BASE_URL}/users`,
    method: 'get',
    params
  })
  .then(data => data.json())
  .then(users => console.log(users))
}


UserService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default UserService
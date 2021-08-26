import axios from 'axios';

const http= axios.create({
  baseURL:'/GOOGLE'
});

export const handleApi = ({data = null, method, params = {}, url }) => {
  http({
    method,
    data,
    params,
    url
  })
}

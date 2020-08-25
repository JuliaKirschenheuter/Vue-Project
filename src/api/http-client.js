import Axios from 'axios';

function applyAxiosInterceptors(axios, interceptors) {
  interceptors.map(interceptor => {
    axios.interceptors.request.use(
      interceptor.request.onFulfilled,
      interceptor.request.onRejected
    );

    axios.interceptors.response.use(interceptor => {
      interceptor.response.onFulfilled,
      interceptor.response.onRejected
    })
  })
};

const config = {
  baseUrl: `${process.env.VUE_APP_API_URL}`,
  withCredentials: true
};

export const httpClient = Axios.create(config);


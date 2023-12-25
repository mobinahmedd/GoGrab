// import axios from "axios";

// const API_URL = "http://localhost:5000";

// const axiosInstance = axios.create({
//   baseURL: API_URL,
//   timeout: 10000,
// });

// const getToken = (tokenKey) => {
//   return localStorage.getItem(tokenKey);
// };
// const setToken = (tokenKey, token) => {
//   return localStorage.setItem(tokenKey, token);
// };

// const handleTokenExpiration = async () => {
//   try {
//     const refreshToken = getToken("refreshToken");
//     const response = await axios.post(
//       "http://localhost:5000/api/auth/refresh-token",
//       {
//         token: refreshToken,
//       }
//     );
//     const { access_token } = response.data;
//     setToken("accessToken", access_token);
//   } catch (error) {
//     console.error("Token refresh failed:", "error");
//   }
// };

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getToken("accessToken");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//       console.log("here");
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Axios interceptor to handle token expiration errors
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if the error status is due to token expiration
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       await handleTokenExpiration();

//       // Retry the original request after token refresh
//       return axios(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from "axios";

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 10000,
  });

  const getToken = (tokenKey) => {
    return localStorage.getItem(tokenKey);
  };

  const setToken = (tokenKey, token) => {
    return localStorage.setItem(tokenKey, token);
  };

  const handleTokenExpiration = async (refreshToken, accessTokenKey) => {
    try {
      const response = await instance.post(
        "http://localhost:5000/api/auth/refresh-token",
        {
          token: refreshToken,
        }
      );
      const access_token = response.data.accessToken;
      console.log("res", response);
      // const access_token = "mobin";
      console.log("mobin ahmed");
      setToken(accessTokenKey, access_token);
    } catch (error) {
      console.error("Token refresh failed:", error);
    }
  };

  instance.interceptors.request.use(
    (config) => {
      const token = getToken("accessToken");
      if (token) {
        config.headers["authorization"] = `Bearer ${token}`;
      } else {
        delete config.headers["authorization"];
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      console.log(error);
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = getToken("refreshToken");
        const accessTokenKey = "accessToken";
        if (refreshToken) {
          await handleTokenExpiration(refreshToken, accessTokenKey);
          originalRequest.headers["authorization"] = `Bearer ${getToken(
            accessTokenKey
          )}`;
          return instance(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const authServerInstance = createAxiosInstance("http://localhost:5000");

export const mainServerInstance = createAxiosInstance("http://localhost:4000");

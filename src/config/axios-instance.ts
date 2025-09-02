import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

// Tạo instance axios với cấu hình cơ bản
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request interceptor - xử lý trước khi gửi request
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Thêm token vào header nếu có
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Log request trong development
    if (process.env.NODE_ENV === "development") {
      console.log("🚀 Request:", {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
        headers: config.headers,
      });
    }

    return config;
  },
  (error: AxiosError) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor - xử lý response
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log response trong development
    if (process.env.NODE_ENV === "development") {
      console.log("✅ Response:", {
        status: response.status,
        data: response.data,
        url: response.config.url,
      });
    }

    return response;
  },
  (error: AxiosError) => {
    // Xử lý lỗi response
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - xóa token và redirect về login
          localStorage.removeItem("token");
          sessionStorage.removeItem("token");
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
          break;
        case 403:
          // Forbidden
          console.error("❌ Access denied");
          break;
        case 404:
          // Not found
          console.error("❌ Resource not found");
          break;
        case 500:
          // Server error
          console.error("❌ Server error");
          break;
        default:
          console.error("❌ API Error:", data);
      }
    } else if (error.request) {
      // Network error
      console.error("❌ Network Error:", error.message);
    } else {
      // Other error
      console.error("❌ Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

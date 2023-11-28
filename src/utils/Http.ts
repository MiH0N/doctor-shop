import axios, { type AxiosRequestHeaders } from 'axios';
import { apiBaseURL } from '@/configs/urls';

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface FetchOptions {
  baseURL?: string;
  url?: string;
  method?: Method;
  headers?: AxiosRequestHeaders;
  params?: Dictionary;
  data?: Dictionary<unknown>;
  type?: 'formData' | null;
}

type HTTPResponseMetaDetail = string | Dictionary<string[]>;

export interface HttpResponsePaginationProps {
  pagination: {
    count: number;
    next: Nullable<string>;
    previous: Nullable<string>;
  };
}

export type HTTPResponse<
  Data = unknown,
  Constraints = NonNullable<unknown>,
> = Constraints & {
  data: Data;
  meta: {
    status_code: number;
    paginated?: boolean;
    detail?: HTTPResponseMetaDetail;
  };
};

export default class Http {
  static async get<T, U = Record<string, never>>(
    options: FetchOptions | string,
  ) {
    const config = typeof options === 'string' ? { url: options } : options;

    return this.request<T, U>({ method: 'GET', ...config });
  }

  static async post<T, U = Record<string, never>>(options: FetchOptions) {
    return this.request<T, U>({ method: 'POST', ...options });
  }

  static async patch<T, U = Record<string, never>>(options: FetchOptions) {
    return this.request<T, U>({ method: 'PATCH', ...options });
  }

  static async delete<T, U = Record<string, never>>(options: FetchOptions) {
    return this.request<T, U>({ method: 'DELETE', ...options });
  }

  static async request<T, U>(options: FetchOptions) {
    const {
      baseURL = apiBaseURL,
      url,
      method = 'GET',
      headers,
      params,
      type,
    } = options;
    const isFormData = type === 'formData';

    const _headers = {
      Accept: 'application/json',
      ...(isFormData ? { 'content-type': 'multipart/*' } : {}),
      ...headers,
    };

    const response = await axios.request<HTTPResponse<T, U>>({
      method,
      url,
      baseURL,
      params,
      headers: _headers,
    });

    return response.data;
  }
}

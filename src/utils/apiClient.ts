import { getAuthToken } from './storageUtils';

const API_BASE_URL = 'http://localhost:4000/api/v1';

interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

/**
 * Fetch wrapper that automatically adds Authorization header with JWT token
 */
export const apiFetch = async (
  endpoint: string,
  options: RequestOptions = {}
): Promise<Response> => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  return response;
};

/**
 * Helper for GET requests
 */
export const apiGet = (endpoint: string, options: RequestOptions = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'GET',
  });
};

/**
 * Helper for POST requests
 */
export const apiPost = (endpoint: string, data?: any, options: RequestOptions = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'POST',
    body: data ? JSON.stringify(data) : undefined,
  });
};

/**
 * Helper for PUT requests
 */
export const apiPut = (endpoint: string, data?: any, options: RequestOptions = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'PUT',
    body: data ? JSON.stringify(data) : undefined,
  });
};

/**
 * Helper for DELETE requests
 */
export const apiDelete = (endpoint: string, options: RequestOptions = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'DELETE',
  });
};

export const getAPIBaseURL = () => API_BASE_URL;

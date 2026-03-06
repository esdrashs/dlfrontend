import { setAuthToken, setUserData } from '../utils/storageUtils.ts';

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
    isAdmin?: boolean;
    accessLevel?: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

//const API_BASE_URL = 'http://localhost:4000/api/v1';
const API_BASE_URL = 'http://192.168.100.117:4000/api/v1';

export async function register(payload: RegisterPayload): Promise<ApiResponse<AuthResponse>> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || 'Registration failed',
      };
    }

    const data: AuthResponse = await response.json();
    
    // Store token and user data in localStorage
    if (data.token) {
      setAuthToken(data.token);
      setUserData(data.user);
    }
    
    return {
      success: true,
      data,
      message: 'Registration successful',
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}
//}

export async function login(payload: LoginPayload): Promise<ApiResponse<AuthResponse>> {
  try {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        error: errorData.message || 'Login failed',
      };
    }

    const data: AuthResponse = await response.json();
    
    // Store token and user data in localStorage
    if (data.token) {
      setAuthToken(data.token);
      setUserData(data.user);
    }
    
    return {
      success: true,
      data,
      message: 'Login successful'      
    };

  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An error occurred',
    };
  }
}

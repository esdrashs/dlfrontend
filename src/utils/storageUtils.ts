// Auth Token Management
export const setAuthToken = (token: string): void => {
  localStorage.setItem('authToken', token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('authToken');
};

export const removeAuthToken = (): void => {
  localStorage.removeItem('authToken');
};

// User Data Management
export interface UserData {
  id: string;
  email: string;
  username: string;
  isAdmin?: boolean;
  accessLevel?: number;
}

export const setUserData = (user: UserData): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = (): UserData | null => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const removeUserData = (): void => {
  localStorage.removeItem('user');
};

// Combined logout
export const clearAuthStorage = (): void => {
  removeAuthToken();
  removeUserData();
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getAuthToken() && !!getUserData();
};

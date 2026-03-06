// Save user data to localStorage
export const saveUser = (userData) => {
  localStorage.setItem('user', JSON.stringify(userData));
};

// Retrieve user data from localStorage
export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Remove user data from localStorage
export const removeUser = () => {
  localStorage.removeItem('user');
};

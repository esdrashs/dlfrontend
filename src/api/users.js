// API client for users management
//const API_BASE_URL = 'http://localhost:4000/api/v1/users';
const API_BASE_URL = 'http://192.168.100.117:4000/api/v1/users';

export async function getAllUsers() {
  try {
    const response = await fetch(`${API_BASE_URL}/getUsers`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return { success: false, error: error.message };
  }
}

export async function updateUser(userId, userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: 'error.message' };
  }
}

export async function deleteUser(userId) {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, error: error.message };
  }
}

export async function createUser(userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: error.message };
  }
}

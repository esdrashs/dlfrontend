// API client for global operations
//const API_BASE_URL = 'http://localhost:4000/api/v1/global';
const API_BASE_URL = 'http://192.168.100.117:4000/api/v1/global';
export async function encryptPassword(password) {
  const response = await fetch(`${API_BASE_URL}/encryptPassword`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  });
  return response.json();
}

export async function createOpID() {
  const response = await fetch(`${API_BASE_URL}/createOpID`);
  return response.json();
}

export async function logAction(operation, type, activeUser, operationID) {
  const response = await fetch(`${API_BASE_URL}/logAction`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ operation, type, activeUser, operationID })
  });
  return response.json();
}

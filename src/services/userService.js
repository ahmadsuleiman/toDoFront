import http from "./http";
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + "/users";
const userKey = 'user';

export async function register(user) {
  return http.post(apiEndpoint + '/register', {
    username: user.username,
    password: user.password
  });
}

export async function login(username, password) {
  const { data: user } = await http.post(apiEndpoint + '/login', { username, password });
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function loginWithUser(user) {
  localStorage.setItem(userKey, JSON.stringify(user));
}

export function logout() {
  localStorage.removeItem(userKey);
}

export function getCurrentUser() {
  try {
    const user = JSON.parse(localStorage.getItem(userKey));
    return user;
  } catch (error) {
    return null;
  }
}

export default {
  register,
  login,
  loginWithUser,
  logout,
  getCurrentUser
};

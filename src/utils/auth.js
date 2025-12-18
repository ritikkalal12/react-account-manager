// Check if user is logged in
export const isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};

// Logout user
export const logout = () => {
  localStorage.removeItem('user');
};

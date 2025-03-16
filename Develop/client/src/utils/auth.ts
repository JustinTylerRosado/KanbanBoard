import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  // Returns the decoded token (profile data)
  getProfile() {
    const token = this.getToken();
    if (!token) return null;
    try {
      return jwtDecode<JwtPayload>(token);
    } catch (error) {
      console.error('Token decoding failed:', error);
      return null;
    }
  }

  // Returns true if a token exists and is not expired
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // Checks whether the given token is expired.
  // Assumes the token contains an 'exp' property (expiration time in seconds)
  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded || !decoded.exp) {
        return true;
      }
      // Multiply exp by 1000 to convert seconds to milliseconds
      if (decoded.exp * 1000 < Date.now()) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true;
    }
  }

  // Retrieves the token from localStorage
  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  // Saves the token to localStorage and redirects to the home page
  login(idToken: string) {
    console.log('Login successful, token:', idToken);
    localStorage.setItem('token', idToken);
    // Redirect to home page after login
    window.location.href = '/';
  }

  // Removes the token from localStorage and redirects to the login page
  logout() {
    localStorage.removeItem('token');
    // Redirect to login page after logout
    window.location.href = '/login';
  }
}

export default new AuthService();
import decode from 'jwt-decode';

class AuthService {
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  login(idToken) {
    localStorage.setItem('jwtToken', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }
}

export default new AuthService();
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Navbar Components
import AdminNav from './components/navbars/AdminNav.jsx';
import Header from './components/navbars/Header.jsx';
import Footer from './components/navbars/Footer.jsx';
// Pages
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
// Auth
import Auth from './utils/auth.js';

const App = () => {
  const isAdmin = Auth.isAdmin();

  return (
    <Router>
      <div className="App">
        {isAdmin ? (
          <>
            <AdminNav />
            <Header />
          </>
        ) : (
          <Header />
        )}
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route
              path="/collections/:category"
              element={<CollectionsPage />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Navbar Components
import AdminNav from './components/navbars/AdminNav.jsx';
import Header from './components/navbars/Header.jsx';
import Footer from './components/navbars/Footer.jsx';
// Pages
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const App = () => {
  const isAdmin = false;

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

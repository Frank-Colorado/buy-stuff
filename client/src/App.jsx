import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Navbar Components
import Header from './components/navbars/Header.jsx';
import Footer from './components/navbars/Footer.jsx';
// Pages
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminPage from './pages/AdminPage.jsx';
import CollectionsPage from './pages/CollectionsPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import SuccessPage from './pages/SuccessPage.jsx';
import AccountPage from './pages/AccountPage.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
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
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

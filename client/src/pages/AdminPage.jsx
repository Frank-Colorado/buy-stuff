import Auth from '../utils/auth.js';

const AdminPage = () => {
  // Check if user is admin
  const isAdmin = Auth.isAdmin();
  // If not admin, redirect to home page
  if (!isAdmin) {
    window.location.replace('/');
  }

  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
};

export default AdminPage;

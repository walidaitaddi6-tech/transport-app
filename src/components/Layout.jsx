import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/authStore';
import { FiLogOut, FiMenu } from 'react-icons/fi';

function Layout({ children }) {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { label: 'Dashboard', path: '/', icon: '📊' },
    { label: 'Clients', path: '/clients', icon: '👥' },
    { label: 'Véhicules', path: '/vehicles', icon: '🚚' },
    { label: 'Conducteurs', path: '/drivers', icon: '👨‍✈️' },
    { label: 'Voyages', path: '/trips', icon: '🛣️' },
    { label: 'Factures', path: '/invoices', icon: '📄' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="p-4 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-xl font-bold">🚚 Transport</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-800 rounded"
          >
            <FiMenu />
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center px-4 py-3 hover:bg-gray-800 transition"
            >
              <span className="text-2xl">{item.icon}</span>
              {sidebarOpen && <span className="ml-4">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-6 py-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Transport Management</h2>
            <button
              onClick={handleLogout}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </div>
  );
}

export default Layout;

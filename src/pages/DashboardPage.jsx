import React from 'react';

function DashboardPage() {
  const stats = [
    { label: 'Revenus du mois', value: '45,200 DH', icon: '💵' },
    { label: 'Dépenses du mois', value: '18,500 DH', icon: '💸' },
    { label: 'Bénéfice net', value: '26,700 DH', icon: '📈' },
    { label: 'Voyages', value: '12', icon: '🛣️' },
    { label: 'Facturation impayée', value: '8,500 DH', icon: '⏰' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="text-gray-600 text-sm">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Welcome Message */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Bienvenue!</h2>
        <p className="text-blue-800">
          Cette application est en phase de développement. Les modules seront progressivement ajoutés.
        </p>
      </div>
    </div>
  );
}

export default DashboardPage;

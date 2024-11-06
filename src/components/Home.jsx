import React, { useState } from 'react';
import Nav from './Nav';
import UserTable from './UserTable';
import AdminTable from './AdminTable';

function Home() {
  const [showUserTable, setShowUserTable] = useState(false);
  const [showAdminTable, setShowAdminTable] = useState(false);

  const [usersData, setUsersData] = useState([]);
  const [editUserData, setEditUserData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.lastName || !formData.position) {
      setError('All fields are required.');
      return;
    }

    const newUser = {
      id: usersData.length + 1,
      ...formData
    };
    setUsersData([...usersData, newUser]);
    setFormData({ name: '', lastName: '', position: '' });
    setError('');
  };

  const handleDeleteUser = (id) => {
    setUsersData(usersData.filter(user => user.id !== id));
  };

  const handleEditUser = (id) => {
    const user = usersData.find(user => user.id === id);
    setEditUserData(user);
    setFormData({ name: user.name, lastName: user.lastName, position: user.position });
    setShowAdminTable(true);
  };

  const handleUpdateUser = () => {
    setUsersData(usersData.map(user => user.id === editUserData.id ? { ...user, ...formData } : user));
    setEditUserData(null);
    setFormData({ name: '', lastName: '', position: '' });
    setError('');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <main className="flex flex-col items-center justify-center mt-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Generation Thailand Home - {showUserTable ? "User Sector" : "Admin Sector"}</h2>
        <div className="flex space-x-8 mb-8">
          <button 
            className={`py-2 px-4 rounded ${showUserTable ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} hover:bg-pink-950`}
            onClick={() => { setShowUserTable(true); setShowAdminTable(false); }}
          >
            User Home Sector
          </button>
          <button 
            className={`py-2 px-4 rounded ${showAdminTable ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} hover:bg-pink-950`}
            onClick={() => { setShowUserTable(false); setShowAdminTable(true); }}
          >
            Admin Home Sector
          </button>
        </div>

        {showAdminTable && (
          <div className="mb-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-700">{editUserData ? 'Edit User' : 'Create User Here'}</h3>
            <div className="flex flex-col space-y-4 mb-4">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name" 
                className="p-2 border border-gray-300 rounded w-full" 
              />
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Last Name" 
                className="p-2 border border-gray-300 rounded w-full" 
              />
              <input 
                type="text" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
                placeholder="Position" 
                className="p-2 border border-gray-300 rounded w-full" 
              />
              <button 
                onClick={editUserData ? handleUpdateUser : handleAddUser} 
                className="bg-gray-800 text-white rounded py-2 hover:bg-gray-500"
              >
                {editUserData ? 'Update' : 'Save'}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        )}

        {showUserTable && <UserTable users={usersData} />}
        {showAdminTable && <AdminTable users={usersData} onDelete={handleDeleteUser} onEdit={handleEditUser} />}
      </main>
    </div>
  );
}

export default Home;

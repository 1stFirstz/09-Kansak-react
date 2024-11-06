import React, { useState } from 'react';

const AdminTable = ({ users, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-pink-950 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left border-b border-gray-300">Name</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Last Name</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Position</th>
            <th className="py-3 px-6 text-left border-b border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-medium">
          {users.map(user => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-300">{user.name}</td>
              <td className="py-3 px-6 text-left border-r border-gray-300">{user.lastName}</td>
              <td className="py-3 px-6 text-left border-r border-gray-300">{user.position}</td>
              <td className="py-3 px-6 text-left space-x-2">
                <button 
                  onClick={() => onEdit(user.id)} 
                  className="bg-gray-700 text-yellow-300 rounded py-1 px-3 hover:bg-yellow-800"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(user.id)} 
                  className="bg-gray-700 text-red-300 rounded py-1 px-3 hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;

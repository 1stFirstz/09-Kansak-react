import React, { useState } from 'react';

const AdminTable = ({ users, onDelete, onEdit }) => { 
  // ประกาศ state เพื่อเก็บ ID ของผู้ใช้ที่กำลังถูกแก้ไข
  const [editingUserId, setEditingUserId] = useState(null);

  // ประกาศ state เพื่อเก็บข้อมูลที่กำลังถูกแก้ไข
  const [editFormData, setEditFormData] = useState({
    name: '', // เก็บข้อมูลของผู้ใช้โดยให้ค่าเริ่มต้นเป็น String เปล่า
    lastName: '', 
    position: '' 
  });

  // ฟังก์ชันเมื่อกดปุ่ม "Edit" เพื่อเข้าสู่โหมดแก้ไข
  const handleEditClick = (user) => {
    setEditingUserId(user.id); // ตั้งค่า ID ของผู้ใช้ที่กำลังถูกแก้ไข
    setEditFormData({ // ตั้งค่าข้อมูลที่จะแสดงในช่องกรอก
      name: user.name,
      lastName: user.lastName,
      position: user.position
    });
  };

  // ฟังก์ชันเมื่อมีการเปลี่ยนแปลงข้อมูลในช่องกรอก
  const handleInputChange = (e) => {
    const { name, value } = e.target; // ดึงชื่อและค่าของช่องกรอก
    setEditFormData({ ...editFormData, [name]: value }); // อัปเดตข้อมูลใน state
  };

  // ฟังก์ชันเมื่อกดปุ่ม "Save" เพื่อบันทึกข้อมูลที่แก้ไข
  const handleSaveClick = () => {
    onEdit(editingUserId, editFormData); // ส่งข้อมูลที่แก้ไขกลับไปยัง component แม่
    setEditingUserId(null); // รีเซ็ต state เพื่อออกจากโหมดแก้ไข
  };

  // ฟังก์ชันเมื่อกดปุ่ม "Cancel" เพื่อยกเลิกการแก้ไข
  const handleCancelClick = () => {
    setEditingUserId(null); // รีเซ็ต state เพื่อออกจากโหมดแก้ไข
  };

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
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              {editingUserId === user.id ? ( // ตรวจสอบว่าเป็นผู้ใช้ที่กำลังแก้ไขหรือไม่
                <>
                  {/* ถ้าเป็นผู้ใช้ที่กำลังแก้ไข แสดงช่องกรอกข้อมูล */}
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  </td>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="lastName"
                      value={editFormData.lastName}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  </td>
                  <td className="py-3 px-6">
                    <input
                      type="text"
                      name="position"
                      value={editFormData.position}
                      onChange={handleInputChange}
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                  </td>
                  <td className="py-3 px-6 space-x-2">
                    <button onClick={handleSaveClick} className="bg-green-500 text-white py-1 px-3 rounded">
                      Save
                    </button>
                    <button onClick={handleCancelClick} className="bg-gray-500 text-white py-1 px-3 rounded">
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  {/* ถ้าไม่ใช่ผู้ใช้ที่กำลังแก้ไข แสดงข้อมูลปกติ */}
                  <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-300">{user.name}</td>
                  <td className="py-3 px-6 text-left border-r border-gray-300">{user.lastName}</td>
                  <td className="py-3 px-6 text-left border-r border-gray-300">{user.position}</td>
                  <td className="py-3 px-6 text-left space-x-2">
                    {/* ปุ่มแก้ไข */}
                    <button
                      onClick={() => handleEditClick(user)}
                      className="bg-gray-700 text-yellow-300 rounded py-1 px-3 hover:bg-yellow-800"
                    >
                      Edit
                    </button>
                    {/* ปุ่มลบ */}
                    <button
                      onClick={() => onDelete(user.id)}
                      className="bg-gray-700 text-red-300 rounded py-1 px-3 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable; 
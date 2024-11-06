import React, { useState } from 'react'; 
import Nav from './Nav'; 
import UserTable from './UserTable'; 
import AdminTable from './AdminTable';

function Home() { // สร้างฟังก์ชัน component Home
  const [showUserTable, setShowUserTable] = useState(false); // state สำหรับตรวจสอบว่าจะแสดง UserTable หรือไม่
  const [showAdminTable, setShowAdminTable] = useState(false); // state สำหรับตรวจสอบว่าจะแสดง AdminTable หรือไม่

  const [usersData, setUsersData] = useState([]); // state สำหรับเก็บข้อมูลผู้ใช้ทั้งหมด
  const [editUserData, setEditUserData] = useState(null); // state สำหรับเก็บข้อมูล user ที่กำลังถูกแก้ไข

  const [formData, setFormData] = useState({ 
    name: '', // set ค่าเริ่มต้นของชื่อ, นามสกุล และ ตำแหน่งให้เป็น string เปล่า
    lastName: '', 
    position: '' 
  });

  const [error, setError] = useState(''); 

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงของฟอร์ม
  const handleChange = (e) => {
    setFormData({
      ...formData, // คัดลอกข้อมูลเดิมจาก formData
      [e.target.name]: e.target.value // อัปเดตค่าของฟิลด์ที่ถูกแก้ไข
    });
    setError(''); // รีเซ็ตข้อความแสดงข้อผิดพลาด
  };

  // ฟังก์ชันสำหรับเพิ่มผู้ใช้งาน
  const handleAddUser = () => {
    if (!formData.name || !formData.lastName || !formData.position) { // ตรวจสอบว่า input box ทั้งหมดถูกกรอกครบไหม ถ้าไม่ให้แสดง All fields are require
      setError('All fields are required.'); 
      return; 
    }

    const newUser = {
      id: usersData.length + 1, // สร้างไอดีใหม่สำหรับผู้ใช้ใหม่
      ...formData // คัดลอกข้อมูลจาก formData ไปยัง newUser
    };
    setUsersData([...usersData, newUser]); // เพิ่มผู้ใช้ใหม่ไปยัง usersData
    setFormData({ name: '', lastName: '', position: '' }); // รีเซ็ตฟอร์มหลังจากกด save แล้ว
    setError(''); 
  };

  // ฟังก์ชันสำหรับลบผู้ใช้ตาม id 
  const handleDeleteUser = (id) => {
    setUsersData(usersData.filter(user => user.id !== id)); // กรองผู้ใช้ที่ไม่ตรงกับไอดีที่ต้องการลบ
  };

  // ฟังก์ชันสำหรับแก้ไขข้อมูลผู้ใช้
  const handleEditUser = (id) => {
    const user = usersData.find(user => user.id === id); // ค้นหาผู้ใช้ที่ต้องการแก้ไข
    setEditUserData(user); // ตั้งค่า editUserData เป็นข้อมูลของผู้ใช้ที่แก้ไข
    setFormData({ name: user.name, lastName: user.lastName, position: user.position }); // กรอกข้อมูลของผู้ใช้ในฟอร์ม
    setShowAdminTable(true); // แสดง AdminTable
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูลผู้ใช้
  const handleUpdateUser = () => {
    setUsersData(usersData.map(user => user.id === editUserData.id ? { ...user, ...formData } : user)); // อัปเดตข้อมูลผู้ใช้
    setEditUserData(null); // ล้างข้อมูล editUserData
    setFormData({ name: '', lastName: '', position: '' }); // รีเซ็ตฟอร์ม
    setError(''); // ล้างข้อความแสดงข้อผิดพลาด
  };

  return ( // ส่วนการแสดงผล
    <div className="min-h-screen bg-gray-100"> {}
      <Nav /> {/* แสดง component Nav */}
      <main className="flex flex-col items-center justify-center mt-16 px-4"> {}
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Generation Thailand Home - {showUserTable ? "User Sector" : "Admin Sector"}
        </h2> {/* หัวข้อที่เปลี่ยนไปตามว่าแสดง User หรือ Admin */}
        <div className="flex space-x-8 mb-8"> {/* คอนเทนเนอร์ของปุ่มที่มีระยะห่าง */}
          <button 
            className={`py-2 px-4 rounded ${showUserTable ? 'bg-gray-700 text-white' : 'bg-gray-700 text-white'} hover:bg-pink-950 active:bg-blue-900 focus:outline-none focus:ring focus:ring-violet-400`}
            onClick={() => { setShowUserTable(true); setShowAdminTable(false); }} // ตั้งให้แสดง UserTable และซ่อน AdminTable
          >
            User Home Sector
          </button>
          <button 
            className={`py-2 px-4 rounded ${showAdminTable ? 'bg-gray-700 text-white' : 'bg-gray-700 text-white'} hover:bg-pink-950 active:bg-blue-900 focus:outline-none focus:ring focus:ring-violet-400`}
            onClick={() => { setShowUserTable(false); setShowAdminTable(true); }} // ตั้งให้แสดง AdminTable และซ่อน UserTable
          >
            Admin Home Sector
          </button>
        </div>

        {showAdminTable && ( // แสดงฟอร์มถ้า AdminTable ถูกแสดง
          <div className="mb-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4 text-gray-700">
              {editUserData ? 'Edit User' : 'Create User Here'} {/* แสดงข้อความ 'Edit User' หรือ 'Create User Here' */}
            </h3>
            <div className="flex flex-col space-y-4 mb-4"> {/* อินพุตฟอร์ม */}
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
                onClick={editUserData ? handleUpdateUser : handleAddUser} // เรียกฟังก์ชันที่ตรงเงื่อนไข
                className="bg-gray-800 text-white rounded py-2 hover:bg-gray-500"
              >
                {editUserData ? 'Update' : 'Save'} {/* แสดงปุ่ม 'Update' หรือ 'Save' */}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>} {/* แสดง error เมื่อพบเจอนะจ๊ะ */}
          </div>
        )}

        {showUserTable && <UserTable users={usersData} />} {/* แสดง UserTable ถ้า showUserTable เป็น true */}
        {showAdminTable && <AdminTable users={usersData} onDelete={handleDeleteUser} onEdit={handleEditUser} />} {/* แสดง AdminTable ถ้า showAdminTable เป็น true */}
      </main>
    </div>
  );
}

export default Home;
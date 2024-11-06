import React from 'react'; 

// สร้างคอมโพเนนต์ชื่อ UserTable ที่รับ prop `users` ซึ่งเป็นข้อมูลผู้ใช้
const UserTable = ({ users }) => {
  return (  //ในส่วนนี้จะเป็นการสร้างตารางเพื่อเก็บข้อมูลที่ได้มาจากการ input ข้อมูล จากหน้า admin ให้มาแสดงที่หน้านี้
    <div className="overflow-x-auto w-full max-w-4xl mx-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left border-b border-gray-300">
              Name
            </th>
            <th className="py-3 px-6 text-left border-b border-gray-300">
              Last Name
            </th>
            <th className="py-3 px-6 text-left border-b border-gray-300">
              Position
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 text-sm font-medium">
          {users.map(user => (
            // ใช้ map เพื่อวนลูปข้อมูลใน array `users` และแสดงข้อมูลในแต่ละ row 
            <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-300">
                {user.name}
              </td>
              <td className="py-3 px-6 text-left border-r border-gray-300">
                {user.lastName}
              </td>
              <td className="py-3 px-6 text-left">
                {user.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
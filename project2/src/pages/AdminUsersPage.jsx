import React, { useEffect, useState } from 'react'
import { getAllUser } from '../api/api';

function AdminUsersPage() {
    const [users, setUsers] = useState('')
    const fetchAllUsers=async()=>{
        try {
            const res=await getAllUser()
            setUsers(res.data)
            console.log(res);
            console.log(res.data);
        } catch (error) {
            console.error(error);
            
        }

    }
    useEffect(()=>{
        fetchAllUsers()
        
    },[])
  return (
    <div>
        {users.length === 0 ? (
        <p>No Users found</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
                <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.id}</td>
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.role}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminUsersPage
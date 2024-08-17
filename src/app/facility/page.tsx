"use client"; // Add this at the top

import React, { useState, useEffect } from 'react';

// Define a type for the staff member objects
type RoomMember = {
  Room: string;
  Availablility: string;
  Resident: string;
};

export default function facilityManagement() {
  // Specify that staffList is an array of StaffMember objects
  const [roomList, setroomList] = useState<roomMember[]>([]);

  useEffect(() => {
    // Fetch staff data when the component mounts
    fetch('/api/facility')
      .then((response) => response.json())
      .then((data) => setRoomList(data));
  }, []);

  // Specify that id is a string
  const deleteRoom = (id: string) => {
    fetch(`/api/facility/${id}`, {
      method: 'DELETE',
    }).then(() => {
     
      setRoomList(roomList.filter((room) => room.id !== id));
    });
  };

  const addRoom = () => {
   
    const newRoom: RoomMember = {
      id: prompt('Enter Room Number:') || '', 
      Availablility: prompt('Enter Availablility:') || '',
      Resident: prompt('Enter Resident:') || '',
     
    };
    
    fetch('/api/facility', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRoom),
    }).then((response) => response.json())
      .then((data) => setRoomList([...roomList, data]));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-4xl">Staff Management</h1>
      <button onClick={addStaff} className="mt-4 p-2 bg-blue-500 text-white rounded">Add Staff</button>
      <table className="table-auto border-4 border-indigo-500/100">
        <thead>
          <tr>
            <th className="px-4 py-2">Room</th>
            <th className="px-4 py-2">Availablility</th>
            <th className="px-4 py-2">Resident</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id} className="border-t">
              <td className="px-4 py-2">{staff.Room}</td>
              <td className="px-4 py-2">{staff.Availablility}</td>
              <td className="px-4 py-2">{staff.Resident}</td>
              <td className="px-4 py-2">
                <button onClick={() => deleteRoom(room.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

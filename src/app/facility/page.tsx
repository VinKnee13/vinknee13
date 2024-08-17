import React from 'react';


export default function facilityManagment() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
           
  <h1 className="text-3xl">Rooms</h1>
<br />

<button onClick={addRoom} className="mt-4 p-2 bg-blue-500 text-white rounded">Add Room</button>
<table className="table-auto border-4 border-indigo-500/100">
 <thead>
<tr>
    <th className="p-2">Room</th>
    <th className="p-2">Availablility</th>
    <th className="p-2">Resident</th>
</tr>
</thead>
<tbody>
 {staffList.map((Room) => (
            <tr key={room.id} className="border-t">
              <td className="px-4 py-2">{room.Room}</td>
              <td className="px-4 py-2">{room.Availability}</td>
              <td className="px-4 py-2">{room.Resident}</td> 
<td className="px-4 py-2">
<button onClick={() => deleteRoom(room.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
</td>
</tr>
))}
</tbody>
</table>
<br />
<h1 className="text-3xl">Reservations</h1>
<br />          
<table className="table-auto border-4 border-indigo-500/100">
 <thead>
<tr>
    <th className="p-2">Facility</th>
    <th className="p-2">Availablility</th>
    <th className="p-2">Resident</th>
    <th className="p-2">Date and Time</th>
</tr>
</thead>
<tbody>
<tr>
    <td className="p-2">Spa</td>
    <td className="p-2">Reserved</td>
    <td className="p-2">Alice Banks</td>
    <td className="p-2">1/8/24 8:00 - 9:00</td>
</tr>
<tr>
    <td className="p-2">Sauna</td>
    <td className="p-2">Reserved</td>
    <td className="p-2">Lucas Griffin</td>
    <td className="p-2">2/8/24 9:00 - 10:00</td>
</tr>
<tr>
    <td className="p-2">Game Room</td>
    <td className="p-2">Reserved</td>
    <td className="p-2">Vincent Ni</td>
    <td className="p-2">2/8/24 8:00 - 9:00</td>
</tr>
<tr>
    <td className="p-2">Gym</td>
    <td className="p-2">Available</td>
    <td className="p-2"></td>
    <td className="p-2"></td>
</tr>
  
</tbody>
</table>      
<br />
<h2 className="text-3xl">Maintenance</h2>
<br />         
<table className="table-auto border-4 border-indigo-500/100">
 <thead>
<tr>
    <th className="p-2">Room</th>
    <th className="p-2">Issue</th>
    <th className="p-2">Status</th>
</tr>
</thead>
<tbody>
<tr>
    <td className="p-2">1-A</td>
    <td className="p-2">Heater not working</td>
    <td className="p-2">Complete</td>
</tr>
<tr>
    <td className="p-2">3-B</td>
    <td className="p-2">Lights need replacing</td>
    <td className="p-2">Incomplete</td>
</tr>
</tbody>
</table>             
</main>
        
    );
}

import React from 'react';


export default function facilityManagment() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
            <h1 className="text-4xl">Facility Management Page</h1>

<table className="table-auto border-separate border-spacing-1">
 <thead>
<tr className="bg-blue-500 text-white">
    <th className="p-2">Room</th>
    <th className="p-2">Availablility</th>
    <th className="p-2">Resident</th>
</tr>
</thead>
<tbody>
<tr>
    <td className="p-2">1-A</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Alice Banks</td>
</tr>
<tr>
    <td className="p-2">1-A</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Arpit Puri</td>
</tr>
<tr>
    <td className="p-2">1-B</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Alice Banks</td>
 </tr>
<tr>
    <td className="p-2">2-A</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Luca Biondi</td>
</tr>
<tr>
    <td className="p-2">2-B</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Lucas Griffin</td>
</tr>
<tr>
    <td className="p-2">3-A</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Vincent Ni</td>
</tr>
<tr>
    <td className="p-2">3-B</td>
    <td className="p-2">Occupied</td>
    <td className="p-2">Jun Hatori</td>
</tr> 
<tr>
    <td className="p-2">4-A</td>
    <td className="p-2">Available</td>
    <td className="p-2"></td>
</tr>
<tr>
    <td className="p-2">4-B</td>
    <td className="p-2">Available</td>
    <td className="p-2"></td>
  </tr>
</tbody>
</table>
</main>
        
    );
}

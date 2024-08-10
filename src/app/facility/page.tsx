import React from 'react';


export default function facilityManagment() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-around p-24">
            <h1 className="text-4xl">Facility Management Page</h1>

<table className="table-auto border-separate border-spacing-1">
 <thead>
<tr className="bg-blue-500 text-white">
  <tr>
    <th>Room</th>
    <th>Availablility</th>
    <th>Resident</th>
  </tr>
  
  <tr>
    <td>1-A</td>
    <td>Occupied</td>
    <td>Alice Banks</td>
  </tr>
   <thead>
 <tbody>
    <tr>
    <td>1-A</td>
    <td>Occupied</td>
    <td>Arpit Puri</td>
  </tr>
  
    <tr>
    <td>1-B</td>
    <td>Occupied</td>
    <td>Alice Banks</td>
  </tr>
  
    <tr>
    <td>2-A</td>
    <td>Occupied</td>
    <td>Luca Biondi</td>
    
  </tr>
    <tr>
    <td>2-B</td>
    <td>Occupied</td>
    <td>Lucas Griffin</td>
  </tr>
  
    <tr>
    <td>3-A</td>
    <td>Occupied</td>
    <td>Vincent Ni</td>
  </tr>
  
  
    <tr>
    <td>3-B</td>
    <td>Occupied</td>
    <td>Jun Hatori</td>
  </tr>
  
     <tr>
    <td>4-A</td>
    <td>Available</td>
    <td></td>
  </tr>
  
    <tr>
    <td>4-B</td>
    <td>Available</td>
    <td></td>
  </tr>
  
   </tbody>
  
</table>

                                                               
        </main>
        
    );
}



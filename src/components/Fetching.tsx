// import React from 'react'
// import { useQuery } from 'react-query';

// const Fetching = () => {
//   const {isLoading,error,data}=useQuery('users',()=>{
//     return fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
//       return res.json()
//     })
//   })
//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error:{` This is error`}</div>;
//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {data.map(({user}:any) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Fetching

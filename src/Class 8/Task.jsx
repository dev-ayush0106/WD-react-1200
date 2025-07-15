import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home'
import Profile from './Profile'

const Task = () => {
    const [users, setUsers] = useState([]);

  const addUser = (userData) => {
    setUsers([...users, { ...userData, id: users.length + 1 }]);
  };
    let router=createBrowserRouter([
        {path:'/',
            element:<Home users={users} addUser={addUser}/>
        },
        {
            path:'/profile/:id',
            element:<Profile users={users} addUser={addUser}/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Task

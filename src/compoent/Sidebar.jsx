import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({item,index,path}) => {
  return (
    <div key={index} className="p-3 hover:bg-gray-200">
    <NavLink
        to={item.path}
        className={`flex items-center justify-start w-full ${path === item.path ? 'text-blue-500' : ''}`}
    >
        {item.icon}
        <p className="ml-2">{item.title}</p>
    </NavLink>
</div>
  )
}

export default Sidebar

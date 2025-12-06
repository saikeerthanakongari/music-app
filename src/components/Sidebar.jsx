import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineMenu, HiHome, HiUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

const links = [
  { name: 'Discover', to: '/', icon: HiHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiUserGroup },
];

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <h2 className="text-white text-3xl font-bold mb-10">Lyriks</h2>
        <div className="mt-10">
          {links.map((item) => (
            <NavLink key={item.name} to={item.to} className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
              <item.icon className="w-6 h-6 mr-2" />
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Mobile Menu Icon would go here for responsive UI */}
    </>
  );
};

export default Sidebar;
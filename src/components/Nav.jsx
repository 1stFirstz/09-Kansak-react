import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header className="bg-pink-950 p-4 flex justify-end">
      <nav>
        <div className="flex space-x-6">
            <Link to='/' className="text-white hover:text-gray-400">Home</Link>
            <Link to='/Owner' className="text-white hover:text-gray-400">Owner</Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

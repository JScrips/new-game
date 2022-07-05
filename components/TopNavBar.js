import { GiHamburgerMenu } from 'react-icons/gi';
import SideNavBar from './SideNavBar';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const TopNavBar = () => {
	const [openNav, setOpenNav] = useState(false);
	// to control the state of the navigation.
	return (
		<>
			<nav className=' relative z-10 bg-green-600 p-4 flex'>
				<GiHamburgerMenu
					onClick={() => setOpenNav((prev) => !prev)}
					className='text-4xl bg-gray-600 p-2 rounded hover:cursor-pointer md:hidden'
				/>
			</nav>
			<AnimatePresence>
				{openNav && <SideNavBar setOpenNav={setOpenNav} />}
			</AnimatePresence>
			{/* Side Nav bar component, that accepts prop states to determine whether the component shows or not. */}
		</>
	);
};

export default TopNavBar;

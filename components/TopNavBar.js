import { GiHamburgerMenu } from 'react-icons/gi';
import SideNavBar from './SideNavBar';
import { useState } from 'react';
import Link from 'next/link';

const TopNavBar = () => {
	const [openNav, setOpenNav] = useState(false);
	// to control the state of the navigation.
	return (
		<>
			<nav className='bg-green-600 p-4 flex'>
				<GiHamburgerMenu
					onClick={() => setOpenNav((prev) => !prev)}
					className='text-4xl bg-gray-600 p-2 rounded hover:cursor-pointer'
				/>
			</nav>
			<SideNavBar openNav={openNav} setOpenNav={setOpenNav} />
			{/* Side Nav bar component, that accepts prop states to determine whether the component shows or not. */}
		</>
	);
};

export default TopNavBar;

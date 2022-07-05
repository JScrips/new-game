import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideNavBar = ({ setOpenNav }) => {
	// These are the different variants to animate the motion component.
	const variants = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'tween',
			},
		},
		hidden: {
			opacity: 1,
			y: '-100vh',
			transition: {
				type: 'tween',
			},
		},
	};

	return (
		<>
			<nav className={` min-h-screen border text-center text-2xl`}>
				<motion.ul
					variants={variants}
					initial='hidden'
					animate='visible'
					exit='hidden'
					className='flex flex-col gap-4'>
					<li onClick={() => setOpenNav((prev) => !prev)}>
						<Link href='/'>
							<a>Home</a>
						</Link>
					</li>
					<li onClick={() => setOpenNav((prev) => !prev)}>
						<Link href='/Shops'>
							<a>Shops</a>
						</Link>
					</li>
					<Link href='/Story'>
						<a className='text-lg' onClick={() => setOpenNav((prev) => !prev)}>
							Story
						</a>
					</Link>
					<Link href='/ElementalMines'>
						<a className='text-lg' onClick={() => setOpenNav((prev) => !prev)}>
							Elemental Mines
						</a>
					</Link>
					<Link href='/MagicMines'>
						<a className='text-lg' onClick={() => setOpenNav((prev) => !prev)}>
							Magic Mines
						</a>
					</Link>
					<Link href='/Gigantor'>
						<a className='text-lg' onClick={() => setOpenNav((prev) => !prev)}>
							Gigantor
						</a>
					</Link>
					<Link href='/Dragantor'>
						<a className='text-lg' onClick={() => setOpenNav((prev) => !prev)}>
							Dragantor
						</a>
					</Link>
					<Link href='/Necroptor'>
						<a className='text-lg' onClick={() => setOpenNav((prev) => !prev)}>
							Necroptor
						</a>
					</Link>
				</motion.ul>
			</nav>
		</>
	);
};

export default SideNavBar;

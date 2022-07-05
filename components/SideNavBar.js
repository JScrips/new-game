import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideNavBar = ({ openNav, setOpenNav }) => {
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
		<AnimatePresence>
			{openNav && (
				<motion.nav
					variants={variants}
					initial='hidden'
					animate='visible'
					exit='hidden'
					className={`relative min-h-screen border text-center -z-10`}>
					<h1> Dungeons</h1>

					<h1>Shop</h1>
					<h1> Inventory </h1>
					<h1> Monster Box </h1>
					<h1> Story </h1>

					<ul>
						{/* This should navigate to the "Gigantor" page, but doesn't. I suspect it has something to do with motion components from framer */}
						<Link href='/Gigantor'>
							<a>
								<li>Gigantor</li>
							</a>
						</Link>
						<li>Dragantor</li>
						<li>Necrantor</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
};

export default SideNavBar;

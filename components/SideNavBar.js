import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SideNavBar = ({ openNav, setOpenNav }) => {
	const MotionLink = motion(Link);
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

					<h1>
						<MotionLink href='/'>
							<a>Shop</a>
						</MotionLink>
					</h1>
					<h1> Inventory </h1>
					<h1> Monster Box </h1>
					<h1> Story </h1>

					<ul>
						<li>Gigantor</li>
						<li>Dragantor</li>
						<li>Necrantor</li>
					</ul>
				</motion.nav>
			)}
		</AnimatePresence>
	);
};

export default SideNavBar;

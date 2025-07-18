"use client";

import Image from "next/image";
import { useState } from "react";

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<div className='container'>
			<header>
				<nav>
					<a href='#' className='logo'>
						<Image src='/img/logo.png' alt='logo' width={117} height={34} />
					</a>

					<div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>

					<div className={`links ${isOpen ? "show" : ""}`}>
						<a href='#features' className='item' onClick={closeMenu}>
							Features
						</a>
						<a href='#advatnages' className='item' onClick={closeMenu}>
							Advatnages
						</a>
						<a href='#testimonial' className='item' onClick={closeMenu}>
							Testimonial
						</a>
						<a href='#faq' className='item' onClick={closeMenu}>
							FAQ
						</a>
					</div>
				</nav>
			</header>
		</div>
	);
};

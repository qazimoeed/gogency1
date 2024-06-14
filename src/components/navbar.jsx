import React from "react"
import "../style.css"
import { useState } from "react"
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const toggleNavbar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<img src="/assets/gogencylogo.svg" alt="Logo" />
				</div>
				<div className="menu-toggle">
					<button className="burger-btn" onClick={toggleNavbar}>
						&#9776;
					</button>
				</div>
				<ul className={`tabs ${isOpen ? "show" : ""}`}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">Features</a>
					</li>
					<li>
						<a href="#">Testimonials</a>
					</li>
					<li>
						<a href="#">Pricing</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<button className="button">Your Travel House &gt;</button>
			</nav>
		</>
	)
}

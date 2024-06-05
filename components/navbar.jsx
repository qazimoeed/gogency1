import React from "react"
import "../src/style.css"
export default function Navbar() {
	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<img src="./assets/gogencylogo.svg" alt="Logo" />
				</div>
				<ul className="tabs">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
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

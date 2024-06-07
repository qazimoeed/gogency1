import React from "react"
import "../src/style.css"
import logo from "../assets/gogencylogo.svg"

export default function Navbar() {
	return (
		<>
{/* 			test comment */}
			<nav className="navbar">
				<div className="logo">
					<img src={logo} alt="Logo" />
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

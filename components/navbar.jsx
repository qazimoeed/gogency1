import React from "react"
import "../src/style.css"
export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false) // State to track navbar visibility

	const toggleNavbar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<nav className="navbar">
				<div className="logo">
					<img src={logo} alt="Logo" />
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

import React, { useState } from "react"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleNavbar = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			<nav
				className="flex justify-between items-center border-b-2 border-[#c3c3c3] max-w-[1440px] mx-auto px-3 py-[14px] sm:px-8 lg:px-16 xl:px-16"
				style={{ borderBottom: "2px solid gray" }}
			>
				<div className="logo">
					<img
						src="/assets/gogencylogo.svg"
						alt="Logo"
						className="w-48 h-12 pt-1.5 pl-[10px]"
					/>
				</div>
				<div className="hidden md:hidden lg:flex lg:pr-[4px]">
					<ul className="tabs flex space-x-6 justify-center lg:justify-evenly">
						<li>
							<a
								href="#"
								className="text-[#212121] no-underline hover:text-[#24ea28]"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-[#212121] no-underline hover:text-[#24ea28]"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-[#212121] no-underline hover:text-[#24ea28]"
							>
								Testimonials
							</a>
						</li>
						<li className="leading-[19.2px] text-center lg:mb-0">
							<a
								href="#"
								className="text-[#212121] no-underline hover:text-[#24ea28]"
							>
								Pricing
							</a>
						</li>
						<li className="leading-[19.2px] text-center lg:mb-0">
							<a
								href="#"
								className="text-[#212121] no-underline hover:text-[#24ea28]"
							>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<button className="hidden lg:block text-[#212121] transition-colors border-none border border-[#24ea28] rounded cursor-pointer mt-1 font-roboto text-[17px] font-bold leading-[20px] text-center w-[264px] mr-[12px] h-[50px] bg-[#24EA28] hover:bg-[#45A049]">
					Your Travel House &gt;
				</button>
				<div className="lg:hidden">
					<button
						className="bg-none border-none text-2xl cursor-pointer focus:outline-none"
						onClick={toggleNavbar}
					>
						☰
					</button>
				</div>
			</nav>
			<div
				className={`lg:hidden transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<ul
					className={`tabs absolute top-16 right-0 bg-white w-48 py-4 px-8 space-y-4 text-base font-semibold shadow-lg ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<li>
						<a
							href="#"
							className="text-[#212121] no-underline hover:text-[#24ea28]"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-[#212121] no-underline hover:text-[#24ea28]"
						>
							Features
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-[#212121] no-underline hover:text-[#24ea28]"
						>
							Testimonials
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-[#212121] no-underline hover:text-[#24ea28]"
						>
							Pricing
						</a>
					</li>
					<li>
						<a
							href="#"
							className="text-[#212121] no-underline hover:text-[#24ea28]"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

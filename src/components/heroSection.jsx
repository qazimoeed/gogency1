import React from "react"

export default function HeroSection() {
	return (
		<div className="heroVector">
			<div className="heroContainer">
				<h1 className="heroHeading">EMPOWERING YOUR ONLINE TRAVEL BUSINESS</h1>
				<p className="heroPara">
					The only portal your travel agency ever needs
				</p>
				<div className="heroCta">
					<button className="firstBtn btnFont">Discover Gogency</button>
					<button className="secondBtn btnFont">See Demo &gt;</button>
				</div>
				<div className="heroEarth">
					<img
						className="earthImage"
						src="/assets/heroEarth.svg"
						alt="EarthImage"
					/>
				</div>
			</div>
		</div>
	)
}

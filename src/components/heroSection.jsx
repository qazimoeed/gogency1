import React from "react"

export default function HeroSection() {
	return (
		<div className="heroContainer">
			<div className="heroVector">
				<h1 className="heroHeading">EMPOWERING YOUR ONLINE</h1>
				<h1 className="heroHeadingheropart2"> TRAVEL BUSINESS</h1>
				<p className="heroPara">
					The only portal your travel agency ever needs
				</p>
				<div className="heroCta">
					<button className="firstBtn btnFont">Discover Gogency</button>
					<button className="secondBtn btnFont">See Demo &gt;</button>
				</div>
				<img
					className="earthImage"
					src="/assets/heroEarth.svg"
					alt="EarthImage"
				/>
			</div>
		</div>
	)
}

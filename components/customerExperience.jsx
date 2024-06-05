import React from "react"

export default function CustomerExperience() {
	return (
		<>
			<section className="section1Container">
				<h1 className="firstHeading">Customer</h1>
				<h1 className="secondHeading">EXPERIENCE</h1>
				<div className="boxesBoundary">
					<section>
						<div className="custbox1">
							<button className="custBtn btnFont">
								<img src="./assets/line.svg" />
								<img src="./assets/emailsvg.svg" />
								Customer
							</button>
							<img src="./assets/Vector656.svg" className="helos" />
						</div>

						<ul className="uls">
							<li>Add Customers</li>
							<li>Keep track of every customer</li>
							<li>Edit/Delete any of customer</li>
						</ul>
					</section>
					<section>
						<div>
							<img src="./assets/helos.svg" className="helo" />
						</div>
						<div className="cards">
							<div class="card1">
								<img src="./assets/image.svg" className="cardLogo1" />
								<h1 className="card1Heading">Muhammad Arslan</h1>
								<p className="card1Para">arslantariqarsal@gmail.com</p>
								<p className="card1Para2">
									<img src="./assets/address.svg" />
									Ecuador, Giga Mall.
								</p>
								<hr />
								<p className="card1Para1">
									<img src="./assets/call.svg" />
									033 6595 2950
								</p>
							</div>
							<div class="card2">
								<img src="./assets/image.svg" className="cardLogo1" />
								<h1 className="card1Heading">Muhammad Arslan</h1>
								<p className="card1Para">arslantariqarsal@gmail.com</p>
								<p className="card1Para2">
									<img src="./assets/address.svg" />
									Ecuador, Giga Mall.
								</p>
								<hr />
								<p className="card1Para1">
									<img src="./assets/call.svg" />
									033 6595 2950
								</p>
							</div>
						</div>
					</section>
				</div>
			</section>
		</>
	)
}

// <div className="boxesBoundary">

// 					<div className="custbox2">
// 						<img src="./assets/helos.svg" className="helosCSS" />
// 						<div className="card1">helo</div>
// 					</div>
// 				</div>
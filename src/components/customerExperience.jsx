import React from "react"

export default function CustomerExperience() {
	return (
		<>
			<div className="customerboundaryforresponsive">
				<section>
					<h1 className="firstHeadingCustomer">Customer</h1>
					<h1 className="secondHeadingCustomer">EXPERIENCE</h1>

					<img src="/assets/helos.svg" className="helo" />

					<div className="boxesBoundary">
						<div className="custbox1">
							<div>
								<button className="custBtn btnFont">
									<img src="/assets/line.svg" />
									<img src="/assets/emailsvg.svg" />
									Customer
								</button>
								<ul className="uls">
									<li>Add Customers</li>
									<li>Keep track of every customer</li>
									<li>Edit/Delete any of customer</li>
								</ul>
							</div>
							<div>
								<img src="/assets/Vector656.svg" className="helos" />
							</div>
							<div class="card1">
								<img src="/assets/image.svg" className="cardLogo1" />
								<h1 className="card1Heading">Muhammad Arslan</h1>
								<p className="card1Para">arslantariqarsal@gmail.com</p>
								<p className="card1Para2">
									<img src="/assets/address.svg" />
									Ecuador, Giga Mall.
								</p>
								<hr />
								<p className="card1Para1">
									<img src="/assets/call.svg" />
									033 6595 2950
								</p>
							</div>
						</div>
						<div class="card2">
							<img src="/assets/image.svg" className="cardLogo2" />
							<div>
								<h1 className="card2Heading">Muhammad Arslan</h1>
								<p className="card2Para1">arslantariqarsal@gmail.com</p>
								<p className="card2Para2">033 6595 2950</p>
							</div>
							<div className="coverforcard2info">
								<h1 className="card2Para1">Giga Mall</h1>
								<p className="card2Para">Address line 2</p>
								<p className="card2Para1">Ecuador.</p>
							</div>
							<div className="statusActive">
								<p className="statusBtn"> Status: </p>
								<p className="activeBtn"> Active</p>
								<img src="/assets/downArrow.svg" />
							</div>

							<div>
								<button className="card2Btn1 btnFont">Cancel</button>
								<button className="card2Btn2 btnFont">Save</button>
							</div>
						</div>
					</div>
				</section>
				<div className="customerExperiencrBottomBoundary">
					<table className="customerExperiencrBottomCard1">
						<tr>
							<td>
								<img src="/assets/customerexp1.svg" />
							</td>
							<td>
								<p className="customerExperienceCardvalue1">Zeeshan Aslam</p>
							</td>
							<td>
								<p className="customerExperienceCardvalue2">
									zeshanAslam@gmai.com
								</p>
							</td>
							<td>
								<p className="customerExperiencecard1Para2">
									<img src="/assets/address.svg" />
									Ecuador, Giga Mall.
								</p>
							</td>
							<td>
								<p className="customerExperiencecard1Para2">
									<img src="/assets/call.svg" />
									033 6595 2950
								</p>
							</td>
							<td>
								<img src="/assets/straightline.svg" className="alignment" />
							</td>
							<td>
								<img src="/assets/threedots.svg" className="alignment" />
							</td>
						</tr>
					</table>
					<table className="customerExperiencrBottomCard1">
						<tr>
							<td>
								<img src="/assets/customerexp1.svg" />
							</td>
							<td>
								<p className="customerExperienceCardvalue1">Zeeshan Aslam</p>
							</td>
							<td>
								<p className="customerExperienceCardvalue2">
									zeshanAslam@gmai.com
								</p>
							</td>
							<td>
								<p className="customerExperiencecard1Para2">
									<img src="/assets/address.svg" />
									Ecuador, Giga Mall.
								</p>
							</td>
							<td>
								<p className="customerExperiencecard1Para2">
									<img src="/assets/call.svg" />
									033 6595 2950
								</p>
							</td>
							<td>
								<img src="/assets/straightline.svg" className="alignment" />
							</td>
							<td>
								<img src="/assets/threedots.svg" className="alignment" />
							</td>
						</tr>
					</table>
				</div>
			</div>
		</>
	)
}

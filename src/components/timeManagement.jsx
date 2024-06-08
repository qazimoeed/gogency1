import React from "react"

export default function TimeManagement() {
	return (
		<>
			<div>
				<h1 className="firstheadtrack">Team &</h1>
				<h1 className="teamSecHead">HR MANAGEMENT</h1>
			</div>
			<div className="timecardflex">
				<ul className="uls inline">
					<li>Team Performance</li>
					<li>Attendance Record</li>
					<li>Meeting Invites and Management</li>
				</ul>

				<div className="timeManageCard">
					<img src="/assets/timeCard1.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<div>
						<span className="cardbackcircle1 cardbackcircleText">84%</span>
						<span className="cardbackcircle2 cardbackcircleText">85%</span>
					</div>
					<div>
						<span>Month</span>
						<span>Year</span>
					</div>
					<p>
						<button className="cardbutton">Profile Details</button>
					</p>
				</div>

				<div className="timeManageCard">
					<img src="/assets/timeCard2.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<div>
						<span className="cardbackcircle1 cardbackcircleText">84%</span>
						<span className="cardbackcircle2 cardbackcircleText">85%</span>
					</div>
					<div>
						<span>Month</span>
						<span>Year</span>
					</div>
					<p>
						<button className="cardbutton">Profile Details</button>
					</p>
				</div>

				<div className="timeManageCard">
					<img src="/assets/timeCard3.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<div>
						<span className="cardbackcircle1 cardbackcircleText">84%</span>
						<span className="cardbackcircle2 cardbackcircleText">85%</span>
					</div>
					<div>
						<span>Month</span>
						<span>Year</span>
					</div>
					<p>
						<button className="cardbutton">Profile Details</button>
					</p>
				</div>
			</div>

			<div className="easypaybottomboun">
				<table className="easyPaymentCardBottomBoundary">
					<h2>
						<b>Attendent List</b>
					</h2>
					<tbody>
						<tr>
							<td>
								<p>Employee Number</p>
							</td>
							<td>
								<p>Employee Name</p>
							</td>
							<td>
								<p>Department</p>
							</td>
							<td>
								<p>Date</p>
							</td>
							<td>
								<p>Login Time</p>
							</td>
							<td>
								<p>Logout Time</p>
							</td>
							<td>
								<p>Details</p>
							</td>
						</tr>
						<tr>
							<td>
								<b>5570</b>
							</td>
							<td className="timeinnercardflex">
								<img src="./assets/timeCard1.svg" />
								<span>
									<p>Elvis Moren</p>
									<p>UX Designer</p>
								</span>
							</td>
							<td>
								<p>Product Development</p>
								<p>Design Team</p>
							</td>
							<td>
								<p>
									<b>12-23-21</b>
								</p>
								<p>Thursday</p>
							</td>
							<td>
								<p>
									<b>09:30 AM</b>
								</p>
							</td>
							<td>
								<p>
									<b>ON DUTY</b>
								</p>
							</td>
							<td>
								<img src="/assets/tracklogo.svg" className="trackimagecard" />
							</td>
						</tr>
						<tr>
							<td>
								<b>5570</b>
							</td>
							<td className="timeinnercardflex">
								<img src="/assets/timeCard1.svg" />
								<span>
									<p>Elvis Moren</p>
									<p>UX Designer</p>
								</span>
							</td>
							<td>
								<p>Product Development</p>
								<p>Design Team</p>
							</td>
							<td>
								<p>
									<b>12-23-21</b>
								</p>
								<p>Thursday</p>
							</td>
							<td>
								<p>
									<b>09:30 AM</b>
								</p>
							</td>
							<td>
								<p>
									<b>ON DUTY</b>
								</p>
							</td>
							<td>
								<img src="/assets/tracklogo.svg" className="trackimagecard" />
							</td>
						</tr>
						<tr>
							<td>
								<b>5570</b>
							</td>
							<td className="timeinnercardflex">
								<img src="/assets/timeCard1.svg" />
								<span>
									<p>Elvis Moren</p>
									<p>UX Designer</p>
								</span>
							</td>
							<td>
								<p>Product Development</p>
								<p>Design Team</p>
							</td>
							<td>
								<p>
									<b>12-23-21</b>
								</p>
								<p>Thursday</p>
							</td>
							<td>
								<p>
									<b>09:30 AM</b>
								</p>
							</td>
							<td>
								<p>
									<b>ON DUTY</b>
								</p>
							</td>
							<td>
								<img src="/assets/tracklogo.svg" className="trackimagecard" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}

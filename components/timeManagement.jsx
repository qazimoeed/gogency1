import React from "react"

export default function TimeManagement() {
	return (
		<>
			<div>
				<h1 className="firstheadtrack">Team &</h1>
				<h1 className="teamSecHead">HR MANAGEMENT</h1>
			</div>

			<ul className="uls inline">
				<li>Team Performance</li>
				<li>Attendance Record</li>
				<li>Meeting Invites and Management</li>
			</ul>

			<ul className="uls inline">
				<li>Team Performance</li>
				<li>Attendance Record</li>
				<li>Meeting Invites and Management</li>
			</ul>

			<div>
				<div className="card">
					<img src="./assets/timeCard1.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<p>
						<button className="cardbutton">Contact</button>
					</p>
				</div>
			</div>
		</>
	)
}

import React from "react"
import "../src/style.css"

export default function Footer() {
	return (
		<>
			<footer className="footerBoundary">
				<section className="footerInternal">
					<img src="./assets/gogencyDark.svg" className="footerImage" />
					<div className="aboutUs">
						<div>
							<p>Real-Time Inquiry Management</p>
							<p>Automated Invoice Generation</p>
							<p>Boosted Consultant Performance </p>
							<p>White-Labelled Domain and Branding</p>
						</div>
						<div>
							<p>Subscription Packages & Pay As You Go</p>
							<p>Vendor and Consolidator Management</p>
							<p>Consultant Ledger </p>
							<p>Real-time Notifications</p>
						</div>
						<div>
							<p>Customer Loyalty Program</p>
							<p>Daily Expense Tracking</p>
							<p>Payroll System</p>
							<p>Auditable Process Timeline</p>
						</div>
					</div>
					<div className="rightsLinks">
						<div className="rights">© 2023 All Rights Reserved The Gogency</div>
						<div className="socialLinks">
							<img src="./assets/facebook.svg" />
							<img src="./assets/teitter.svg" />
							<img src="./assets/Insta.svg" />
						</div>
					</div>
					<div className="quicklinks">
						<ul className="footerTabs">
							<li>
								<a href="#">Privacy Policy</a>
							</li>
							<li>
								<a href="#">Terms of Use</a>
							</li>
							<li>
								<a href="#">FAQs</a>
							</li>
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Contact Us</a>
							</li>
						</ul>
					</div>
				</section>
			</footer>
		</>
	)
}

import React from "react"
import "../style.css"
export default function Footer() {
	return (
		<>
			{/* max-width: 1440px;
		margin: auto; */}
			<footer className="bg-[#212121] px-4 pt-8 md:px-[71px] md:pt-[87px] h-auto md:h-[623px]">
				<section className="footerInternal max-w-screen-xl mx-auto">
					<img
						src="/assets/gogencyDark.svg"
						className="footerImage mb-8 md:mb-0"
					/>
					<div className="flex flex-col md:flex-row w-full h-auto md:h-[151px] mt-8 md:mt-[62px] md:mb-[165px] leading-6 gap-8 md:gap-[37px] text-white justify-between items-stretch">
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
					<div className="rightsLink flex flex-col md:flex-row justify-between items-center mt-[8] md:mt-[62px]">
						<div className="text-[12.8px] font-bold leading-[15.6px] text-left text-white mt-[34px] md:mt-0">
							© 2023 All Rights Reserved The Gogency
						</div>
						<div className="flex gap-4 md:gap-[64px] flex-row pr-0 md:pr-[20px] mt-4 md:mt-0">
							<img src="/assets/facebook.svg" />
							<img src="/assets/teitter.svg" />
							<img src="/assets/Insta.svg" />
						</div>
					</div>
					<div>
						<ul className="montseratFont mt-8 md:mt-[87px] w-full md:w-[614px]  pt-1 px-0 list-none flex flex-col sm:items-center md:flex-row justify-between text-[17px] font-bold">
							<li className="mt-2 md:mt-0">
								<a href="#" className="text-decoration">
									Privacy Policy
								</a>
							</li>
							<li className="mt-2 md:mt-0">
								<a href="#" className="text-decoration">
									Terms of Use
								</a>
							</li>
							<li className="mt-2 md:mt-0">
								<a href="#" className="text-decoration">
									FAQs
								</a>
							</li>
							<li className="mt-2 md:mt-0">
								<a href="#" className="text-decoration">
									About Us
								</a>
							</li>
							<li className="mt-2 md:mt-0">
								<a href="#" className="text-decoration">
									Contact Us
								</a>
							</li>
						</ul>
					</div>
				</section>
			</footer>
		</>
	)
}

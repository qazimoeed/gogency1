import React from "react"
import "../style.css"
export default function Footer() {
	return (
		<>
			<footer className="bg-[#212121] pl-[71px] pt-[87px] pr-[71px] h-[603px]">
				<section className="footerInternal">
					<img src="/assets/gogencyDark.svg" className="footerImage" />
					<div className="flex w-inherit h-[151px] mt-[62px] leading-[26px] gap-[210px] text-white justify-start items-stretch">
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
						<div className="text-[12.8px] font-bold leading-[15.6px] text-left mt-[5px]">
							© 2023 All Rights Reserved The Gogency
						</div>
						<div className="flex gap-[64px] flex-row pr-[20px]">
							<img src="/assets/facebook.svg" />
							<img src="/assets/teitter.svg" />
							<img src="/assets/Insta.svg" />
						</div>
					</div>
					<div>
						<ul className="montseratFont mt-[87px] w-[614px] py-[1px] px-0 list-none flex justify-between text-[17px] font-bold">
							<li>
								<a href="#" className="text-decoration">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration">
									Terms of Use
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration">
									FAQs
								</a>
							</li>
							<li>
								<a href="#" className="text-decoration">
									About Us
								</a>
							</li>
							<li>
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

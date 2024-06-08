import React from "react"

export default function LastSection() {
	return (
		<section className="lastSectionBoundary ">
			<section className="footerCTA">
				<button className="initialBtn btnFont">
					Have a Taste of Independence
				</button>
				<button className="secondBtn btnFont">See Demo &gt;</button>
			</section>
			<div className="lastSectionFlex">
				<div className="lastbox1">
					<h3 className="lastsecheading">SERVING ACROSS THE GLOBE</h3>
					<p className="lastSectionPara">
						Keeping track of inquiries is a fundamental aspect of effective
						customer service and organizational management. It ensures timely
						responses, fosters trust with clients, and aids in maintaining a
						comprehensive database of concerns and feedback.
					</p>

					<div className="figures">
						<div>
							<h1>23 + </h1>
							<p>lorem Impsum</p>
						</div>
						<div>
							<h1>105 + </h1>
							<p>lorem Impsum</p>
						</div>
						<div>
							<h1>50 </h1>
							<p>lorem Impsum</p>
						</div>
					</div>
				</div>
				<div>
					<img src="/assets/greenImage.svg" className="greenImage" />
				</div>
			</div>
		</section>
	)
}

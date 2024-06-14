import React from "react"

export default function Section1() {
	return (
		<>
			<div className="section1Container secOneCont">
				<div>
					<h1 className="firstHeadingSection1">One Click</h1>
					<h1 className="secondHeadingSection1">FILL WEBSITE</h1>
					<p className="firstPara">Click on Create website</p>
					<button className="sec1Btn">Try Now!</button>
				</div>
				<div className="sect1box2">
					<img src="/assets/gogencylogo.svg" alt="Logo" className="sect1Logo" />
					<div className="sect1back">
						<p className="sect1box1Para">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
							incidunt natus. Nulla sunt, dolor vel rerum necessitatibus.
						</p>
						<div className="belowsect1">
							<h3>
								Libero perferendis est ducimus recusandae impedit ad odit
								beatae.
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
								voluptate veritatis corporis deleniti, quisquam consequuntur
								asperiores architecto consectetur illo est harum.
							</p>
							<button className="sec1Btn aligns">Lets Move !</button>
						</div>
						<img
							src="/assets/sect1botomVector.svg"
							className="sect1box2lowerimage"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

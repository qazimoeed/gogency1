import React from "react"

export default function Section1() {
	return (
		<>
			<div className="section1Container mx-8 sm:mx-0 my-24 sm:my-16 lg:my-28">
				<div className="secOneCont max-w-[1440px] mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly items-stretch sm:px-20 md:px-[86px] md:py-[6px] lg:pt-[100px] lg:ml-[80px]">
					<div className="mb-10 sm:mb-0 text-center sm:text-left">
						<h1 className="firstHeadingSection1 font-black text-6xl sm:text-[48px] sm:leading-[42px] sm:w-auto sm:h-auto sm:pt-0 sm:mb-0 md:text-[80px] md:leading-[90.64px] md:w-[446px] md:h-[91px] md:pt-12 ">
							One Click
						</h1>
						<h1 className="secondHeadingSection1 font-extralight text-6xl sm:text-[48px] sm:leading-[42px] sm:ml-0 sm:mt-0 sm:h-auto md:text-[80px] md:leading-[90.64px] md:ml-16 md:mt-0 md:h-[91px] ">
							FILL WEBSITE
						</h1>
						<p className="firstPara font-light text-lg sm:text-base sm:leading-[18.27px] sm:w-auto sm:h-auto sm:pl-0 md:text-2xl md:leading-[30.54px] md:w-[400px] md:h-[98px] md:pl-0.5">
							Click on Create website
						</p>
						<button className="sec1Btn bg-[#212121] text-[#24ea28] font-bold md:w-[173px] text-base rounded-3xl py-3.5 px-7 mt-6 sm:ml-14 md:mb-6">
							Try Now!
						</button>
					</div>
					<div
						className="sect1box2 w-full sm:w-full md:w-[469px] h-auto sm:h-auto md:h-[750px] rounded-lg mt-6 sm:mt-10 md:mt-6"
						style={{ border: "2px solid #c3c3c3", margin: "auto" }}
					>
						<img
							src="/assets/gogencylogo.svg"
							alt="Logo"
							className="sect1Logo w-30 sm:w-30 md:w-36 h-20 sm:h-20 md:h-24 mt-2.5 ml-5 mx-auto sm:mx-auto md:mx-5 block"
						/>
						<div
							className="sect1back bg-[url('/assets/sect1TopVector.svg')] bg-cover w-full h-40 sm:h-52 md:h-60 mt-0.25"
							style={{ backgroundPosition: "center" }}
						>
							<p className="sect1box1Para px-5 sm:px-5 md:px-10 pt-16 sm:pt-20 md:pt-40 sm:pl-10 sm:pr-10 md:pl-36 md:pr-10 sm:-mt-4 md:-mt-12">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Aliquam, incidunt natus. Nulla sunt, dolor vel rerum
								necessitatibus.
							</p>
						</div>
						<div className="belowsect1 p-4 sm:p-4 md:p-4 text-center">
							<h3>
								Libero perferendis est ducimus recusandae impedit ad odit
								beatae.
							</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
								voluptate veritatis corporis deleniti, quisquam consequuntur
								asperiores architecto consectetur illo est harum.
							</p>
							<button className="sec1Btn aligns bg-[#212121] text-[#24ea28] font-bold text-base rounded-3xl py-3.5 px-7 mt-7 mx-auto sm:mt-5 md:mt-7">
								Lets Move !
							</button>
						</div>
						<img
							src="/assets/sect1botomVector.svg"
							className="sect1box2lowerimage w-full h-auto"
							alt="Bottom Vector"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

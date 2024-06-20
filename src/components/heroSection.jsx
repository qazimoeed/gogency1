import React from "react"

export default function HeroSection() {
	return (
		<div className="heroContainer px-0 py-14 text-center md:px-0 md:py-14 lg:pb-14 lg:pt-[3.1rem] lg:px-0">
			<div className="heroVector bg-cover bg-no-repeat bg-top h-[560px] mb-[300px] md:mb-[225px] md:px-12 md:pt-[75px] lg:px-20 lg:pt-[100px] lg:mb-[300px]">
				<h1 className="heroHeading text-center font-roboto font-black text-[35px] md:text-[64px] lg:text-[82px] leading-[37px] md:leading-[56px] lg:leading-[76px] mt-[7.5px] md:mt-[7.5px] lg:mt-[7.5px] mr-[20px] mb-0">
					EMPOWERING YOUR ONLINE
				</h1>
				<h1 className="heroHeadingheropart2 text-center font-roboto font-black text-[35px] md:text-[64px] lg:text-[82px] leading-[37px] md:leading-[56px] lg:leading-[63px] mt-1 md:mt-1 lg:mt-1 mr-[4px] mb-0">
					TRAVEL BUSINESS
				</h1>
				<p className="heroPara font-roboto font-normal text-[18px] md:text-[20px] lg:text-[24px] leading-[18.27px] md:leading-[20.3px] lg:leading-[27.36px] mt-[35px] ml-[-10px]">
					The only portal your travel agency ever needs
				</p>
				<div className="heroCta flex flex-wrap justify-center items-center gap-[20px] my-[41px] p-[15px] md:flex-row md:gap-[20px] md:justify-center md:items-center lg:flex-row lg:gap-[20px] lg:justify-center lg:items-center">
					<button className="firstBtn btnFont bg-[#212121] text-[#24ea28] rounded-[30px] border-none w-[100%] md:w-[246px] h-[50px] p-[15px]">
						Discover Gogency
					</button>
					<button className="secondBtn btnFont bg-[#ffffff] text-[#212121] rounded-[30px] border border-[#212121] w-[100%] md:w-[246px] h-[50px]">
						See Demo &gt;
					</button>
				</div>
				<img
					className="earthImage max-w-[85%] md:max-w-[75%] lg:max-w-[100%] mr-[10px] mt-0"
					src="/assets/heroEarth.svg"
					alt="EarthImage"
				/>
			</div>
		</div>
	)
}

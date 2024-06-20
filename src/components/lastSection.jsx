import React from "react"

export default function LastSection() {
	return (
		<div className="mt-[44px] lastSectionBoundary pt-[43px] bg-no-repeat bg-cover">
			<div className="mt-[44px] max-w-[1440px] mx-auto ">
				<section className=" h-[50px] gap-[20px] py-[15px] px-[0px] pb-[18px] pl-[79px] flex">
					<button className="btnFont h-[50px] px-[40px] py-[10px] bg-[#212121] rounded-[30px] border-0 text-[#24EA28] w-[344px]">
						Have a Taste of Independence
					</button>
					<button className="btnFont w-[247px] h-[50px] bg-white rounded-[30px] border border-gray-700 text-gray-700">
						See Demo &gt;
					</button>
				</section>
				<div className="flex ">
					<div className="lastbox1">
						<h3 className="mt-[164px] mb-[47px] w-[579px] text-[58px] font-extrabold leading-[56.32px] text-left text-[#212121] montseratFont">
							SERVING ACROSS THE GLOBE
						</h3>
						<p className="font-[Roboto Medium] text-[#212121] text-left w-596  pl-[0.25rem] text-[24px] font-normal leading-[28.36px] mb-[71px]">
							Keeping track of inquiries is a fundamental aspect of effective
							customer service and organizational management. It ensures timely
							responses, fosters trust with clients, and aids in maintaining a
							comprehensive database of concerns and feedback.
						</p>

						<div className="flex justify-between mb-[45px]">
							<div>
								<h1 className="text-[56px] font-bold mt-[52px] mb-0 ml-0 mr-0 leading-[56.32px]">
									23 +
								</h1>
								<p className="m-0 font-[FONTSPRING DEMO - Halcyon Light] text-[22px] font-normal mt-[3px] leading-[24.36px] text-left text-[#212121]">
									Lorem Ipsum
								</p>
							</div>
							<div>
								<h1 className="text-[56px] font-bold mt-[52px] mb-0 ml-0 mr-0 leading-[56.32px]">
									105 +
								</h1>
								<p className="m-0 font-[FONTSPRING DEMO - Halcyon Light] text-[22px] font-normal mt-[3px] leading-[24.36px] text-left text-[#212121]">
									Lorem Ipsum
								</p>
							</div>
							<div>
								<h1 className="text-[56px] font-bold mt-[52px] mb-0 ml-0 mr-0 leading-[56.32px]">
									50
								</h1>
								<p className="m-0 font-[FONTSPRING DEMO - Halcyon Light] text-[22px] font-normal mt-[3px] leading-[24.36px] text-left text-[#212121]">
									Lorem Ipsum
								</p>
							</div>
						</div>
					</div>
					<div>
						<img src="/assets/greenImage.svg" className="mt-[43px] h-[791px]" />
					</div>
				</div>
			</div>
		</div>
	)
}

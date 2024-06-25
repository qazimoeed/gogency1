import React from "react"
import TextReveal from "./magicui/text-reveal"
import ShinyButton from "./magicui/shiny-button"
import { MagicContainer, MagicCard } from "./magicui/magic-card"
import ShimmerButton from "./magicui/shimmer-button"
import ShinyButton2 from "./magicui/shiny-button2"
import NeonGradientCard from "./magicui/gradient-border"
import FloatLeft from "./magicui/floatLeft"
import FloatRight from "./magicui/floadRight"

export default function CustomerExperience() {
	return (
		<>
			<div className="max-w-[1440px] mx-auto px-4 lg:px-0">
				<section className="md:w-[80%] lg:w-full m-auto">
					<TextReveal
						textItems={[
							{
								text: "Customer",
								className:
									"text-[42px] font-extrabold leading-tight ml-10 mb-0 sm:text-[60px] lg:text-[103px] lg:w-[506px] lg:h-[91px] lg:leading-[90.64px] lg:ml-[82px]",
							},
							{
								text: "EXPERIENCE",
								className:
									"text-[35px] font-extralight leading-tight ml-20 mb-0 sm:text-[60px] sm:ml-[80px] lg:text-[96px] lg:mt-[1px] lg:mx-[35px] lg:mb-[23px] lg:ml-[135px] lg:leading-[78.64px]",
							},
						]}
					/>

					<img
						src="/assets/helos.svg"
						className="w-full mt-4 lg:w-[355px] lg:float-right lg:mr-[274px] lg:mt-[48px] lg:h-[54px]"
					/>

					<div className="flex flex-col items-center mt-5 lg:flex-row lg:items-start lg:justify-evenly lg:mt-[127px] lg:h-[263px]">
						<div className="flex flex-col items-center w-full xs:w-[100%] md:w-[55%] lg:flex-row lg:items-start lg:-ml-[21px] lg:w-[730px] lg:pl-[46px] lg:justify-between">
							<div>
								<ShinyButton
									text="Customer"
									leftImage="/assets/line.svg"
									rightImage="/assets/emailsvg.svg"
									className="w-full h-[40px] rounded-[10px] bg-[#bebfbe] font-montserrat font-normal text-[14px] mt-[5px] lg:w-[250px] lg:pl-[6.5px] lg:ml-[21px]"
								/>
								<ul className="text-[16px] mt-5 w-full font-medium leading-[28.13px] sm:text-[18px] lg:text-[20px] lg:mt-[90px] lg:w-[230px]">
									<li>Add Customers</li>
									<li>Keep track of every customer</li>
									<li>Edit/Delete any of customer</li>
								</ul>
							</div>
							<div className="hidden lg:block mx-[9px]">
								<img
									src="/assets/Vector656.svg"
									className="mt-[30px] ml-0 border-2 border-gradient-to-r from-[#9e16de] via-[#f5de0a] to-[#24ea28] to-[#d72d22]"
								/>
							</div>
							<MagicCard className="w-4/5 mt-6 bg-white text-center rounded-[26px] shadow-md sm:pt-[50px] lg:w-[225px] lg:mt-[-23px] lg:h-[255px]">
								<img
									src="/assets/image.svg"
									className="mx-auto lg:pt-0 lg:pl-[56px] lg:pr-[67px]"
								/>
								<h1 className="text-[16px] font-bold mt-[4px] leading-[20px] text-center lg:-ml-[11px]">
									Muhammad Arslan
								</h1>
								<p className="text-[12px] p-0 mt-[-12px] font-light mb-0 leading-[12px] text-center lg:-ml-[13px]">
									arslantariqarsal@gmail.com
								</p>
								<p className="text-[12px] font-normal leading-[20px] text-center mt-[18px] flex gap-[10px] justify-center">
									<img src="/assets/address.svg" />
									Ecuador, Giga Mall.
								</p>
								<hr className="mt-[35px]" />
								<p className="text-[12px] font-normal leading-[20px] gap-[10px] text-center mt-[8px] flex justify-center items-stretch">
									<img src="/assets/call.svg" />
									033 6595 2950
								</p>
							</MagicCard>
						</div>
						<FloatRight>
							<MagicCard className="w-4/5 mt-6 flex flex-col bg-white bg-opacity-50 rounded-[28px] shadow-md p-6 xs:w-[100%] md:w-[55%] lg:h-[583px] lg:w-auto lg:pl-[27px] lg:pr-[20px] lg:pt-[50px] lg:gap-[14px] lg:ml-[119px] lg:items-stretch">
								<img src="/assets/image.svg" className="mx-auto h-[132px]" />
								<div>
									<h1 className="font-montserrat text-[16px] font-bold mt-[36px] text-[#212121] leading-[20px] text-left pb-[2px] border-b-[3px] border-gray-400">
										Muhammad Arslan
									</h1>
									<p className="font-montserrat text-[12px] font-normal text-left mb-0 pb-[2px] mt-0 text-[#8d8d8d] border-b-[3px] border-gray-400">
										arslantariqarsal@gmail.com
									</p>
									<p className="pb-[7px] text-[12px] font-normal leading-[3px] text-left border-b-[3px] border-gray-400 ml-0">
										033 6595 2950
									</p>
								</div>
								<div className="mt-[14px]">
									<h1 className="text-[12px] font-normal leading-[20px] pb-[2px] text-[#212121] text-left border-b-[3px] border-gray-400">
										Giga Mall
									</h1>
									<p className="font-montserrat text-[12px] font-normal text-left mb-0 pb-[2px] mt-0 text-[#8d8d8d] border-b-[3px] border-gray-400">
										Address line 2
									</p>
									<p className="text-[12px] font-normal leading-[20px] pb-[2px] text-[#212121] text-left border-b-[3px] border-gray-400">
										Ecuador.
									</p>
								</div>
								<div className="flex justify-end items-center gap-[8px]">
									<p className="font-roboto text-[12px] font-normal leading-[20px] text-center">
										Status:
									</p>
									<p className="font-roboto text-[12px] font-bold leading-[20px] text-center">
										Active
									</p>
									<img src="/assets/downArrow.svg" />
								</div>

								<div className="flex justify-center mt-4 gap-4 lg:justify-start">
									<ShinyButton2
										text="Cancel"
										className="h-[40px] mr-[30px] px-[30px] py-[10px] rounded-[30px] bg-white border border-[#212121] font-montserrat"
									/>

									<ShimmerButton
										className="btnFont w-[116px] h-[40px] px-[30px] py-[10px] rounded-[30px] bg-[#212121] text-white border-none font-montserrat"
										shimmerColor="#24ea28"
										shimmerSize="0.1em"
										shimmerDuration="2s"
									>
										Save
									</ShimmerButton>
								</div>
							</MagicCard>
						</FloatRight>
					</div>
				</section>

				<FloatLeft className="md:flex md:gap-[20px] lg:flex-col lg:w-[56.7%] xl:max-w-[1440px] mx-auto mt-5 lg:mt-[100px] xl:ml-[100px] xl:mt-[100px]">
					{/* <div className="md:flex md:gap-[20px] lg:flex-col lg:w-[56.7%] xl:max-w-[1440px] mx-auto mt-5 lg:mt-[100px] xl:ml-[100px] xl:mt-[100px]"> */}
					<NeonGradientCard>
						<table className="w-full lg:w-[600px] xl:w-[816px] px-[10px] rounded-[20px] bg-white font-montserrat text-xs font-normal leading-5 text-center shadow-[0px_4px_4px_0px_#00000040] ">
							<tr className="flex flex-col lg:table-row">
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<img src="/assets/customerexp1.svg" className="mx-auto" />
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="font-roboto text-base font-bold p-0 leading-5 text-center lg:py-0">
										Zeeshan Aslam
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] ">
									<p className="font-roboto text-xs font-light leading-3 text-center text-[#8d8d8d] lg:py-0">
										zeshanAslam@gmai.com
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="text-xs font-normal leading-5 text-center mt-[18px] lg:mt-0 ml-0 flex mb-0 gap-[10px] justify-center">
										<img src="/assets/address.svg" />
										Ecuador, Giga Mall.
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="text-xs font-normal leading-5 text-center mt-[18px] lg:mt-0 ml-0 flex mb-0 gap-[10px] justify-center">
										<img src="/assets/call.svg" />
										033 6595 2950
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<img
										src="/assets/straightline.svg"
										className="pt-[6px] mx-auto transform lg:transform-none rotate-90 lg:rotate-0"
									/>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<img
										src="/assets/threedots.svg"
										className="pt-[6px] mx-auto transform lg:transform-none rotate-90 lg:rotate-0"
									/>
								</td>
							</tr>
						</table>
					</NeonGradientCard>
					<NeonGradientCard>
						<table className="w-full lg:w-[600px] xl:w-[816px] px-[10px] rounded-[20px] bg-white font-montserrat text-xs font-normal leading-5 text-center shadow-[0px_4px_4px_0px_#00000040] ">
							<tr className="flex flex-col lg:table-row">
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<img src="/assets/customerexp1.svg" className="mx-auto" />
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="font-roboto text-base font-bold mb-0 leading-5 text-center lg:my-0">
										Zeeshan Aslam
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="font-roboto text-xs font-light leading-3 text-center text-[#8d8d8d] lg:my-0">
										zeshanAslam@gmai.com
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="text-xs font-normal leading-5 text-center mt-[18px] lg:mt-0 ml-0 flex mb-0 gap-[10px] justify-center">
										<img src="/assets/address.svg" />
										Ecuador, Giga Mall.
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<p className="text-xs font-normal leading-5 text-center mt-[18px] lg:mt-0 ml-0 flex mb-0 gap-[10px] justify-center">
										<img src="/assets/call.svg" />
										033 6595 2950
									</p>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<img
										src="/assets/straightline.svg"
										className="pt-[6px] mx-auto transform lg:transform-none rotate-90 lg:rotate-0"
									/>
								</td>
								<td className="block w-full lg:table-cell lg:w-auto text-center py-[10px] lg:py-0">
									<img
										src="/assets/threedots.svg"
										className="pt-[6px] mx-auto transform lg:transform-none rotate-90 lg:rotate-0"
									/>
								</td>
							</tr>
						</table>
					</NeonGradientCard>
				</FloatLeft>
			</div>
		</>
	)
}

import React from "react"
import TextReveal from "./magicui/text-reveal"
import EasyPaymentBg from "./easyPaymentBg"
import { MagicCard, MagicContainer } from "./magicui/magic-card"
import NeonGradientCard from "./magicui/gradient-border"
import FloatRight from "./magicui/floadRight"
import FloatLeft from "./magicui/floatLeft"

export default function Easypayments() {
	return (
		<>
			<div className="relative bg-cover bg-no-repeat bg-top w-full h-full">
				<EasyPaymentBg className="absolute inset-0 -z-10" />
				<div className="relative z-10">
					<div className="max-w-[1388px] mx-auto p-5">
						<TextReveal
							textItems={[
								{
									text: "Easy",
									className:
										"text-[80px] font-black leading-[90.64px] text-left mt-[91px] mb-2.5 h-[91px] lg:text-[103px] lg:ml-14",
								},
								{
									text: "PAYMENTS",
									className:
										"text-[50px] ml-7 font-extralight leading-[84.48px] text-left lg:text-[96px] lg:ml-[110px] mt-0 mb-[7px]",
								},
							]}
						/>

						<div className="flex flex-col lg:flex-row justify-between md:items-center">
							<FloatLeft className=" text-xl w-auto lg:ml-[54px] lg:text-2xl mt-[88px] font-medium leading-[28.13px] lg:w-[362px] font-roboto text-left">
								<li>Add multiple payment methods</li>
							</FloatLeft>
							<FloatRight className="mt-8 lg:mt-0 lg:float-right lg:mr-[157px]">
								<MagicContainer className="relative">
									<MagicCard className="z-10 relative w-full max-w-[423px] h-[240px] lg:ml-[45px] md:ml-[96px]  md:h-[206px] lg:h-[206px] rounded-[26px] shadow-md mx-auto md:mx-0">
										<table className="pt-6 pl-3 w-full text-[12px]">
											<tbody className="font-montserrat md:text-sm leading-[17.07px] text-left">
												{[
													["Brand:", "Etravelo"],
													["Type:", "Bank Payment"],
													["Payment Method Name:", "HSBC"],
													["Bank Name:", "HSBC Etravelo Pvt Ltd."],
													["Account No:", "2364283472"],
													["Sort Code:", "97 532"],
												].map(([key, value], index) => (
													<tr key={index}>
														<td className="pt-[6.1px] pl-5">{key}</td>
														<td className="pt-[6.1px] pl-5">
															<b className="font-bold">{value}</b>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</MagicCard>
									<MagicCard className="relative z-0 w-full max-w-[423px] h-[240px] ml-0 md:ml-[96px] md:h-[206px] lg:ml-0 lg:h-[206px] bg-[#c00f0f] rounded-[26px] -mt-[109px] mb-[60px] shadow-md mx-auto md:mx-0">
										<table className="pt-[17px] pl-1.5 w-full text-[12px]">
											<tbody className="font-montserrat md:text-sm leading-[17.07px] text-left">
												{[
													["Brand:", "Etravelo"],
													["Type:", "Bank Payment"],
													["Payment Method Name:", "HSBC"],
													["Bank Name:", "HSBC Etravelo Pvt Ltd."],
													["Account No:", "2364283472"],
													["Sort Code:", "97 532"],
												].map(([key, value], index) => (
													<tr key={index}>
														<td className="pt-[6.7px] pl-[21px]">{key}</td>
														<td className="pt-[6.7px] pl-[21px]">
															<b className="font-bold">{value}</b>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</MagicCard>
								</MagicContainer>
							</FloatRight>
						</div>

						{/*



				 */}

						<div className="mt-1 ml-4 md:ml-[40px] lg:ml-[96px] xl:ml-[161px]">
							<div className="lg:w-[1100px]">
								<NeonGradientCard>
									<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1056px] p-[3px] px-4 md:pl-6 rounded-[18px] bg-white font-montserrat text-xs font-normal leading-5 text-center shadow-md mb-2.5 h-auto md:h-[55px]">
										<b className="font-roboto text-base font-bold">#1</b>
										<span className="font-bold">Syed Zulqarnain</span>
										<p className="m-0">HSpC</p>
										<p className="m-0">364RGT093</p>
										<span className="font-bold">$ 900</span>
										<p className="text-red-500">Pending</p>
										<div className="flex justify-center items-center mt-2 md:mt-0 mr-0 md:mr-3">
											<button className="w-auto h-auto px-[15px] py-[5px] rounded-[45px] bg-[#043461] text-white font-montserrat text-xs border-none text-center align-middle mr-2">
												Confirm
											</button>
											<img
												src="/assets/straightline.svg"
												className="h-5 w-5 inline-block"
											/>
											<img
												src="/assets/tracklogo.svg"
												className="h-5 w-5 inline-block ml-2"
											/>
										</div>
									</div>
								</NeonGradientCard>
								<NeonGradientCard>
									<div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1056px] p-[3px] px-4 md:pl-6 rounded-[18px] bg-white font-montserrat text-xs font-normal leading-5 text-center shadow-md mb-2.5 h-auto md:h-[55px]">
										<b className="font-roboto text-base font-bold">#2</b>
										<span className="font-bold">Syed Zulqarnain</span>
										<p className="m-0">HSpC</p>
										<p className="m-0">364RGT093</p>
										<span className="font-bold">$ 900</span>
										<p className="text-[#24ea28]">Pending</p>
										<div className="flex justify-center items-center mt-2 md:mt-0 mr-0 md:mr-3">
											<button className="w-auto h-auto px-[15px] py-[5px] rounded-[45px] bg-[#043461] text-white font-montserrat text-xs border-none text-center align-middle mr-2">
												Confirm
											</button>
											<img
												src="/assets/straightline.svg"
												className="h-5 w-5 inline-block"
											/>
											<img
												src="/assets/tracklogo.svg"
												className="h-5 w-5 inline-block ml-2"
											/>
										</div>
									</div>
								</NeonGradientCard>
							</div>
						</div>
						<FloatLeft className="mt-8 ml-4 md:ml-[55px] text-lg md:text-xl lg:text-2xl font-medium leading-[29.13px] font-roboto text-left">
							<li>All at once payment requests</li>
						</FloatLeft>
					</div>
				</div>
			</div>
		</>
	)
}

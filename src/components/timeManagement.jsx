import React from "react"

export default function TimeManagement() {
	return (
		<>
			<div>
				<div className="w-[380px] h-[91px] text-[103px] font-black leading-[90.64px] text-left mt-[80px] mb-[5px] ml-[76px] mr-0">
					Team &
				</div>
				<div className="text-[96px] font-extralight leading-[84.48px] text-left ml-[129px] mt-[8px]">
					HR MANAGEMENT
				</div>
			</div>
			{/* <div className="timecardflex">
				<ul className="uls inline">
					<li>Team Performance</li>
					<li>Attendance Record</li>
					<li>Meeting Invites and Management</li>
				</ul>

				<div className="timeManageCard">
					<img src="/assets/timeCard1.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<div>
						<span className="cardbackcircle1 cardbackcircleText">84%</span>
						<span className="cardbackcircle2 cardbackcircleText">85%</span>
					</div>
					<div>
						<span>Month</span>
						<span>Year</span>
					</div>
					<p>
						<button className="cardbutton">Profile Details</button>
					</p>
				</div>

				<div className="timeManageCard">
					<img src="/assets/timeCard2.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<div>
						<span className="cardbackcircle1 cardbackcircleText">84%</span>
						<span className="cardbackcircle2 cardbackcircleText">85%</span>
					</div>
					<div>
						<span>Month</span>
						<span>Year</span>
					</div>
					<p>
						<button className="cardbutton">Profile Details</button>
					</p>
				</div>

				<div className="timeManageCard">
					<img src="/assets/timeCard3.svg" className="timeCardImage" />
					<h1 className="cardHeader">John Doe</h1>
					<p className="cardParagraph">CEO & Founder, Example</p>
					<div>
						<span className="cardbackcircle1 cardbackcircleText">84%</span>
						<span className="cardbackcircle2 cardbackcircleText">85%</span>
					</div>
					<div>
						<span>Month</span>
						<span>Year</span>
					</div>
					<p>
						<button className="cardbutton">Profile Details</button>
					</p>
				</div>
			</div> */}
			<div className="flex justify-between items-start mt-[73px]">
				<ul className="list-disc text-left mt-[42px] ml-[75px]">
					<li className="text-[24px] w-[430px] font-semibold leading-[28.13px]">
						Team performance
					</li>
					<li className="text-[24px] w-[430px] font-semibold leading-[28.13px]">
						Attendance record
					</li>
					<li className="text-[24px] w-[430px] font-semibold leading-[28.13px]">
						Meeting invites and management
					</li>
				</ul>

				<div className="flex mr-[180px]">
					<div className="flex space-x-0 gap-5">
						<div className="shadowClass bg-white rounded-lg p-0 text-center w-[184px] h-[260px]">
							<img
								src="/assets/timeCard1.svg"
								className="rounded-full mx-auto w-[60px] h-[60px] mt-[17px]"
							/>
							<h1 className="text-[12px] font-normal leading-[20px] m-0 montseratFont">
								ELVIS MOREN
							</h1>

							<p className="firstParaTeamManagement text-gray-600 m-0 mt-[0px]">
								Ux Designer
							</p>
							<div className="timeinnercardflex mt-[15px]">
								<span className="cardbackcircle1 cardbackcircleText">
									<b>84%</b>
								</span>
								<span className="cardbackcircle2 cardbackcircleText">
									<b>85%</b>
								</span>
							</div>
							<div className="timecardflex mt-[8px]">
								<span className="text-[11px]">Month</span>
								<span className="text-[11px]">Year</span>
							</div>

							<button className="cardbutton mt-[16px] w-[140px] h-[32px] pt-[1px] pl-[7.4px] text-[12px]">
								Profile Details
							</button>
						</div>

						<div className="shadowClass bg-white rounded-lg p-0 text-center w-[184px] h-[260px]">
							<img
								src="/assets/timeCard2.svg"
								className="rounded-full mx-auto w-[60px] h-[60px] mt-[17px]"
							/>
							<h1 className="text-[12px] font-normal leading-[20px] m-0 montseratFont">
								OSCAR CHU
							</h1>

							<p className="firstParaTeamManagement text-gray-600 m-0 mt-[0px]">
								Ux Designer
							</p>
							<div className="timeinnercardflex mt-[15px]">
								<span className="cardbackcircle1 cardbackcircleText">85%</span>
								<span className="cardbackcircle2 cardbackcircleText">87%</span>
							</div>
							<div className="timecardflex mt-[8px]">
								<span className="text-[11px]">Month</span>
								<span className="text-[11px]">Year</span>
							</div>

							<button className="cardbutton mt-[16px] w-[140px] h-[32px] pt-[1px] pl-[7.4px] text-[12px]">
								Profile Details
							</button>
						</div>

						<div className="shadowClass bg-white rounded-lg p-0 text-center w-[184px] h-[260px]">
							<img
								src="/assets/timeCard3.svg"
								className="rounded-full mx-auto w-[60px] h-[60px] mt-[17px]"
							/>
							<h1 className="text-[12px] font-normal leading-[20px] m-0 montseratFont">
								LEVIA WINTERBOTTOM
							</h1>

							<p className="firstParaTeamManagement text-gray-600 m-0 mt-[0px]">
								Graphic Designer
							</p>
							<div className="timeinnercardflex mt-[15px]">
								<span className="cardbackcircle1 cardbackcircleText">74%</span>
								<span className="cardbackcircle2 cardbackcircleText">95%</span>
							</div>
							<div className="timecardflex mt-[8px]">
								<span className="text-[11px]">Month</span>
								<span className="text-[11px]">Year</span>
							</div>

							<button className="cardbutton mt-[16px] w-[140px] h-[32px] pt-[1px] pl-[7.4px] text-[12px]">
								Profile Details
							</button>
						</div>
					</div>
				</div>
			</div>
			{/*  */}

			<div className="shadowClass bg-white rounded-[2rem] mt-[55px] ml-[181px] w-[1075px] h-[455px]">
				<h2 className="pt-[28px] pl-[30px] text-24px font-bold leading-20px montseratFont tracking-[-1px]">
					Attendenct List
				</h2>
				{/* <div className="overflow-x-auto">
					<div className=" grid grid-cols-7 gap-4 font-semibold text-gray-600 px-4 py-2 border-b-2 border-gray-500 text-center">
						<div className="montseratFont text-[16px] font-semibold leading-[20px]">
							Employ Number
						</div>
						<div className="montseratFont text-[16px] font-semibold  leading-[20px]">
							Employ Name
						</div>
						<div className="montseratFont text-[16px] font-semibold  leading-[20px]">
							Department
						</div>
						<div className="montseratFont text-[16px] font-semibold  leading-[20px]">
							Date
						</div>
						<div className="montseratFont text-[16px] font-semibold  leading-[20px]">
							Login Time
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px]">
							Logout Time
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px]">
							Details
						</div>
					</div>

					<div className="divide-y divide-gray-300 text-center">
						<div className="mb-[10px] border-b-2 border-gray-500 grid grid-cols-7 gap-4 items-center px-4 py-2">
							<div className="font-bold">5570</div>
							<div className="flex items-center space-x-2">
								<img
									src="./assets/timeCard1.svg"
									alt="Employee"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[13px] m-0">Elvis Moren</p>
									<p className="text-gray-500 text-[13px] m-0">UX Designer</p>
								</div>
							</div>
							<div>
								<p className="m-0">Product Deve</p>
								<p className="text-gray-500  m-0">Design Team</p>
							</div>
							<div>
								<p className="font-semibold  m-0">12-23-21</p>
								<p className="text-gray-500  m-0">Thursday</p>
							</div>
							<div className="font-semibold ">09:30AM</div>
							<div className="font-semibold text-green-500">ON DUTY</div>
							<div>
								<img
									src="/assets/tracklogo.svg"
									alt="Track"
									className="w-6 h-6"
								/>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4 items-center px-4 py-2">
							<div className="font-bold">6750</div>
							<div className="flex items-center space-x-2">
								<img
									src="./assets/timeCard2.svg"
									alt="Employee"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[13px] m-0">Oscar Chu</p>
									<p className="text-gray-500 text-[13px] m-0">UX Designer</p>
								</div>
							</div>
							<div>
								<p className="m-0">Product Deve</p>
								<p className="text-gray-500  m-0">Design Team</p>
							</div>
							<div>
								<p className="font-semibold  m-0">12-23-21</p>
								<p className="text-gray-500  m-0">Thursday</p>
							</div>
							<div className="font-semibold">09:30AM</div>
							<div className="font-semibold text-green-500">ON DUTY</div>
							<div>
								<img
									src="/assets/tracklogo.svg"
									alt="Track"
									className="w-6 h-6"
								/>
							</div>
						</div>

						<div className="grid grid-cols-7 gap-4 items-center px-4 py-2">
							<div className="font-bold">6750</div>
							<div className="flex items-center space-x-2">
								<img
									src="./assets/timeCard3.svg"
									alt="Employee"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[11px] m-0">
										Lauren Garsier
									</p>
									<p className="text-gray-500 text-[11px] m-0">
										Senior Designer
									</p>
								</div>
							</div>
							<div>
								<p className=" m-0">Product Deve</p>
								<p className="text-gray-500 m-0">Design Team</p>
							</div>
							<div>
								<p className="font-semibold m-0">12-23-21</p>
								<p className="text-gray-500 m-0">Thursday</p>
							</div>
							<div className="font-semibold">09:30AM</div>
							<div className="font-semibold text-green-500">ON DUTY</div>
							<div>
								<img
									src="/assets/tracklogo.svg"
									alt="Track"
									className="w-6 h-6"
								/>
							</div>
						</div>
					</div>
				</div> */}

				<div className="overflow-x-auto">
					<div className="flex font-semibold text-gray-600 px-4 py-2 border-b-2 border-gray-500 text-center">
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Employ Number
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Employee Name
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Department
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Date
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Login Time
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Logout Time
						</div>
						<div className="montseratFont text-[16px] font-semibold leading-[20px] flex-1">
							Details
						</div>
					</div>
					<hr />
					<div className="divide-y divide-gray-300 text-center">
						<div className="fontfortimemanagetext grid grid-cols-7 gap-4 items-center px-4 py-2">
							<div className="font-bold">6750</div>
							<div className="flex items-center space-x-2 flex-2 w-[160px]">
								<img
									src="./assets/timeCard2.svg"
									alt="Employee"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[16px] m-0">Oscar Chu</p>
									<p className="text-gray-500 text-[15px] m-0">UX Designer</p>
								</div>
							</div>
							<div>
								<p className="m-0">Product Deve</p>
								<p className="text-gray-500  m-0">Design Team</p>
							</div>
							<div>
								<p className="font-semibold  m-0">12-23-21</p>
								<p className="text-gray-500  m-0">Thursday</p>
							</div>
							<div className="font-semibold">09:30AM</div>
							<div className="font-semibold text-green-500">ON DUTY</div>
							<div>
								<img
									src="/assets/tracklogo.svg"
									alt="Track"
									className="w-6 h-6"
								/>
							</div>
						</div>
						<hr />
						<div className="fontfortimemanagetext grid grid-cols-7 gap-4 items-center px-4 py-2 border-b-4 border-gray-700">
							<div className="font-bold">6750</div>
							<div className="flex items-center space-x-2 flex-2  w-[160px]">
								<img
									src="./assets/timeCard2.svg"
									alt="Employee"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[16px] m-0">Oscar Chu</p>
									<p className="text-gray-500 text-[15px] m-0">UX Designer</p>
								</div>
							</div>
							<div>
								<p className="m-0">Product Deve</p>
								<p className="text-gray-500  m-0">Design Team</p>
							</div>
							<div>
								<p className="font-semibold  m-0">12-23-21</p>
								<p className="text-gray-500  m-0">Thursday</p>
							</div>
							<div className="font-semibold">09:30AM</div>
							<div className="font-semibold text-green-500">ON DUTY</div>
							<div>
								<img
									src="/assets/tracklogo.svg"
									alt="Track"
									className="w-6 h-6"
								/>
							</div>
						</div>
						<hr />
						<div className="fontfortimemanagetext grid grid-cols-7 gap-4 items-center px-4 py-2 border-b-4 border-gray-700">
							<div className="font-bold">6750</div>
							<div className="flex items-center space-x-2 flex-3  w-[160px]">
								<img
									src="./assets/timeCard3.svg"
									alt="Employee"
									className="w-10 h-10 rounded-full"
								/>
								<div>
									<p className="font-semibold text-[16px] m-0">
										Lauren Garsier
									</p>
									<p className="text-gray-500 text-[14px] m-0">
										Senior Designer
									</p>
								</div>
							</div>
							<div>
								<p className=" m-0">Product Deve</p>
								<p className="text-gray-500 m-0">Design Team</p>
							</div>
							<div>
								<p className="font-semibold m-0">12-23-21</p>
								<p className="text-gray-500 m-0">Thursday</p>
							</div>
							<div className="font-semibold">09:30AM</div>
							<div className="font-semibold text-green-500">ON DUTY</div>
							<div>
								<img
									src="/assets/tracklogo.svg"
									alt="Track"
									className="w-6 h-6"
								/>
							</div>
						</div>
						<hr />
					</div>
				</div>
			</div>
		</>
	)
}

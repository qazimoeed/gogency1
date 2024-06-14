import React from "react"

export default function Track() {
	return (
		<>
			<div>
				<h1 className="firstheadtrack">Track your</h1>
				<h1 className="secheadtrack">INQUIRIES</h1>

				<ul className="ulsTrack">
					<li>Add Customers</li>
					<li>Keep track of every customer</li>
					<li>Edit/Delete any of customer</li>
				</ul>
			</div>
			<div className="trackBoundary">
				<div className="innertrack1">
					<div>
						<h3>
							<b>#3621245</b>
						</h3>
						<p>
							<center>2m ago</center>
						</p>
					</div>
					<div>
						<h3>
							<b>Arsalan Tariq</b>
						</h3>
						<p>arslantariqarsal@gmail.com</p>
					</div>
					<div>
						<h3>
							<b>John Doe</b>
						</h3>
						<p>johndoe@gmail.com</p>
					</div>
					<div>
						<h3>
							<b>LON</b>
						</h3>
						<p>London</p>
					</div>
					<div>
						<h3>
							<b>ACC</b>
						</h3>
						<p>accra</p>
					</div>
					<div>
						<h3>
							<b>13-10-2023</b>
						</h3>
						<p>
							<b>13-10-2023</b>
						</p>
					</div>
					<div>
						<h3>
							<b>1 Passenger</b>
						</h3>
						<p>$1500</p>
					</div>
					<div>
						<img src="/assets/tracklogo.svg" className="trackimagecard" />
					</div>
				</div>
				<div className="innertrack1">
					<div>
						<h3>
							<b>#3621245</b>
						</h3>
						<p>
							<center>2m ago</center>
						</p>
					</div>
					<div>
						<h3>
							<b>Arsalan Tariq</b>
						</h3>
						<p>arslantariqarsal@gmail.com</p>
					</div>
					<div>
						<h3>
							<b>John Doe</b>
						</h3>
						<p>johndoe@gmail.com</p>
					</div>
					<div>
						<h3>
							<b>LON</b>
						</h3>
						<p>London</p>
					</div>
					<div>
						<h3>
							<b>ACC</b>
						</h3>
						<p>accra</p>
					</div>
					<div>
						<h3>
							<b>13-10-2023</b>
						</h3>
						<h3>
							<b>13-10-2023</b>
						</h3>
					</div>
					<div>
						<h3>
							<b>1 Passenger</b>
						</h3>
						<p>$1500</p>
					</div>
					<div>
						<img src="/assets/tracklogo.svg" className="trackimagecard" />
					</div>
				</div>
				<div className="innertrack1">
					<div>
						<h3>
							<b>#3621245</b>
						</h3>
						<p>
							<center>2m ago</center>
						</p>
					</div>
					<div>
						<h3>
							<b>Arsalan Tariq</b>
						</h3>
						<p>arslantariqarsal@gmail.com</p>
					</div>
					<div>
						<h3>
							<b>John Doe</b>
						</h3>
						<p>johndoe@gmail.com</p>
					</div>
					<div>
						<h3>
							<b>LON</b>
						</h3>
						<p>London</p>
					</div>
					<div>
						<h3>
							<b>ACC</b>
						</h3>
						<p>accra</p>
					</div>
					<div>
						<h3>
							<b>13-10-2023</b>
						</h3>
						<h3>
							<b>13-10-2023</b>
						</h3>
					</div>
					<div>
						<h3>
							<b>1 Passenger</b>
						</h3>
						<p>$1500</p>
					</div>
					<div>
						<img src="/assets/tracklogo.svg" className="trackimagecard" />
					</div>
				</div>
			</div>

			<div className="ulHeader">
				<li>Details for each inquiry</li>
			</div>

			<div className="detailsInquiryBoundary">
				<div className="detailsInquiry">
					<div className="firstTrackercard">
						<div class="trackerFlex">
							<img src="/assets/trackerImage.svg" className="trackerImage" />

							<div className="trackercardInfo trackercardinfotext">
								<h3>John Doe</h3>
								<p>john@example.com</p>
								<p>+44 7700 1237798</p>
								<p>483 green lanes N13 4BS, UK.</p>
								<div>
									<img src="/assets/call.svg" />
									<span className="imageinp">Nav Ahmed</span>
								</div>
							</div>

							<div>
								<img src="/assets/trackeredit_icon.svg" />
							</div>
						</div>
						<div className="lowertrackerCard">
							<div className="lowertrackcardbuttons">
								<p>Active Bookings</p>

								<b>3</b>
							</div>
							<div className="rightAlign lowertrackcardbuttons">
								<p>Total Bookings</p>
								<b>28</b>
							</div>
						</div>
					</div>
					{/* 


 */}
					<div className="firstTrackercard">
						<div className="secondCardTop">
							<div className="secondcardtopinfo">
								<img src="/assets/airline_logo.svg" />
								<p>Emirates Airline</p>
								<p>
									<b>Economy Class</b>
								</p>
							</div>
							<div>
								<img src="/assets/trackeredit_icon.svg" />
							</div>
						</div>

						<div className="secondCardtrackFlex">
							<div>
								<p className="secondTrackText">From</p>
								<p className="secondTrackCardRed">LON</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo">
									<img src="/assets/checkmark.svg" />
									<p className="trackercardinfotext"> Flexible</p>
								</div>
							</div>
							<div className="rightAlign">
								<p className="secondTrackText">To</p>
								<p className="rightsecondTrackCardRed ">NYC</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo rightAlignFlex">
									<img src="/assets/uncheckmark.svg" />
									<p className="trackercardinfotext"> Flexible</p>
								</div>
							</div>
						</div>

						<div className="secondCardTrackerLowerFlex">
							<div className="lowerlefttrackerCard">
								<img
									src="/assets/VectorCurency.svg"
									className="lowercardTrackerImage"
								/>
								<p> $ 0</p>
							</div>
							<div className="secondCardSideImage">
								<div className="secondCardImageText">
									<img src="/assets/VectorUser.svg" alt="Image description" />
									<span>3</span>
								</div>
								<div className="secondCardImageText">
									<img src="/assets/VectorChilds.svg" alt="Image description" />
									<span>2</span>
								</div>
								<div className="secondCardImageText">
									<img
										src="/assets/Vectornewborn.svg"
										alt="Image description"
									/>
									<span>0</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<h1 className="ulHeader2">
					<li>Create a Multiple suggestions</li>
				</h1>

				<section className="suggestionCoverBoundary">
					<div className="outerSuggesionBoundary">
						<div className="image-text">
							<div className="suggestions">
								<img src="/assets/RadioButton.svg" alt="Image description" />
								<span> Suggestion #1 </span>
								<img src="/assets/straightline.svg" alt="Image description" />
							</div>
							<div className="suggestions">
								<img
									src="/assets/EmptyRadioButton.svg"
									alt="Image description"
								/>
								<span> Suggestion #2 </span>
								<img src="/assets/straightline.svg" alt="Image description" />
							</div>
							<div className="suggestions">
								<img
									src="/assets/EmptyRadioButton.svg"
									alt="Image description"
								/>
								<span> Suggestion #3</span>
								<img src="/assets/straightline.svg" alt="Image description" />
							</div>
							<div className="suggestions">
								<img
									src="/assets/EmptyRadioButton.svg"
									alt="Image description"
								/>
								<span> Suggestion #4</span>
								<img src="/assets/straightline.svg" alt="Image description" />
							</div>
						</div>
						<div>
							<img
								src="/assets/trackeredit_icon.svg"
								className="suggestionEditIcon"
							/>
						</div>
					</div>

					<section className="belowSuggestionBoundary">
						<div className="suggestionCard1">
							<div className="suggestionCard1TopFlex">
								<div>
									<p>Economy</p>
									<img src="/assets/straightline.svg" alt="Image separator" />
									<p>4 hour 55 minutes</p>
									<img src="/assets/straightline.svg" alt="Image separator" />
									<p>Return</p>
								</div>

								<img src="/assets/Vector.svg" />
							</div>
							<div className="suggestionCard1Mid">
								<div className="suggestioncard1leftalign">
									<p className="secondTrackText">From</p>
									<p className="secondTrackCardRed">LON</p>
									<p className="secondTracktextTime">13-07-2023 | 02:20</p>
									<div className="innercardinfolefttop">
										<img
											src="/assets/trackeredit_icon.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>

								<div className="suggestionbottoninfo ">
									<p className="suggestiontextTime">1 hour 10 minutes</p>
									<img
										src="/assets/airline_logo.svg"
										className="lowercardTrackerImage"
									/>
									<p className="suggestiontextTime">EK - 506</p>
								</div>

								<div className="rightAlign">
									<p className="firstTrackTextrighttop">To</p>
									<p className="secondTrackCardRed ">DXB</p>
									<p className="secondTracktextTime2">13-07-2023 |</p>
									<p className="secondTracktextTime2"> 02:20</p>
									<div className="innertrackercardinfo2 rightAlignFlex">
										<img
											src="/assets/nonFlexible.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>
							</div>

							<center className="suggestionCenterPara">
								1 hour 20 minutes in Accra
							</center>

							<div className="suggestionCard1Mid">
								<div className="suggestioncard1leftalign">
									<p className="secondTrackText">From</p>
									<p className="secondTrackCardRed">DXB</p>
									<p className="secondTracktextTime">13-07-2023 | 02:20</p>
									<div className="innertrackercardinfo3">
										<img
											src="/assets/trackeredit_icon.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>

								<div className="suggestionbottoninfo ">
									<p className="suggestiontextTime">1 hour 10 minutes</p>
									<img
										src="/assets/airline_logo.svg"
										className="lowercardTrackerImage"
									/>
									<p className="suggestiontextTime">EK - 506</p>
								</div>

								<div className="firstcardbottomright">
									<p className="secondTrackText">To</p>
									<p className="secondTrackCardRed ">ACC</p>
									<p className="secondTracktextTime2">13-07-2023|</p>
									<p className="secondTracktextTime2">02:20</p>
									<div className="innertrackercardinfo2 rightAlignFlex">
										<img
											src="/assets/nonFlexible.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>
							</div>
							<div>
								<div className="suggestionBottom">
									<img src="/assets/suggectionBreifcase.svg" />
									<p>40 kg</p>
									<img src="/assets/suggectionBag.svg" />
									<p>30 kg</p>
								</div>
							</div>
						</div>

						{/*  
						
						
						
						
						
						
						
						*/}
						<div className="suggestionCard1">
							<div className="suggestionCard1TopFlex suggestionCard2TopFlex">
								<div>
									<p>Economy</p>
									<img src="/assets/straightline.svg" alt="Image separator" />
									<p>4 hour 55 minutes</p>
								</div>

								<img src="/assets/returnFlight.svg" />
							</div>
							<div className="suggestionCard1Mid">
								<div>
									<p className="secondTrackText">From</p>
									<p className="secondTrackCardRed">ACC</p>
									<p className="secondTracktextTime">13-07-2023 | 02:20</p>
									<div className="innertrackercardinfo3">
										<img
											src="/assets/trackeredit_icon.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>

								<div className="suggestionbottoninfo ">
									<p className="suggestiontextTime">1 hour 10 minutes</p>
									<img
										src="/assets/airline_logo.svg"
										className="lowercardTrackerImage"
									/>
									<p className="suggestiontextTime">EK - 506</p>
								</div>

								<div className="rightAlign secondCardRightSide">
									<p className="secondTrackTextRightSide1">To</p>
									<p className="secondTrackCardRed ">DXB</p>
									<p className="secondTracktextTime3">13-07-2023 |</p>
									<p className="secondTracktextTime3"> 02:20</p>
									<div className="innertrackercardinfo4 rightAlignFlex">
										<img
											src="/assets/nonFlexible.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>
							</div>

							<center className="suggestionCenterPara2">
								1 hour 20 minutes in Accra
							</center>

							<div className="suggestionCard1Mid">
								<div>
									<p className="secondCardTrackTextLeft">From</p>
									<p className="secondTrackCardRed">DXB</p>
									<p className="secondTracktextTime">13-07-2023 |</p>
									<p className="secondTracktextTime"> 02:20</p>
									<div className="innertrackercardinfo3">
										<img
											src="/assets/trackeredit_icon.svg"
											className="innertrackerimage"
										/>
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>

								<div className="suggestionbottoninfo ">
									<p className="suggestiontextTime">1 hour 10 minutes</p>
									<img
										src="/assets/airline_logo.svg"
										className="lowercardTrackerImage"
									/>
									<p className="suggestiontextTime">EK - 506</p>
								</div>

								<div className="rightAlign secondCardRightSide">
									<p className="secondTrackTextRightSide2">To</p>
									<p className="secondTrackCardRed ">LON</p>
									<p className="secondTrackTextTimeBottomRight">
										13-07-2023 | 02:20
									</p>
									<div className="innertrackercardinfo rightAlignFlex">
										<img src="/assets/nonFlexible.svg" />
										<p className="trackercardinfotext"> Flexible</p>
									</div>
								</div>
							</div>
							<div>
								<div className="suggestionBottomFlex suggestionBottom">
									<div className=" innerbottomflex ">
										<img src="/assets/suggectionBreifcase.svg" />
										<p>40 kg</p>
										<img src="/assets/suggectionBag.svg" />
										<p>30 kg</p>
									</div>
									<div>
										<p className="suggestionBottomAmount">£800</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
		</>
	)
}

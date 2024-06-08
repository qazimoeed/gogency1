import React from "react"

export default function Track() {
	return (
		<>
			<div>
				<h1 className="firstheadtrack">Track your</h1>
				<h1 className="secheadtrack">INQUIRIES</h1>

				<ul className="uls">
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
						<p>2m ago</p>
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
						<p>2m ago</p>
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
						<p>2m ago</p>
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
			</div>

			<h1 className="ulHeader">
				<li>Details for each inquiry</li>
			</h1>
			<div className="detailsInquiryBoundary">
				<div className="detailsInquiry">
					<div className="firstTrackercard">
						<div class="trackerFlex">
							<img src="/assets/trackerImage.svg" className="trackerImage" />

							<div className="trackercardInfo trackercardinfotext">
								<h3>
									<b>John Doe</b>
								</h3>
								<p>john@example.com</p>
								<p>+44 7700 1237798</p>
								<p>483 green lanes</p>
								<p>N13 4BS, UK.</p>
								<div className="innertrackercardinfo">
									<img src="/assets/call.svg" />
									<p>Nav Ahmed</p>
								</div>
							</div>
							<div>
								<img src="/assets/trackeredit_icon.svg" />
							</div>
						</div>
						<div className="lowertrackerCard">
							<div>
								<p>Active Booking</p>
								<p>
									<b>3</b>
								</p>
							</div>
							<div className="rightAlign">
								<p>Total Booking</p>
								<p>
									<b>3</b>
								</p>
							</div>
						</div>
					</div>

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
									<img src="/assets/trackeredit_icon.svg" />
									<p className="trackercardinfotext"> Flexible</p>
								</div>
							</div>
							<div className="rightAlign">
								<p className="secondTrackText">To</p>
								<p className="secondTrackCardRed ">NYC</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo rightAlignFlex">
									<img src="/assets/trackeredit_icon.svg" />
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
									<span>2</span>
								</div>
								<div className="secondCardImageText">
									<img src="/assets/VectorChilds.svg" alt="Image description" />
									<span>3</span>
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

				<h1 className="ulHeader">
					<li>Create a Multiple suggestions</li>
				</h1>

				<div className="outerSuggesionBoundary">
					<div className="image-text">
						<div className="suggestions">
							<img src="/assets/RadioButton.svg" alt="Image description" />
							<span> Suggestion # 1 </span>
						</div>
						<div className="suggestions">
							<img src="/assets/RadioButton.svg" alt="Image description" />
							<span> Suggestion # 2 </span>
						</div>
						<div className="suggestions">
							<img src="/assets/RadioButton.svg" alt="Image description" />
							<span> Suggestion # 3 </span>
						</div>
						<div className="suggestions">
							<img src="/assets/RadioButton.svg" alt="Image description" />
							<span> Suggestion # 4 </span>
						</div>
						<div className="suggestions">
							<img src="/assets/RadioButton.svg" alt="Image description" />
							<span> Suggestion # 5 </span>
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
								<p>4 hour 55 minutes</p>
								<p>Return</p>
							</div>

							<img src="/assets/Vector.svg" />
						</div>
						<div className="suggestionCard1Mid">
							<div>
								<p className="secondTrackText">From</p>
								<p className="secondTrackCardRed">LON</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo">
									<img src="/assets/trackeredit_icon.svg" />
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
								<p className="secondTrackText">To</p>
								<p className="secondTrackCardRed ">NYC</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo rightAlignFlex">
									<img src="/assets/nonFlexible.svg" />
									<p className="trackercardinfotext"> Flexible</p>
								</div>
							</div>
						</div>

						<center className="suggestionCenterPara">
							1 hour 20 minutes in Accra
						</center>

						<div className="suggestionCard1Mid">
							<div>
								<p className="secondTrackText">From</p>
								<p className="secondTrackCardRed">LON</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo">
									<img src="/assets/trackeredit_icon.svg" />
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
								<p className="secondTrackText">To</p>
								<p className="secondTrackCardRed ">NYC</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo rightAlignFlex">
									<img src="/assets/nonFlexible.svg" />
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

					<div className="suggestionCard1">
						<div className="suggestionCard1TopFlex suggestionCard2TopFlex">
							<div>
								<p>Economy</p>
								<p>4 hour 55 minutes</p>
								<p>Return</p>
							</div>

							<img src="/assets/returnFlight.svg" />
						</div>
						<div className="suggestionCard1Mid">
							<div>
								<p className="secondTrackText">From</p>
								<p className="secondTrackCardRed">LON</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo">
									<img src="/assets/trackeredit_icon.svg" />
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
								<p className="secondTrackText">To</p>
								<p className="secondTrackCardRed ">NYC</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo rightAlignFlex">
									<img src="/assets/nonFlexible.svg" />
									<p className="trackercardinfotext"> Flexible</p>
								</div>
							</div>
						</div>

						<center className="suggestionCenterPara">
							1 hour 20 minutes in Accra
						</center>

						<div className="suggestionCard1Mid">
							<div>
								<p className="secondTrackText">From</p>
								<p className="secondTrackCardRed">LON</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo">
									<img src="/assets/trackeredit_icon.svg" />
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
								<p className="secondTrackText">To</p>
								<p className="secondTrackCardRed ">NYC</p>
								<p className="secondTracktextTime">13-07-2023 | 02:20</p>
								<div className="innertrackercardinfo rightAlignFlex">
									<img src="/assets/nonFlexible.svg" />
									<p className="trackercardinfotext"> Flexible</p>
								</div>
							</div>
						</div>
						<div>
							<div className="suggestionBottom suggestionBottomFlex">
								<div>
									<img src="/assets/suggectionBreifcase.svg" />
									<p>40 kg</p>
									<img src="/assets/suggectionBag.svg" />
									<p>30 kg</p>
								</div>
								<div>
									<p>$800</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

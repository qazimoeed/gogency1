import React from "react"

export default function Easypayments() {
	return (
		<>
			<section className="easyPayBoun">
				<div>
					<h1 className="firstheadeasypayment">Easy</h1>
					<h1 className="teamPayHead">PAYMENTS</h1>
				</div>
				<div className="paymentFlex">
					<ul className="paymentUls">
						<li>Add multiple payment meathods</li>
					</ul>
					<div className="easypaymentcardboundary">
						<div>
							<div className="easypaymentcard1">
								<table className="easypaymentCards">
									<tr>
										<td>Brand: </td>
										<td>
											<b>Etravelo </b>
										</td>
									</tr>
									<tr>
										<td>Type: </td>
										<td>
											<b>Bank Payment </b>
										</td>
									</tr>
									<tr>
										<td>Payment Method Name: </td>
										<td>
											<b>HSBC</b>
										</td>
									</tr>

									<tr>
										<td>Bank Name: </td>
										<td>
											<b>HSBC Etravelo Pvt Ltd.</b>
										</td>
									</tr>
									<tr>
										<td>Account No: </td>
										<td>
											<b>2364283472 </b>
										</td>
									</tr>
									<tr>
										<td>Sort Code: </td>
										<td>
											<b>97 532 </b>
										</td>
									</tr>
								</table>
							</div>
							<div className="easypaymentcard2">
								<table className="easyPaymentCard2Inside">
									<tr>
										<td>Brand: </td>
										<td>
											<b>Etravelo </b>
										</td>
									</tr>
									<tr>
										<td>Type: </td>
										<td>
											<b>Bank Payment </b>
										</td>
									</tr>
									<tr>
										<td>Payment Method Name: </td>
										<td>
											<b>HSBC</b>
										</td>
									</tr>

									<tr>
										<td>Bank Name: </td>
										<td>
											<b>HSBC Etravelo Pvt Ltd.</b>
										</td>
									</tr>
									<tr>
										<td>Account No: </td>
										<td>
											<b>2364283472 </b>
										</td>
									</tr>
									<tr>
										<td>Sort Code: </td>
										<td>
											<b>97 532 </b>
										</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="easypaybottomboun">
					<div className="easyPaymentCarding">
						<b>#1</b>
						<span>Syed Zulqarnain</span>
						<p>HSpC</p>
						<p>364RGT093</p>
						<span>$ 900</span>
						<p className="pending">Pending</p>
						<div className="easypaymentcardingiconsboundary">
							<button className="easypaymentbutton">Confirm</button>
							<img src="/assets/straightline.svg" className="straightLine" />
							<img src="/assets/tracklogo.svg" />
						</div>
					</div>
					<div className="easyPaymentCarding">
						<b>#2</b>
						<span>Syed Zulqarnain</span>
						<p>HSpC</p>
						<p>364RGT093</p>
						<span>$ 900</span>
						<p className="done">pending</p>
						<div className="easypaymentcardingiconsboundary">
							<button className="easypaymentbutton">Confirm</button>
							<img src="/assets/straightline.svg" className="straightLine" />
							<img src="/assets/tracklogo.svg" />
						</div>
					</div>
				</div>
				<ul className="paymentUls2">
					<li>All at once payment requests</li>
				</ul>
			</section>
		</>
	)
}

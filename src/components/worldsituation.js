import React, { Component } from 'react';
import './situation.css'

export default class WorldSituation extends Component{
	render(){
		return(
			<div>
				<p>업데이트: 2020.02.04</p>
				<table className='patient'>
					<thead>
						<tr>
							<th>확진자</th>
							<th>완치자</th>
							<th>사망자</th>
						</tr>
					</thead>
					<tbody>
						<tr className='data'>
							<td>20603명</td>
							<td>0명</td>
							<td>426명</td>
						</tr>
					</tbody>
				</table>

				<table className="china">
					<thead>
						<tr>
							<th colspan="3">중국 내 현황</th>
						</tr>
						<tr>
							<th>확진자</th>
							<th>완치자</th>
							<th>사망자</th>
						</tr>
					</thead>
					<tbody>
						<tr className='data'>
							<td>20438명</td>
							<td>0명</td>
							<td>425명</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
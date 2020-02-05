import React, { Component } from 'react';
import './situation.css'

export default class KoreaSituation extends Component{
	render(){
		return(
			<div>
				<p>업데이트: 2020.02.05</p>
				<table className='patient'>
					<thead>
						<tr>
							<th>확진자</th>
							<th>완치자</th>
							<th>사망자</th>
							<th>접촉자</th>
						</tr>
					</thead>
					<tbody>
						<tr className='data'>
							<td>17명</td>
							<td>1명</td>
							<td>0명</td>
							<td>1318명</td>
						</tr>
					</tbody>
				</table>

				<table className="suspect">
					<thead>
						<tr>
							<th colSpan="3">조사대상 유증상자</th>
						</tr>
						<tr>
							<th>계</th>
							<th>격리중</th>
							<th>격리해제</th>
						</tr>
					</thead>
					<tbody>
						<tr className='data'>
							<td>696명</td>
							<td>174명</td>
							<td>522명</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
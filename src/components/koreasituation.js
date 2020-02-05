import React, { Component } from 'react';
import KoreaGraph from './koreagraph'
import './situation.css'

export default class KoreaSituation extends Component{
	render(){
		return(
			<div>
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
							<td>18명</td>
							<td>0명</td>
							<td>0명</td>
							<td>1318명</td>
						</tr>
					</tbody>
				</table>

				<table className="suspect">
					<thead>
						<tr>
							<th colspan="3">조사대상 유증상자</th>
						</tr>
						<tr>
							<th>계</th>
							<th>격리중</th>
							<th>격리해제</th>
						</tr>
					</thead>
					<tbody>
						<tr className='data'>
							<td>591명</td>
							<td>129명</td>
							<td>462명</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
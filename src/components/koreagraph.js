import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
	{
		date: '01.20', 사망자: 0, 확진자: 1,
	},
	{
		date: '01.24', 사망자: 0, 확진자: 2,
	},
	{
		date: '01.25', 사망자: 0, 확진자: 2,
	},
	{
		date: '01.26', 사망자: 0, 확진자: 3,
	},
	{
		date: '01.27', 사망자: 0, 확진자: 4,
	},
	{
		date: '01.28', 사망자: 0, 확진자: 4,
	},
	{
		date: '01.29', 사망자: 0, 확진자: 4,
	},
	{
		date: '01.30', 사망자: 0, 확진자: 6,
	},
	{
		date: '01.31', 사망자: 0, 확진자: 11,
	},
	{
		date: '02.01', 사망자: 0, 확진자: 12,
	},
	{
		date: '02.02', 사망자: 0, 확진자: 15,
	},
	{
		date: '02.03', 사망자: 0, 확진자: 15,
	},
	{
		date: '02.04', 사망자: 0, 확진자: 16,
	}
]

export default class KoreaGraph extends Component{
	handleClickRed = () => {
		alert(data.사망자);
	}

	handleClickPurple = () => {
		alert(data.확진자);
	}

	render(){
		return(
			<div className='graph'>
				<ResponsiveContainer width='100%' aspect={21.0/9.0}>
					<LineChart data={data}>
						<CartesianGrid />
						<XAxis dataKey='date' interval='preserveEnd' />
						<YAxis interval='preserveEnd' />
						<Legend />
						<Line activedot={{ onClick:this.handleClickRed }} type='monotone' dataKey="사망자" stroke='red' />
						<Line activedot={{ onClick:this.handleClickPurple }} type='monotone' dataKey="확진자" stroke='#8884d8' />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	}
}
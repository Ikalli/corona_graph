import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export default class WorldGraph extends Component{
	state = {
		data: data
	}

	weekButtonClicked = () => {
		this.setState({
			data: data.slice(-7)
		})
	}

	wholeButtonClicked = () => {
		this.setState({
			data: data
		})
	}

	render(){
		return(
			<div>
				<ResponsiveContainer width='100%' aspect={21.0/9.0}>
					<LineChart data={this.state.data}>
						<CartesianGrid />
						<XAxis dataKey='date' interval='preserveEnd' />
						<YAxis interval='preserveEnd' />
						<Legend />
						<Line type='monotone' dataKey="사망자" stroke='red' />
						<Line type='monotone' dataKey="확진자" stroke='#8884d8' />
					</LineChart>
				</ResponsiveContainer>
				<button onClick={this.weekButtonClicked}>1주일간 보기</button>
				<button onClick={this.wholeButtonClicked}>전체기간 보기</button>
			</div>
		);
	}
}

const data = [
	{
		date: '01.19', 사망자: 4, 확진자: 198,
	},
	{
		date: '01.20', 사망자: 6, 확진자: 270,
	},
	{
		date: '01.21', 사망자: 6, 확진자: 314,
	},
	{
		date: '01.22', 사망자: 17, 확진자: 580,
	},
	{
		date: '01.23', 사망자: 25, 확진자: 830,
	},
	{
		date: '01.24', 사망자: 25, 확진자: 845,
	},
	{
		date: '01.25', 사망자: 41, 확진자: 1315,
	},
	{
		date: '01.26', 사망자: 56, 확진자: 2010,
	},
	{
		date: '01.27', 사망자: 80, 확진자: 2794,
	},
	{
		date: '01.28', 사망자: 106, 확진자: 4572,
	},
	{
		date: '01.29', 사망자: 132, 확진자: 6052,
	},
	{
		date: '01.30', 사망자: 170, 확진자: 7808,
	},
	{
		date: '01.31', 사망자: 213, 확진자: 9805,
	},
	{
		date: '02.01', 사망자: 259, 확진자: 11924,
	},
	{
		date: '02.02', 사망자: 304, 확진자: 14380,
	},
	{
		date: '02.03', 사망자: 362, 확진자: 17363,
	},
	{
		date: '02.04', 사망자: 426, 확진자: 20603,
	},
	{
		date: '02.05', 사망자: 490, 확진자: 24324,
	}
]

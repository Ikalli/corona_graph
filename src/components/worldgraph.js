import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './button.css';

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
						<Line type='monotone' dataKey="확진자" stroke='#8884d8' />
						<Line type='monotone' dataKey="사망자" stroke='red' />
						<Line type='monotone' dataKey="완치자" stroke='green' />
						<Tooltip />
					</LineChart>
				</ResponsiveContainer>
				<div className='btn_group'>
					<button onClick={this.weekButtonClicked} className='w_btn'>최근1주일 보기</button>
					<button onClick={this.wholeButtonClicked} className='e_btn'>전체기간 보기</button>
				</div>
			</div>
		);
	}
}

const data = [
	{
		date: '01.19', 사망자: 4, 확진자: 198, 완치자: 0
	},
	{
		date: '01.20', 사망자: 6, 확진자: 270, 완치자: 0
	},
	{
		date: '01.21', 사망자: 6, 확진자: 314, 완치자: 0
	},
	{
		date: '01.22', 사망자: 17, 확진자: 580, 완치자: 0
	},
	{
		date: '01.23', 사망자: 25, 확진자: 830, 완치자: 0
	},
	{
		date: '01.24', 사망자: 25, 확진자: 845, 완치자: 0
	},
	{
		date: '01.25', 사망자: 41, 확진자: 1315, 완치자: 0
	},
	{
		date: '01.26', 사망자: 56, 확진자: 2010, 완치자: 0
	},
	{
		date: '01.27', 사망자: 80, 확진자: 2794, 완치자: 0
	},
	{
		date: '01.28', 사망자: 106, 확진자: 4572, 완치자: 0
	},
	{
		date: '01.29', 사망자: 132, 확진자: 6052, 완치자: 0
	},
	{
		date: '01.30', 사망자: 170, 확진자: 7808, 완치자: 0
	},
	{
		date: '01.31', 사망자: 213, 확진자: 9805, 완치자: 0
	},
	{
		date: '02.01', 사망자: 259, 확진자: 11924, 완치자: 0
	},
	{
		date: '02.02', 사망자: 304, 확진자: 14380, 완치자: 0
	},
	{
		date: '02.03', 사망자: 362, 확진자: 17363, 완치자: 0
	},
	{
		date: '02.04', 사망자: 426, 확진자: 20603, 완치자: 0
	},
	{
		date: '02.05', 사망자: 492, 확진자: 24506, 완치자: 0
	}
]

import React, { Component } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './button.css';

export default class KoreaGraph extends Component{
	state = {
		data: data,
	}
	handleClickRed = () => {
		alert(data.사망자);
	}

	handleClickPurple = () => {
		alert(data.확진자);
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
			<div className='graph'>
				<ResponsiveContainer width='100%' aspect={21.0/9.0}>
					<LineChart data={this.state.data}>
						<CartesianGrid />
						<XAxis dataKey='date' interval='preserveEnd' />
						<YAxis interval='preserveEnd' />
						<Legend />
						<Line activedot={{ onClick:this.handleClickPurple }} type='monotone' dataKey="확진자" stroke='#8884d8' />
						<Line activedot={{ onClick:this.handleClickRed }} type='monotone' dataKey="사망자" stroke='red' />
						<Line activedot={{ onClick:this.handleClickRed }} type='monotone' dataKey="완치자" stroke='green' />
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
		date: '01.20', 확진자: 1, 사망자: 0, 완치자: 0
	},
	{
		date: '01.24', 확진자: 2, 사망자: 0, 완치자: 0
	},
	{
		date: '01.25', 확진자: 2, 사망자: 0, 완치자: 0
	},
	{
		date: '01.26', 확진자: 3, 사망자: 0, 완치자: 0
	},
	{
		date: '01.27', 확진자: 4, 사망자: 0, 완치자: 0
	},
	{
		date: '01.28', 확진자: 4, 사망자: 0, 완치자: 0
	},
	{
		date: '01.29', 확진자: 4, 사망자: 0, 완치자: 0
	},
	{
		date: '01.30', 확진자: 6, 사망자: 0, 완치자: 0
	},
	{
		date: '01.31', 확진자: 11, 사망자: 0, 완치자: 0
	},
	{
		date: '02.01', 확진자: 12, 사망자: 0, 완치자: 0
	},
	{
		date: '02.02', 확진자: 15, 사망자: 0, 완치자: 0
	},
	{
		date: '02.03', 확진자: 15, 사망자: 0, 완치자: 0
	},
	{
		date: '02.04', 확진자: 16, 사망자: 0, 완치자: 0
	},
	{
		date: '02.05', 확진자: 17, 사망자: 0, 완치자: 1
	}
]

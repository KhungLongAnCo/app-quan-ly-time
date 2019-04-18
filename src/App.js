import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm'
import Control from './component/Control'
import TaskList from './component/TaskList'


class App extends Component {
	constructor(props){
		super(props);
		let ids = require('short-id');
		this.state = {
			tasks: [
				{
					id: ids.generate(),
					name:'action 1',
					status: true
				},
				{
					id: ids.generate(),
					name:'action 2',
					status: false
				},
				{
					id: ids.generate(),
					name:'action 3',
					status: true
				}
			]
		}
	}
	
	onGeneratedata = () => {
		console.log(this.state.tasks);
		let tasks =  [
			{
				id: this.generateId(),
				name:'action 1',
				status: true
			},
			{
				id: this.generateId(),
				name:'action 2',
				status: false
			},
			{
				id: this.generateId(),
				name:'action 3',
				status: true
			}
		]
		console.log(tasks);
	}
	s4(){
		return Math.floor((1 + Math.random())* 0x10000).toString(16).substring(1);
	}
	generateId = () =>{
		return this.s4() + this.s4()+ '-' + this.s4() + this.s4() + '-' + this.s4()+ '-';
	}
	
		render(){	
				return (					
					<div className="container ">
					<h1 className="text-center">Quản lý công việc</h1>
					<br />
					<br />
					<TaskForm />
					<div className="col-lg-9 col-md-9 col-xs-9">
						<div className="col-md-12">              
							<button type="button" className="btn btn-primary">+ Thêm công việc</button>    
							<button type="button" 
							className="btn btn-danger"
							onClick={this.onGeneratedata}
							>Generate Data</button>    
							<br />
							<br />        
						</div>
						<Control />      
					</div>
					<TaskList />
				</div>
				)
		}
}

export default App;

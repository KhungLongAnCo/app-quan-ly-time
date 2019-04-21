import React, { Component } from 'react';
import './App.css';
import TaskForm from './component/TaskForm'
import Control from './component/Control'
import TaskList from './component/TaskList'


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: [
				{
					id: '',
					name:'action 1',
					status: true
				},
				{
					id: '',
					name:'action 2',
					status: false
				},
				{
					id: '',
					name:'action 3',
					status: true
				}
			],
			isDisplayForm: false
		}
	}
	
	onGeneratedata = () => {
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
		this.setState({
			tasks:tasks
		})
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	componentWillMount(){
		if(localStorage && localStorage.getItem('tasks')){
			var tasks = JSON.parse(localStorage.getItem('tasks'))
			this.setState({
				tasks:tasks
			})
		}
		
	}
	// create short id
	s4(){
		let ids = require('short-id');
		return ids.generate();
	}
	// Create new id
	generateId = () =>{
		return this.s4() + this.s4()+ '-' + this.s4() + this.s4() + '-' + this.s4()+ '-';
	}
	// displayForm 
	displayForm = () => {
		this.setState({
			isDisplayForm: !this.state.isDisplayForm
		})
	}
	// close Form 
	closeForm = (params) =>{
		this.setState({
			isDisplayForm: !this.state.isDisplayForm
		})
	}
		render(){	
			let {tasks} = this.state;
			let {isDisplayForm} = this.state;
			let disPlayTaskForm = isDisplayForm === true ? <TaskForm controlForm = {this.closeForm} /> : '';
				return (					
					<div className="container ">
						<h1 className="text-center">Quản lý công việc</h1>
						<br />
						<br />
						<div className="col-lg-3 col-md-3 col-xs-3">
						{ disPlayTaskForm }
						</div>
						
						<div 
						className={isDisplayForm === false ? 'col-lg-12 col-md-12 col-xs-12' : 'col-lg-9 col-md-9 col-xs-9'}
						>
							<div className="col-md-12">              
								<button type="button" 
								className="btn btn-primary"
								onClick={this.displayForm}
								>+ Thêm công việc</button>    
								<button type="button" 
								className="btn btn-danger"
								onClick={this.onGeneratedata}
								>Generate Data</button>    
								<br />
								<br />        
							</div>
							<Control />   
							
							<div className="col-lg-12 col-md-12 col-xs-12">
								<br />
								<TaskList tasks={tasks} />
							</div>   
						</div>					
					</div>
				)
		}
}

export default App;

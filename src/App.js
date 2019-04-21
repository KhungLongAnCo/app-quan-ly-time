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
			],
			isDisplayForm:false,
			itemModify:{

			}
		}
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
			isDisplayForm: true
		})
	}
	// close Form 
	closeForm = () =>{
		this.setState({
			isDisplayForm: false,
			itemModify: ''
		})
	}
	//get data from taskForm add Item
	onSubmit = (data) =>{
		let task = {
			id:this.generateId(),
			name:data.name,
			status:data.status
		};
		var tasks = this.state.tasks;
		tasks.push(task);
		this.setState({
			tasks:tasks
		})
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	// update Status
	updateStatus = (index) =>{
		let tasks = this.state.tasks;
		tasks[index].status = !tasks[index].status
		this.setState({
			tasks:tasks
		})
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
	//remove item
	removeItem = async (index) => {
		let tasks = this.state.tasks;
		tasks.splice(index, 1);
		this.setState({
			tasks:tasks
		})
		localStorage.setItem('tasks', JSON.stringify(tasks));
		// close form 
		this.closeForm();
	}

	//show modify 
	showModify = (index) => {
		let itemModify = this.state.tasks[index];
		this.setState({
			itemModify:itemModify
		})	
		this.displayForm();
	}
	// // modify item
	// getmodifyItem = async (itemMofidy) => {
	// 	var tasks = this.state.tasks;
	// 	var indexItem = '';
	// 	await tasks.forEach((item, index) => {
	// 		if(item.id === itemMofidy.id){
	// 			indexItem = index;
	// 		}
	// 	})
	// 	tasks.splice(indexItem, 1, itemMofidy);
	// 	this.setState({
	// 		tasks:tasks
	// 	});
	// 	localStorage.setItem('tasks', JSON.stringify(tasks));

	// }
		render(){	
			let {tasks} = this.state;
			let {isDisplayForm} = this.state;
			let disPlayTaskForm ='';
			if(isDisplayForm === true){
				disPlayTaskForm = <TaskForm 
				controlForm = {this.closeForm}
				onSubmit={this.onSubmit} 
				modifyItem = {this.state.itemModify	} 
				getmodifyItem = {this.getmodifyItem}
				 />
			}
			else{
				disPlayTaskForm = '';
			}
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
								>
								+ Thêm công việc
								</button>    						
								<br />
								<br />        
							</div>
							<Control />   
							
							<div className="col-lg-12 col-md-12 col-xs-12">
								<br />
								<TaskList tasks={tasks} 
								updateStatus = {this.updateStatus} 
								removeItem = {this.removeItem}
								showModify ={this.showModify}
								/>
							</div>   
						</div>					
					</div>
				)
		}
}

export default App;

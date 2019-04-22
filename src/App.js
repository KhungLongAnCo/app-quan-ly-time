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
		if(this.state.itemModify){
			this.setState({
				itemModify: null
			});
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
			isDisplayForm: true,
			itemModify: ''
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
		if(data.status === 'true'){
			data.status = true
		}
		if(data.status === 'false'){
			data.status = false
		}
		var tasks = this.state.tasks;
		if(data.id === ''){
			data.id = this.generateId();
			tasks.push(data);
			this.setState({
				tasks:tasks
			})
		}
		else{
			let index = this.findIndex(data.id);
			tasks[index] = data;
			this.setState({
				tasks:tasks
			})
			this.closeForm();
			
		}	
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
	// find index theo id truyen vao
	findIndex = (id) => {
		var tasks = this.state.tasks;
		var indextask = '';
		tasks.forEach((item, index) => {
			if(item.id === id){
				indextask = index;
			}
		})
		return indextask;
	}
	//show modify 
	showModify = (index) => {
		let itemModify = this.state.tasks[index];
		this.setState({
			itemModify:itemModify
		})	
	
		this.showModifyForm();
	}
	showModifyForm = () => {
		this.setState({
			isDisplayForm: true
		})
	}

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

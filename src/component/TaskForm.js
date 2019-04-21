import React, { Component } from 'react';

class TaskForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name:'',
			status: false,
			id: ''
		}
	}
	closeForm = () =>{
		this.setState({
			name:'',
			status:false
		})
		this.props.controlForm();
	}
	// get data from form 
	changeData = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		})
	}
	// pass data to app.js
	onSubmit = (event) =>{
		event.preventDefault();
		this.props.onSubmit(this.state);
		let nameWork = document.getElementById('nameWork');
		nameWork.value = '';
	}
	// click HUY BO close form and clear input
	onClear = () =>{
		
		this.closeForm();
	}
	// modify sucess
	modifySuccess = (event) =>{
		event.preventDefault();
		this.props.getmodifyItem(this.state);
	}
	// when form load componentWillMount will call and assign value for input and select
	componentWillMount(){
		if(this.props.modifyItem){
			let item = this.props.modifyItem;
			this.setState({
			id:item.id,
			name:item.name,
			status:item.status
		})
		}
	}
		render(){	
				return (						 
						<div className={this.props.modifyItem ? 'panel panel-danger' : 'panel panel-primary' }>
							<div className="panel-heading">
								<h3 className="panel-title">
									{this.props.modifyItem ? 'Chỉnh sửa công việc' : 'Thêm công việc'} 
									<span className="fas fa-times-circle iconFromTask" onClick={this.closeForm}>                         
									</span>
								</h3>
							</div>
							<div className="panel-body">                  
								<form 
								onChange={this.changeData} 
								onSubmit={this.props.modifyItem ? this.modifySuccess : this.onSubmit}>                   
									<div className="form-group">
										<label>Tên :</label>
										<input type="text"
										onChange={this.changeData} 
										value={this.state.name} 
										id="nameWork"
										name="name" 
										className="form-control" />
										<label>Trang Thái :</label>
										<br />                        
										<select 
										onChange={this.changeData} 
										value={this.state.status} 
										id="status"
										name='status' 
										className="form-control" 
										required="required">
											<option value={true}>Kích hoạt</option>
											<option value={false}>Không</option>
										</select>                        
									</div>        
									<br />    
									<div className="buttonTaskForm">
									<button type="submit" className="btn btn-warning">{this.props.modifyItem ? 'Sửa' : '+Lưu lại'}</button>                      
									<button type="button" 
									className="btn btn-danger"
									onClick={this.onClear}
									>x Hủy bỏ</button>
									</div>
								</form>                  
							</div>
						</div>                
					
				)
		}
}

export default TaskForm;

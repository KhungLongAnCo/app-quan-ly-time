import React, { Component } from 'react';
import TaskItemList from './TaskItemList';
class TaskList extends Component {
	constructor(props){
		super(props);
		this.state = {
			filterName: '',
			filterStatus: ''
		}
	}
	onChange = (event) =>{
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({
			[name]: value
		})
		this.props.filterList(
			name === 'filterName' ? value : this.state.filterName,
			name === 'filterStatus' ? value : this.state.filterStatus
		);
		
	}
		render(){
			let {tasks} = this.props;
			var ListItem = tasks.map((item, index) => {
				return <TaskItemList 
				item={item} 
				key={item.id}
				index={index} 
				updateStatus={this.props.updateStatus} 
				removeItem ={this.props.removeItem}
				showModify ={this.props.showModify}
				/>
			})	
				return (					
					           
						<table className="table table-bordered table-hover">
							<thead>
								<tr>
									<th>Stt</th>
									<th>Tên</th>
									<th>Trạng Thái</th>
									<th>Hành động</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td></td>
									<td>
										<input type="text" 
										className="form-control" 
										
										name = 'filterName'
										value = {this.state.filterName}	
										onChange={this.onChange}										
										/>
									</td>
									<td>
										<select
										onChange={this.onChange}	
										name = 'filterStatus'
										value = {this.state.filterStatus}
										>
											<option value ='all'>
												Tất cả
											</option>
											<option value ='active'>
												Active
											</option>
											<option value ='complete'>
												Hết hạn
											</option>
										</select>
									</td>
                                    <td>
                                    
                                    </td>
									
								</tr>
                                {ListItem}
								
							</tbody>
						</table>
				)
		}
}

export default TaskList;

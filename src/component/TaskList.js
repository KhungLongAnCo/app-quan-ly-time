import React, { Component } from 'react';
import TaskItemList from './TaskItemList';
class TaskList extends Component {
		render(){
			let {tasks} = this.props;
			var ListItem = tasks.map((item, index) => {
				return <TaskItemList item={item} key={item.id} index={index} />
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
										<input type="text" className="form-control" />
									</td>
									<td>
										<select>
											<option value ={1}>
												Tất cả
											</option>
											<option value ={2}>
												Active
											</option>
											<option value ={3}>
												NotActive
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

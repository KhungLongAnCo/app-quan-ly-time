import React, { Component } from 'react';
import TaskItemList from './TaskItemList';
class TaskList extends Component {
		render(){	
				return (					
					<div className="col-lg-9 col-md-9 col-xs-9">
						<br />           
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
                                <TaskItemList />
                                <TaskItemList />
                                <TaskItemList />
								
							</tbody>
						</table>
					</div>
				)
		}
}

export default TaskList;

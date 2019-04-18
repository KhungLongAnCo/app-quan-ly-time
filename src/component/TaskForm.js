import React, { Component } from 'react';

class TaskForm extends Component {
		render(){	
				return (					
					<div className="col-lg-3 col-md-3 col-xs-3">      
						<div className="panel panel-danger">
							<div className="panel-heading">
								<h3 className="panel-title">Thêm công việc 
									<span className="fas fa-times-circle iconFromTask">                         
									</span>
								</h3>
							</div>
							<div className="panel-body">                  
								<form >                   
									<div className="form-group">
										<label>Tên :</label>
										<input type="text" className="form-control" />
										<label>Trang Thái :</label>
										<br />                        
										<select id="input" className="form-control" required="required">
											<option value={1}>Kích hoạt</option>
											<option value={2}>Không</option>
										</select>                        
									</div>        
									<br />    
									<div className="buttonTaskForm">
									<button type="submit" className="btn btn-warning">+ Lưu lại </button>                      
									<button type="button" className="btn btn-danger">x Hủy bỏ</button>
									</div>
								</form>                  
							</div>
						</div>                
					</div>
				)
		}
}

export default TaskForm;

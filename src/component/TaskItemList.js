import React, { Component } from 'react';

class TaskItemList extends Component {
		render(){	
				return (					
                    <tr>
                    <td />
                    <td />
                    <td />
                        <td>
                        <button type="button" className="btn btn-warning"><i className="fas fa-wrench"></i> Sửa</button>
                        <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i> Xóa</button>
                        </td>
                    </tr>
				)
		}
}

export default TaskItemList;

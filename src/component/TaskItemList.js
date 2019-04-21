import React, { Component } from 'react';

class TaskItemList extends Component {
		render(){	
            var tasks = this.props;
				return (					
                    <tr>
                    <td>{tasks.index}</td>
                    <td>{tasks.item.name}</td>
                    <td>
                    <span className={tasks.item.status === true ? 'label label-danger' : 'label label-success'}>
                    {tasks.item.status === true ? 'active' : 'Hết hạn'}</span>
                    </td>
                        <td>
                        <button type="button" className="btn btn-warning"><i className="fas fa-wrench"></i> Sửa</button>
                        <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i> Xóa</button>
                        </td>
                    </tr>
				)
		}
}

export default TaskItemList;

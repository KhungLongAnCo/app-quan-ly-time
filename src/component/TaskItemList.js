import React, { Component } from 'react';

class TaskItemList extends Component {
        updateStatus = () => {
            this.props.updateStatus(this.props.index);
        }
        removeItem = () => {
            this.props.removeItem(this.props.index)
        }
        showModify = () => {
            this.props.showModify(this.props.index);
        }
		render(){	
            var tasks = this.props;
				return (					
                    <tr>
                    <td>{tasks.index + 1}</td>
                    <td>{tasks.item.name}</td>
                    <td>
                    <span 
                    className={tasks.item.status === true ? 'label label-danger' : 'label label-success'}
                    onClick={this.updateStatus}
                    >
                    {tasks.item.status === true ? 'active' : 'Hết hạn'}</span>
                    </td>
                        <td>
                            <button type="button" 
                            className="btn btn-warning"
                            onClick={this.showModify}
                            >
                                <i className="fas fa-wrench"></i> Sửa
                            </button>
                            <button type="button" 
                            className="btn btn-danger"
                            onClick={this.removeItem}>
                                <i className="fas fa-trash-alt"></i> Xóa
                            </button>
                        </td>
                    </tr>
				)
		}
}

export default TaskItemList;

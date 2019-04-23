import React, { Component } from 'react';


class Sort extends Component {
		render(){	
				return (		
					
					
								
					<div className="col-md-3 ">
					        <button type="button" 
							className="btn btn-primary dropdown-toggle"
							data-toggle="dropdown"
							>Sắp Xếp</button>
							<ul 
							className="btn btn-primary dropdown-menu"	
							id="menuSort"						
							 required="required">
								<li>Theo tên A-Z</li>
								<li>Theo tên Z-A</li>
								<li>ACTIVE</li>
								<li>COMPLETE</li>
							</ul>                
					</div>    
				)
		}
}

export default Sort;

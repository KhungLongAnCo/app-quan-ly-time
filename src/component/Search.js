import React, { Component } from 'react';


class Search extends Component {
		render(){	
				return (					
					<div>
                        <div className="col-md-6">                                  
							<input type="text" className="form-control" />                
						</div>
						<div className="col-md-3">                  
							<button type="button" className="btn btn-primary">Tìm kiếm</button>                  
						</div>						     
                    </div> 
				)
		}
}

export default Search;

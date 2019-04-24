import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'

class Control extends Component {
		render(){	
				return (					
					<div>
                        <Search filterSentences = {this.props.filterSentences} />
						<Sort SortList = {this.props.SortList} />        
                    </div> 
				)
		}
}

export default Control;

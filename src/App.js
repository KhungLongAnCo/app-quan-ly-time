import React, { Component } from 'react';
import './App.css';



class App extends Component {
  constructor(props){
	 super(props);
	 this.state = {
		userName:'',
		PassWord: '',
		Note: '',
		language: 1,
		sex:'male',
		Agree: false

	 }
  }
  SubmitRegis = (event) => {
	event.preventDefault();
	console.log(event);
  }
  changeDataForm = (event) =>{
	  var target = event.target;
	  let name = target.name;
	  let value = target.type === 'checkbox' ? target.checked : target.value
	  this.setState({
		  [name]: value
	  })
  }
  render() {
    return (
      
      <div className="container">          
        <form action="" method="get" onSubmit={this.SubmitRegis} onChange={this.changeDataForm}>
          <legend>Form Registrater</legend>
        
          <div className="form-group">
            <label>UserName</label>
            <input type="text" className="form-control" name="userName" />
				<label>PassWord</label>
            <input type="password" className="form-control" name="PassWord" />
				<label>Note</label>
				<br />
				<textarea name="Note"></textarea>
				<br/>
				<label>Languages</label>
				<br/>
				<select name="language" value={this.state.language} onChange={this.changeDataForm}>
					<option value={0}>VietName</option>
					<option value={1}>Japan</option>
				</select>
				<br />
				<br />
				<input type="radio" name="sex" value="male" checked={this.state.sex === 'male' }  onChange={this.changeDataForm}/>
				Nam
				<input type="radio" name="sex" value="female" checked={this.state.sex === 'female' } onChange={this.changeDataForm} />
				Nu
				<br />
				I agree
				<br />
				<input type="checkbox" name="Agree" value={true}  onChange={this.changeDataForm}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
			 <button type="reset" className="btn btn-primary">Reset</button>
        </form>
      </div>
      
     
    );
  }
}

export default App;

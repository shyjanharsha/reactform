import React from 'react';

 class Input extends React.Component{
 	constructor(props){
 		super(props);
 		console.log(this.props)
 	}
	render(){
		return(
			<div>
				<input type = 'text' name = 'first_name' placeholder = {this.props.placeholder}/>
			</div>
			)
	}
}
export default Input;
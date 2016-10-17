import React,{Component,PropTypes} from 'react';


export default class Input extends Component{

	constructor(props){
	  super(props);
		this.state = {opacity:1};
  }
  render(){
  	return (
      <div>
	      <h2>users</h2>
      </div>

  	);
  }
}
// Input.propTypes = {
// 	titleName:PropTypes.string.isRequired
// }

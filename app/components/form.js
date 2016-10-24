import React ,{Component} from 'react'

export default class myForm extends Component{
	constructor(props){
		super(props);
	}


	componentDidMount(){

	}
	render(){
		var item = {width:'20%'};
		return(
				<form action="">
			    <div><label htmlFor="">姓名</label><input type="text" placeholder="请输入中文名字"/></div>
			    <div><label htmlFor="">姓名</label><input type="text" placeholder="请输入中文名字"/></div>
			    <div><label htmlFor="">姓名</label><input type="text" placeholder="请输入中文名字"/></div>
			    <div><label htmlFor="">姓名</label><input type="text" placeholder="请输入中文名字"/></div>
			    <div><label htmlFor="">姓名</label><input type="text" placeholder="请输入中文名字"/></div>
			    <div><label htmlFor="">姓名</label><input type="text" placeholder="请输入中文名字"/></div>
				</form>

		)
	}
}
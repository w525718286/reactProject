import React ,{Component} from 'react'

export default class myTable extends Component{
	constructor(props){
		super(props);
	}


	componentDidMount(){

	}
	render(){
		var item = {width:'20%'};
		return(
				<table>
					<colgroup>
						<col/>
						<col style={item}/>
						<col style={item}/>
						<col style={item}/>
						<col style={item}/>
						<col style={item}/>
					</colgroup>
					<thead>
					<tr>
						<th><span>选择</span> <input type="checkbox"/></th>
						<th>姓名</th>
						<th>年龄</th>
						<th>住址</th>
						<th>备注</th>
						<th>操作</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td><input type="checkbox"/></td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td><input type="checkbox"/></td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					<tr>
						<td><input type="checkbox"/></td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
						<td>1</td>
					</tr>
					</tbody>


				</table>

		)
	}
}
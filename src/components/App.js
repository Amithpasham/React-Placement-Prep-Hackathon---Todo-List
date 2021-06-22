// import React from "react";
// import "./../styles/App.css";
// import Button1 from './Button1'
// function App() 
// {
// 	const [count, setCount] = useState([])
// 	function clickHandler(id){
// 		setCount(count.filter((user,i)=>(i!==parseInt(id))))
// 	}
// 	return (
// 	<div id="main">
// 			<div>{
// 			count.map((user,id)=>{
// 			return < div key={id}>
// 			<p className="list" >{user}</p>
// 			<button onClick={()=>clickHandler(id)}>del</button>
//     		<button onClick={()=>editHandler(id)}>edit</button>
// 			</div>
// 			})
			
// 		}
// 		<Button1 fun={setCount}></Button1>
// 		</div>
// 	</div>
// 	);
// }


// export default App;
import React,{useState} from 'react'
import "./../styles/App.css";
import Button1 from './Button1'

function App() {
	const [count, setCount] = useState([])
	function clickHandler(id){
		setCount(count.filter((user,i)=>(i!==parseInt(id))))
	}
	return (
		<div id="main">
						<div>{
			count.map((user,id)=>{
			return < div key={id}>
			<p className="list" >{user}</p>
			<button onClick={()=>clickHandler(id)}>del</button>
			</div>
			})
			
		}
		<Button1 fun={setCount}></Button1>
		</div>
			</div>
	)
}

export default App

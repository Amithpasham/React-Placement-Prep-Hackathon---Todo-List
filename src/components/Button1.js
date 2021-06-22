import React from 'react'

function Button1(props) {
function handle(e){
    e.preventDefault();
    const ele=e.target.elements.task.value;
    props.fun((prev)=>[...prev,ele])
    e.target.elements.todo.value=""
}
return (
    <div>
    <form onSubmit={handle}>
    <textarea id="task"></textarea>
    <button id="btn" type="submit">add</button>
    </form>
    </div>
)
}

export default Button1
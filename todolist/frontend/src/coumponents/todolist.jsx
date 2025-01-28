import React from "react";
import { useGettodolistQuery } from "../services/todoApi";

const Todolist = (()=>{

    const {isLoading,data} = useGettodolistQuery();
        function add() {

        }

      return <div style={{padding:10}}>
                <h1>TodoList</h1>
                <input type="text" id="a1" />
                <button onClick={add()} >add</button>
                <ul>
                {
                 !isLoading&& data.map((todo)=>{
                        return <li key={todo._id}>{todo.name} </li>
                    })
                }
                </ul>
      </div>
      

})

export default Todolist
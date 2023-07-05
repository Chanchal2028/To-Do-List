import React,{ useState } from "react";
import ToDoLi from "./ToDoLi";
const Todo=()=>{

    const [inputList, setInputList] = useState("");
    const [Items,setItems]=useState([]);
    
        const inputTask = (event) => {
            setInputList(event.target.value);
        
        }
    const listOfItems=()=>{
            setItems((oldItems)=>{
                return [...oldItems,inputList]
            });
            setInputList("");
    };
    const deleteItems=(id)=>{
        console.log('deleted');

        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;

            })
        });
    }
    return(
        <div className="Todo">
            <div className="main_div">
            <div className="center_div">
            <br/>
            <h1>To Do List</h1>
            <br/>
            <input type="text" name="task" placeholder="Add a Items" onChange={inputTask} value={inputList}/>
            <button onClick={listOfItems}>+</button>
            <ol>

                {Items.map((itemval,index)=>{
                     return(
                       <ToDoLi key={index} id={index} text={itemval} onSelect={deleteItems}/>
                     );
                })} 
            </ol>
            </div>
            </div>
        </div>
    );
}
export default Todo;
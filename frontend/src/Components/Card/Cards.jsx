import React, { useState , useEffect } from "react";
import Card from "./Card";

const Cards = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
            const data = await response.json();
            setTodos(data);
        };
        fetchApi();
        console.log(todos);
    }, []);

    return(
        <div className="flex gap-4 flex-wrap">
           { 
            todos.map((todo) => {
                return <Card todo={todo}/> 
            })
        }
        </div>
    )

};

export default Cards;
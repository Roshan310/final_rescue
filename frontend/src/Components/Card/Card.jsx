import React from 'react';

const Card = ({todo}) => {
    console.log(todo);
    return (
        <div className="bg-pink-200 w-80 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{todo.id}</h2>
            <p className="text-red-700">{todo.title}</p>
            {
                todo.title.length < 10 ? <p className="text-red-700">{todo.title}</p> : <p className="text-red-700">{todo.title.substring(0, 10)}...</p>
            }
        </div>
    );
};

export default Card;



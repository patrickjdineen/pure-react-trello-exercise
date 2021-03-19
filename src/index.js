import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ingredients1 from './Ingredients';
import ingredients2 from './Ingredients2';


const List = ({ list })  => (
    <div className="board-container">
        <div className="board-header">
            Ingredients
        </div>
        <div>
            {list.map(item =>(
                <div className='board-item' key={item.id}>
                        {item.ingredient}
                </div>
            ))}
        </div>
    </div>
);

const Board = ({ lists })  => (
    <div className="main-board-container">
        {lists.map(list =>(
            <List key={list.id} list={list.ingredients} />
        ))}
    </div>
);

let lists =[ingredients1, ingredients2]

ReactDOM.render(
    <Board lists={lists} />
    ,
    document.querySelector('#root')
);
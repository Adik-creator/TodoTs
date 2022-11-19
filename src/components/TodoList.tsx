import React from "react";
import {ITodo} from "../types/data";
import {TodoItem} from "./TodoItem";
// import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({items, removeTodo, toggleTodo}) => {

    // const classes = useStyles();


    return (
        <div>
            {
                items.map(todo => <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    // {...todo}
                    id={todo.id}
                    title={todo.title}
                    complete={todo.complete}
                />)
            }
        </div>
    )
}

// const useStyles = makeStyles((theme: Theme) =>
//
//     createStyles({
//         cardTodoList: {
//             width: '100%'
//         },
//     }),
// );


export {TodoList}
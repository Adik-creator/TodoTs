import React from "react";

import {ITodo} from "../types/data";
import {TodoItem} from "./TodoItem";
import Card from "@material-ui/core/Card";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

interface ITodoListProps {
    items: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const classes = useStyles();

    const {items, removeTodo, toggleTodo} = props

    return (
        <div>
            {
                props.items.map(todo => <TodoItem
                    key={todo.id}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    {...todo}
                />)
            }
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        cardTodoList: {
            width: '100%'
        },
    }),
);


export {TodoList}
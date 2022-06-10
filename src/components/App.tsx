import React, {useState, useEffect, useRef} from "react";

import {ITodo} from "../types/data";
import {TodoList} from "./TodoList";
import {Header} from "./Header";
import {Button, Container, TextField} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        buttonAdd:{
            width: '19%',
            height: '56px',
            marginLeft: '10px',
        },
        button: {
            width: '150px',
        },
        input: {
            width: '80%'

        }
    }),
);


const App: React.FC = () => {

    const classes = useStyles();

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter')
            addTodo()
    }

    useEffect(() => {
        return () => {
            if (inputRef.current) {
                inputRef.current.focus()
            }
        };
    }, []);


    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo
            }
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    return (
        <>
            <Header/>
            <Container style={{marginTop: 20, marginBottom: 20}}>
                <div>
                    <TextField
                        className={classes.input}
                        label={"tasks"}
                        variant={"outlined"}
                        type="text" value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                        style={{marginBottom: 20}}
                    />
                    <Button
                        className={classes.buttonAdd}
                        onClick={addTodo}
                        variant="contained"
                        color={"primary"}
                    >Add</Button>
                </div>
                <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
            </Container>
        </>
    )
}

export {App}
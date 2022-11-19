import {ITodo} from "../types/data";
import React from "react";
import {Button, CardContent, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

interface ITodoItem extends ITodo {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}


const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;
    const classes = useStyles();
    return <div>
        <Card className={classes.card}>
            <CardContent>
                <Box className={classes.box}>
                    <Box>
                        <input type="checkbox"
                               className={classes.checkbox}
                               checked={complete}
                               onChange={() => toggleTodo(id)}

                        />
                    </Box>
                    <Box>
                        <Typography
                            variant={"h6"}
                            style={complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>
                            {title}
                        </Typography>
                    </Box>
                   <Box className={classes.delete} flexGrow={3}>
                       <Button
                           className={classes.button}
                           onClick={() => removeTodo(id)}
                           variant="contained"
                           color={"secondary"}  
                       >
                           <DeleteIcon/>
                       </Button>
                   </Box>
                </Box>
            </CardContent>
        </Card>
    </div>
}

const useStyles = makeStyles((theme: Theme) =>

    createStyles({
        card: {
            width: '100%'
        },
        button: {
            width: '50px'
        },
        checkbox: {
            width: '25px',
            height: '25px',
        },
        box: {
            display: 'flex',
            gap: '20px'
        },
        delete: {
            marginLeft: 'auto'
        },
    }),
);

export {TodoItem}
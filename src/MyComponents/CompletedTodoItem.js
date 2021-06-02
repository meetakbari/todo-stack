import React from 'react'
import { Card, Button } from "react-bootstrap";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cards: {
        display: 'flex',
        flexDirection: 'column',
    },
    card: {
        width: '70vw',
        margin: '5px', 
        border: '2px solid grey',
    },
    btns: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        margin: '0px 5px'
    },
    }));

export default function CompletedTodoItem({ todo, onDeleteCompleted, onUndo}) { //this is called the de-structuring 
    const classes = useStyles();

    return (
        <div className={classes.cards}>
            <Card className={classes.card}>
                <Card.Body>
                    <Card.Text>{todo.desc}</Card.Text>
                    <div className={classes.btns}>
                        <Button variant="primary" className={classes.btn} onClick={() =>{onUndo(todo)}}>Undo</Button>
                        <Button variant="danger" className={classes.btn} onClick={() =>{onDeleteCompleted(todo)}}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

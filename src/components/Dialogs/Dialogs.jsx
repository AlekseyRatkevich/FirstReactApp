import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
    <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name="Lesha" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Goshan" id="3"/>
                <DialogItem name="Alena" id="4"/>
                <DialogItem name="Natasha" id="5"/>
                <DialogItem name="Oleg" id="6"/>
                <DialogItem name="Nikita" id="7"/>
                <DialogItem name="Vlad" id="8"/>
            </div>

            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are u?"/>
                <Message message="How long have u been abroad?"/>
                <Message message="Lol"/>
            </div>
        
        
        </div>
    )
}

export default Dialogs;
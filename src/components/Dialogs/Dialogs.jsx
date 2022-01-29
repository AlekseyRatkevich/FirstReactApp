import * as React from 'react'
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/>)

    let newMessage = React.createRef()

    let addMessage = () => {
        let messageValue = newMessage.current.value;
        alert(messageValue)
    }

    return (
        <div className={s.dialogs}>

            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send new message</button>
            </div>

            <div className={s.dialogsItems}>
                { dialogElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        
        
        </div>
    )
}

export default Dialogs;
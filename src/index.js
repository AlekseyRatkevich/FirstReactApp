import * as React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hello world', likesCount: 10},
  { id: 2, message: 'This is my first post', likesCount: 3},
  { id: 3, message: 'aappaoaoa welcome to the internet!!', likesCount: 543},
  { id: 4, message: 'Please follow me', likesCount: 9999999},
  { id: 5, message: 'free hugs(', likesCount: 0},
]

let dialogs = [
  {id: 1, name: 'Lesha'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Goshan'},
  {id: 4, name: 'Alena'},
  {id: 5, name: 'Nikita'},
  {id: 6, name: 'Oleg'}
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are u?'},
  {id: 3, message: 'How long have u been abroad?han'},
  {id: 4, message: 'Lol'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

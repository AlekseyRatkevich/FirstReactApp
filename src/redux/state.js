let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello world', likesCount: 10 },
        { id: 2, message: 'This is my first post', likesCount: 3 },
        {
          id: 3,
          message: 'aappaoaoa welcome to the internet!!',
          likesCount: 543,
        },
        { id: 4, message: 'Please follow me', likesCount: 9999999 },
        { id: 5, message: 'free hugs(', likesCount: 0 
        },
        {
          id: 3,
          message: 'aappaoaoa welcome to the internet!!',
          likesCount: 543,
        },
        { id: 4, message: 'Please follow me', likesCount: 9999999 },
        { id: 5, message: 'free hugs(', likesCount: 0 
        },
        {
          id: 3,
          message: 'aappaoaoa welcome to the internet!!',
          likesCount: 543,
        },
        { id: 4, message: 'Please follow me', likesCount: 9999999 },
        { id: 5, message: 'free hugs(', likesCount: 0 
        },
        {
          id: 3,
          message: 'aappaoaoa welcome to the internet!!',
          likesCount: 543,
        },
        { id: 4, message: 'Please follow me', likesCount: 9999999 },
        { id: 5, message: 'free hugs(', likesCount: 0 
        },        
      ],
      newPostText: 'russkie vpered',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Lesha' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Goshan' },
        { id: 4, name: 'Alena' },
        { id: 5, name: 'Nikita' },
        { id: 6, name: 'Oleg' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are u?' },
        { id: 3, message: 'How long have u been abroad?han' },
        { id: 4, message: 'Lol' },
      ],
    },
  },
  _callSubscriber() {
    console.log('state was changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      }
      this._state.profilePage.posts.unshift(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  },
}

export default store
window.store = store

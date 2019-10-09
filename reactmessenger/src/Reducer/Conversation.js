const initial = {
  name: '',
  message: '',
  conversationList: [],
  conversations: []
}
const conversation = (state = initial, action) => {
  switch (action.type) {
    case 'SAVE_USER_NAME':
      console.log('actiion', action)
      return {
        ...state,
        firstname: action.payload.fName,
        idnum: action.payload.idd,
        lastname: action.payload.lName,
        useremail: action.payload.email,
        userpic: action.payload.profPic
      }
    case 'SAVE_MESSAGE':
      console.log('aaa', state)
      return { text1: action.payload,
        ...state,
        conversations: [
          ...state.conversations,
          {
            text: action.payload
          }
        ]
      }
    case 'CREATE_CONVERSATION':
      return {
        ...state,
        conversationList: [
          {
            firstName: action.payload,
            lastName: '',
            lastestM: '',
            unSeen: '',
            profPic: 'http://.....'
          },
          ...state.conversationList
        ]
      }
    case 'SET_CONVERSATION_ID':
      return (
        { ...state,
          idnum: action.payload
        }
      )
    default:
      return state
  }
}

export default conversation

export const getUserName = (firstName, lastName, email, idnum) => ({
  type: 'SAVE_USER_NAME',
  payload: {fName: firstName, idd: idnum, lName: lastName, email: email }
})

export const getMessage = (message) => ({
  type: 'SAVE_MESSAGE',
  payload: message
})

export const createNewConversation = (name) => ({
  type: 'CREATE_CONVERSATION',
  payload: name
})

export const setConv = (conv) => ({
  type: 'SET_CONVERSATION_ID',
  payload: conv
})

// action types
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_CONTACT = "UPDATE_CONTACT"


// action creators
export const userUpdate = update => ({
    type: UPDATE_USER,
    payload: update
})

export const contactUpdate = newContact => ({
    type: UPDATE_CONTACT,
    payload: newContact
})

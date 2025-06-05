
export const add = (unit=1) => {
    return {
        type: 'ADD',
        unit
    }
}

export const remove  = (unit=1) => {
    return {
        type: 'REMOVE',
        unit
    }
}
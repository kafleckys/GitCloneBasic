const AlertReducer = (state,action) =>{
switch(action.type)
{ 
    case 'GENERATE_ALERT':
        return action.payload
    case 'REMOVE_ALERT':
        return null;
    default:
        return state;
}
}

export default AlertReducer;
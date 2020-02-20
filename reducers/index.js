import {combineReducers} from 'redux'
const initValue = {
    name:"asd",
    pw:"123"
}

const setUser = (state = initValue ,action) =>{
    
    switch(action.type){
        case "SET_NAME":
            return state;
    }

    return state;
    
}

const reducer = combineReducers({
    setUser
  })
  export default reducer
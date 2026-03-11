import {applyMiddleware, createStore} from 'redux'
import {thunk} from 'redux-thunk'

const ADD_TASK="task/add"
const DELETE_TASK="task/delete"
const FETCH_TASK="task/fetch"

const initialState={
    task:[],
}
//reducer function
const taskReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            
            return {
                ...state,
                task:[...state.task,action.payload],
            }
        case DELETE_TASK:
            const updatedTask=state.task.filter((curTask,index)=>{
                return index!==action.payload
            })
            return {
                ...state,
                task:updatedTask,
            }

        case FETCH_TASK:
            return{
                ...state,
                task:[...state.task,...action.payload]
            }
    
        default: return state;
    }
}

//create redux store

export const store=createStore(taskReducer,applyMiddleware(thunk))
console.log(store);


console.log("Initial State : ",store.getState());


//dispatch action
store.dispatch({type:ADD_TASK,payload:"Tushar Jana"})
console.log(store.getState());

store.dispatch(addTask("TJ JANA"))
console.log(store.getState());

store.dispatch(deleteTask(1))
console.log(store.getState());

store.dispatch(addTask("TJ JANA"))
console.log(store.getState());
store.dispatch(addTask("TJ JANA"))
console.log(store.getState());


//action creators

export function addTask(data){
    return {type:ADD_TASK,payload:data}
}

export function deleteTask(id){
    return {type:DELETE_TASK,payload:id}
}

export function fetchTask(){
    return async(dispatch)=>{
        try {
            const res=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            const task=await res.json()
            dispatch({type:FETCH_TASK,payload:task.map(x=>x.title)})
        } catch (error) {
            console.log(error);
            
        }
    }
}
import {applyMiddleware, createStore} from 'redux'
import {thunk} from 'redux-thunk'

import {configureStore, createSlice} from '@reduxjs/toolkit'

//---OLD
// const ADD_TASK="task/add"
// const DELETE_TASK="task/delete"
// const FETCH_TASK="task/fetch"

const initialState={
    task:[],
}
//reducer function      //OLD
// const taskReducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case ADD_TASK:
            
//             return {
//                 ...state,
//                 task:[...state.task,action.payload],
//             }
//         case DELETE_TASK:
//             const updatedTask=state.task.filter((curTask,index)=>{
//                 return index!==action.payload
//             })
//             return {
//                 ...state,
//                 task:updatedTask,
//             }

//         case FETCH_TASK:
//             return{
//                 ...state,
//                 task:[...state.task,...action.payload]
//             }
    
//         default: return state;
//     }
// }


//Redux TK Slice()  ---NEW ------ inplace of reducer function
const taskReducer=createSlice({
    name:"task",
    initialState:initialState,  //here we can just write initialState only as if key and value are same 
    reducers:{
        addTask(state,action){
            state.task.push(action.payload)
            // state.task=[...state.task,action.payload]
        },
        deleteTask(state,action){
            state.task=state.task.filter(
                (curTask,idx)=>idx!==action.payload
            )
        },
    }
})
// console.log(taskReducer);

//new 
export const {addTask,deleteTask}=taskReducer.actions;

//! ------OLD ========== create redux store

// export const store=createStore(taskReducer,applyMiddleware(thunk))
// console.log(store);

//! ------NEW ========== create redux store

export const store=configureStore({
    reducer:{
        taskReducer:taskReducer.reducer,    //the reducer function      //Other reducer can be added here 
    },
})
console.log(store.dispatch(addTask("ALOO")));




// console.log("Initial State : ",store.getState());


// //dispatch action    --OLd
// store.dispatch({type:ADD_TASK,payload:"Tushar Jana"})
// console.log(store.getState());

// store.dispatch(addTask("TJ JANA"))
// console.log(store.getState());

// store.dispatch(deleteTask(1))
// console.log(store.getState());


//action creators
//OLD
// export function addTask(data){
//     return {type:ADD_TASK,payload:data}
// }

// export function deleteTask(id){
//     return {type:DELETE_TASK,payload:id}
// }

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
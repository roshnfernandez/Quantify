import { useContext, createContext, useReducer } from "react"
import PropType from "prop-types"
import { Api } from "./api";

//conext object
const globalState = createContext();

//Initial context(Global state)

const initialState = {
    file : null,
    api : new Api()
};

//Reducer Function
//actionObject will hold the new value and the key in the stateObject that should be updated
function reducer(stateObject, actionObject){
    switch (actionObject.type){
        case "FILE" : return ({...stateObject, file : actionObject.value});
        default: throw new Error("Unhandled action type : " + actionObject.type);
    }
}

//Contect Wrapper ( The entire application should be wrapped within this to have access of the global state)
function ContextProvider({children}){

    //The dispatch acts as the useState for the globalState object
    //It is basically the reducer method where the stateObject prop is the current state that is passed by the useReducer hook
    //The action object is passed by the dispatch method like dispatch(actionObject)

    const [state, dispatch] = useReducer(reducer, initialState);

    return <globalState.Provider value={[state, dispatch]}>{children}</globalState.Provider>
}

//Custom hook to simplify calling of useContext
function useGlobalState(){
    const context = useContext(globalState);
    if(!context) throw new Error("Hook not used within context provider")
    return context;
}

//Prop condition(Directives)
ContextProvider.prototype = {
    children : PropType.node.isRequired
}

export {
    ContextProvider,
    useGlobalState
}
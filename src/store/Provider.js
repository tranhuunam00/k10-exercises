import { useReducer } from "react";
import Context from "./context";
import Reducer,{initState} from "./reducer";
function Provider ({children}) {
    const [state , dispatch] =useReducer(Reducer,initState)
    return (
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Provider
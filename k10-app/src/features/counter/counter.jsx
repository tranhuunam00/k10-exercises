import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterSlice";

export function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(decrement())}>Trừ</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>Công</button>
            
        </div>
    )
}
export default Counter
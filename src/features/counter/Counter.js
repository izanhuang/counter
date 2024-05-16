import { useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  function resetAll() {
    setIncrementAmount(0)
    dispatch(reset())
  }

  return (
    <section>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter;
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
  const [input, setInput] = useState(0);

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const showColor = useSelector((state) => state.counter.changeColor);
  const message = useSelector((state) => state.counter.message);

  // for auth
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseBy = () => {
    dispatch(counterActions.increaseBY({ value: +input }));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const toggleColor = () => {
    dispatch(counterActions.changeColor());
  };

  const resetHandler = () => {
    dispatch(counterActions.resetCounter());
  };

  const helperCounter = showCounter ? <>{counter}</> : 'Counter App';

  const classHelper = showColor
    ? `${classes.value} ${classes.valueChange}`
    : `${classes.value}`;

  const disableButtonClassHelper =
    counter < 0 ? (
      <button disabled onClick={decrementHandler}>
        decrement
      </button>
    ) : (
      <button onClick={decrementHandler}>decrease by 1</button>
    );

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(0);
  };

  const showAfterLogin = (
    <>
      {' '}
      <div className={classHelper}>{counter < 0 ? message : helperCounter}</div>
      <form className={classes.formCounter} onSubmit={handleSubmit}>
        <label htmlFor="number">Enter Number</label>
        <input
          type="number"
          min="0"
          max="50"
          onChange={handleChange}
          value={input}
        />
        <div className={classes.inputButton}>
          <button>Reset</button>
        </div>
      </form>
      <div className={classes.buttonStyle}>
        <button onClick={incrementHandler}>increase by 1</button>
        <button onClick={increaseBy}>increase by entered num </button>
        {disableButtonClassHelper}

        {/* <button onClick={decrementHandler}>decrement</button> */}
      </div>
      <div className={classes.buttonStyle}>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
        <button onClick={resetHandler}>Restart to Zero</button>
        <button onClick={toggleColor}>Toggle Color</button>
      </div>
    </>
  );

  const logInMessage = (
    <section className={classes.messageStyle}>
      <p>Please login to play the counter game</p>
    </section>
  );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isAuth ? showAfterLogin : logInMessage}
    </main>
  );
};

export default Counter;

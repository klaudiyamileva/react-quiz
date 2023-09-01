import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "decreaseSeconds" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {/* {seconds >= 10 ? `${mins}:${seconds}` : `${mins}:${seconds}0`} */}
      {mins < 10 && 0}{mins}:{seconds < 10 && 0}{seconds}
    </div>
  );
}

export default Timer;

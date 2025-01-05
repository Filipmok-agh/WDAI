import { useState, useEffect } from "react";

function Odliczanie() {
  const [isActive, setIsActive] = useState(false);
  const [timer, setTimer] = useState(15);
  const [napis, setNapis] = useState("Start");
  const [isDisabled, setDisabled] = useState(false)
  useEffect(() => {
    let intervalId: number | undefined;
    if(timer<=0)
    {
        setDisabled(true)
        setIsActive(false)
        setNapis("koniec odliczania")
        return 
    }
    if (isActive) {
      intervalId = window.setInterval(() => {
        setTimer((prevTimer) => Math.round((prevTimer-0.1)*10)/10);
      }, 100); 
    }

    return () => {
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [isActive,timer]);

  function change()
  {
    if(timer===0)
    {
        return
    }
    if (isActive===false)
    {
        setIsActive(true)
        setNapis("Stop")
    }
    else
    {
        setIsActive(false)
        setNapis("Sop")
    }
  }
  return (
    <div >
      <div>
        Timer: {timer}
      </div>
      <button onClick={change} disabled={isDisabled}>
        {napis}
      </button>

    </div>
  );
}

export default Odliczanie;

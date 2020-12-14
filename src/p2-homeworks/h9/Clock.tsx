import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearInterval(timerId)
    }
    const start = () => {
        stop();
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true)
    };
    const onMouseLeave = () => {
        // close
        setShow(false)
    };

    const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : `${new Date().getHours()}`
    const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : `${new Date().getMinutes()}`
    const seconds = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : `${new Date().getSeconds()}`

    const day = new Date().getDate() < 10 ? `0${new Date().getDate()}` : `${new Date().getDate()}`
    const month = new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : `${new Date().getMonth() + 1}`
    const year = `${new Date().getFullYear()}`

    const stringTime = `${hours}:${minutes}:${seconds}` // fix with date
    const stringDate = `${day}-${month}-${year}`; // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;

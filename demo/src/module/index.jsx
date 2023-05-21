import React, { useState } from "react";

export default function TimeNow() {
    const [color, setColor] = useState("")

    let time = new Date().toLocaleTimeString();
    const [checkTime, setCheckTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCheckTime(time)
    }
    setInterval(updateTime, 1000)
    return (
        <div>
            <div>
                <label style={{ color: color }} htmlFor="">Pick a Color:  </label>
                <select style={{ color: color }} onChange={(e) => setColor(e.target.value)}>
                    <option style={{ color: color }} value="red">Red</option>
                    <option style={{ color: color }} value="blue">Blue</option>
                    <option style={{ color: color }} value="green">Green</option>
                </select>
            </div>
            <div id="time" style={{ color: color }}>
                {checkTime}
            </div>
        </div>
    )
}
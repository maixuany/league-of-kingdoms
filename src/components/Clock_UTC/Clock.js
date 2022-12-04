import React, { useEffect, useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toUTCString());

    useEffect(()=>{
        let i = setInterval(()=>{setTime(new Date().toUTCString())}, 1000)
        return function clear(){clearInterval(i)}
    },[])

    return<>
        ${time}
    </>
};

export default Clock;
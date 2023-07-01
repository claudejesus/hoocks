import React, {useState} from "react"; // 7.2k (gzipped: 2.9k)

const StateTutorial = () => {
    let counter = 0;
    const increment = () =>  {
        counter = counter + 1;
        console.log(counter);
    };
    return (
    <div> 
        {counter} <button onclick={increment}>Increment</button>
    </div>
    );
};

export default StateTutorial;


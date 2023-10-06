import React from 'react';
import {isEvenIndexSumGreater} from "./tasks-08/lesson_8/lesson_8";

export const Check = () => {
    let testValue = isEvenIndexSumGreater([100, 1, 200, 2]);
    console.log(testValue)

    let another = isEvenIndexSumGreater([1, 100, 2, 200]);
    console.log(another);
    return (
        <div>

        </div>
    );
};
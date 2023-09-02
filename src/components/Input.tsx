import React, {RefObject, KeyboardEvent} from 'react';

type InputPropsType = {
    newTitle: RefObject<HTMLInputElement>
    callback: () => void
}
export const Input: React.FC<InputPropsType> = ({newTitle, callback}) => {
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.code === 'Enter') {
            callback();
        }
    }
    return (
        <input  type='text'
                ref={newTitle}
                onKeyDown={onKeyDownHandler}
        />
    );
};
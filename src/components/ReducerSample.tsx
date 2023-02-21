import React, { useReducer } from 'react';

 // color를 타입으로 지정
 type Color = 'black' | 'pink' | 'white';
 // state 타입 지정
 type State = {
     count: number,
     text: string,
     color: Color,
     isGood: boolean
 }
 // action 타입 지정
 type Action = {type: 'SET_COUNT', count: number} | 
 {type: 'SET_TEXT', text: string} | {type: 'SET_COLOR', color: Color} | 
 {type: 'SET_GOOD', isGood: boolean}

 // 함수의 매개변수에는 타입을 반드시 지정해야 한다 !
 // reducer 함수는 새로운 state를 리턴하기 때문에
 // 리턴하는 타입을 지정해줘야 한다
 function reducer(state: State, action: Action): State {
     switch(action.type) {
         case 'SET_COUNT':
             return {
                 ...state,
                 count: action.count
             };
         case 'SET_TEXT':
             return {
                 ...state,
                 text: action.text
             };
         case 'SET_COLOR':
             return {
                 ...state,
                 color: action.color
             };
         case 'SET_GOOD':
             return {
                 ...state,
                 isGood: action.isGood
             };
         default:
             return state;
     }
 }
const ReducerSample = () => {
   const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'black',
    isGood: true
   });

   const setCount = () => dispatch({type: 'SET_COUNT', count: 5});
   const setText = () => dispatch({type: 'SET_TEXT', text: 'bye'});
   const setColor = () => dispatch({type: 'SET_COLOR', color: 'pink'});
   const setToggle = () => dispatch({type: 'SET_GOOD', isGood: true});
    return (
        <div>
            <p>count: {state.count}</p>
            <p>text: {state.text}</p>
            <p>color: {state.color}</p>
            <p>isGood: {state.isGood ? 'true' : 'false'}</p>
            <div>
                <button onClick={setCount}>SET_COUNT</button>
                <button onClick={setText}>SET_TEXT</button>
                <button onClick={setColor}>SET_COLOR</button>
                <button onClick={setToggle}>SET_GOOD</button>
            </div>
        </div>
    );
};

export default ReducerSample;
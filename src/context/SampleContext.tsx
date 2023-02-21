import React, { createContext, Dispatch, useContext, useReducer } from 'react';

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
type Action = {type: 'SET_COUNT', count: number}
| {type: 'SET_TEXT', text: string}
| {type: 'SET_COLOR', color: Color}
| {type: 'SET_GOOD'}
// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올 수 있음)
// action들의 타입을 Dispatch 제너릭으로 지정
type SampleDispatch = Dispatch<Action>;

// Context 생성하기
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서 생성
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
                isGood: !state.isGood
            };
        default:
            return state;
    }
}

const SampleContext = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        color: 'black',
        text: 'hello',
        isGood: true
    })
    return ( 
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
};

export default SampleContext;

// state와 dispatch를 사용하기 위한 커스텀 훅 생성하기  
export function useSampleState() {
    const state = useContext(SampleStateContext);
    return state;
}
export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if(!dispatch) throw new Error('유효하지 않습니다.');
    return dispatch;
}
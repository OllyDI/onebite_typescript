import { ReactElement, useState } from "react";
import { useTodoDisaptch } from "../App";

interface Props {
    children: ReactElement; // children 타입
}

export default function Editor(props: Props) {

    const dispatch = useTodoDisaptch();

    const [text, setText] = useState('');
    
    // 이벤트 핸들러 타입 정의
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText('');
    }

    return (
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>추가</button>
        </div>
    )
}
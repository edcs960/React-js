import React, { useState } from "react";

function Inputsample() {
    const [input, setinput] = useState({
        name: "",
        nickname: "",
    });
    const { name, nickname } = input;
    console.log(input);
    const onchange = e => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value,
        });
    };
    const onreset = () => {};
    return (
        <div>
            <input placeholder="이름" name="name" onChange={onchange} value={name} />
            <input placeholder="닉네임" name="nickname" onChange={onchange} value={nickname} />
            <button onClick={onreset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default Inputsample;

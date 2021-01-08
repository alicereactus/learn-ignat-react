import React, {useState} from "react";

import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    const onChangeRange = (newValue: number) => {
        setValue1(newValue)
    }

    const onChangeDoubleRange = (newValues: number | number[]) => {
        if (typeof newValues === "object") {
            setValue1(newValues[0])
            setValue2(newValues[1])
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={onChangeRange}// сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeDoubleRange={onChangeDoubleRange} // сделать так чтоб value1 и value2 изменялось
                />
                </span>
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;

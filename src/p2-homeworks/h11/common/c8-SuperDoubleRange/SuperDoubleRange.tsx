import React, { ChangeEvent } from "react";
import Slider from "@material-ui/core/Slider";

type SuperDoubleRangePropsType = {
    value?: Array<number>
    onChangeDoubleRange?: (newValues: number | number[]) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value, onChangeDoubleRange
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeCallback = (event: ChangeEvent<{}>, newValues: number | number[]): void => {
        onChangeDoubleRange && onChangeDoubleRange(newValues)
    }

    return (
        <>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;

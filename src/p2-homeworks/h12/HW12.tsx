import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { AppStoreType } from "../h10/bll/store";

import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeAC } from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.themes.theme); // useSelector

    const dispatch = useDispatch()
    const onChangeCallback = (option: string) => {
        dispatch(changeThemeAC(option))
    }

    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
            options={themes}
            onChangeOption={onChangeCallback} />

            <hr/>
        </div>
    );
}

export default HW12;

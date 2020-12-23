import React from "react";

import { useSelector, useDispatch } from 'react-redux'

import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { loadingAC, LoadingType } from "./bll/loadingReducer";
import { AppStoreType } from "./bll/store";

function HW10() {
    const loading = useSelector<AppStoreType, LoadingType>(state => state.loading)
    const dispatch = useDispatch()
    // const loading = false;

    const setLoading = (isLoading: boolean) => {
        dispatch(loadingAC(isLoading))
        setTimeout(() => dispatch(loadingAC(!isLoading)), 5000)
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading.isLoading
                ? (
                    <div><img src='https://i.pinimg.com/originals/30/1f/3b/301f3bc4d534302a51899cbc831c7389.gif' alt='loader' style={{ width: '100px', height: '100px' }}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={() => setLoading(!loading.isLoading)}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;

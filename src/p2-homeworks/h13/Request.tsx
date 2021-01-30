import React, { useEffect, useState } from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { requestsAPI, RESPONSE } from "./api";

function Request() {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        requestsAPI.postRequest(checked)
    }, [checked])

    return (
        <div>
            <SuperButton 
            onClick={() => setChecked(!checked)}
            >
            GET RESPONSE
            </SuperButton>
            <SuperCheckbox
            checked={checked}
            >
            {RESPONSE}
            </SuperCheckbox>
        </div>
    );
}

export default Request;
import React from "react";
import "./CurrencyName.css"

export const CurrencyName = React.memo(({cc, current, rate}) => {

    
        return <option className="select-item" selected={cc === current} value={`${cc}`}>{cc}</option>
    
})
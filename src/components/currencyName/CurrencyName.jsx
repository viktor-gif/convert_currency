import React from "react";
import "./CurrencyName.css"

export const CurrencyName = React.memo(({cc, txt, current, rate}) => {

    
        return <option className="select-item" selected={cc === current} value={rate}>{txt}</option>
    
})
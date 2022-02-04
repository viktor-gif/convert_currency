import React from "react";

export const CurrencyName = React.memo(({cc, txt, current, rate}) => {

    
        return <option selected={cc === current} value={rate}>{txt}</option>
    
})
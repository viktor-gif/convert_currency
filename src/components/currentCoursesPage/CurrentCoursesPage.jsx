
import React, { useState } from "react";

export const CurrentCoursesPage = React.memo((props) => {
    const [baseCurrencyRate, setBaseCurrencyRate] = useState(1)
    console.log(baseCurrencyRate)

    const mainCurrencyes = props.currencyCourses?.filter(c => {
        return c.cc === "USD" || c.cc === "UAH" || c.cc === "EUR" || c.cc === "RUB"
    })

    const mainCurrencyesItems = mainCurrencyes && mainCurrencyes
    .filter(m => m.rate / baseCurrencyRate !== 1)
    .map(m => {
        return <div key={m.r030}>{m.cc}:{" "} 
        <span>{Math.round(m.rate / baseCurrencyRate * 100) / 100}</span></div>
    })

    console.log(mainCurrencyes)

    return <div>
        <div>
        <div className="inputItem">
            <label className="loginLabel" htmlFor="changing">
                <select id="changing" name="changing"
                    onChange={e => setBaseCurrencyRate(e.currentTarget.value)}>
                    {props.currensyNamesOptions("UAH")}
                </select>
            </label>
        </div>
        {mainCurrencyes && <div>{mainCurrencyesItems}</div>}
        </div>
    </div>
})
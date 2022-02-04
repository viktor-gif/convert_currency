
import React, { useState } from "react";
import { Preloader } from "../common/preloader/preloader";
import "./CurrentCoursesPage.css"

export const CurrentCoursesPage = React.memo((props) => {
    const [baseCurrencyRate, setBaseCurrencyRate] = useState(1)

    const mainCurrencyes = props.currencyCourses?.filter(c => {
        return c.cc === "USD" || c.cc === "UAH" || c.cc === "EUR" || c.cc === "RUB"
    })

    const mainCurrencyesItems = mainCurrencyes && mainCurrencyes
    .filter(m => m.rate / baseCurrencyRate !== 1)
    .map(m => {
        return <div className="current-display__item" key={m.r030}>{m.cc}:{" "} 
        <span>{Math.round(m.rate / baseCurrencyRate * 100) / 100}</span></div>
    })

    if (props.isProgress) {
        return <Preloader />
    }

    return <div>
        <div className="currentCourses__item">
            <label htmlFor="changing">
                <select className="currentCourses__input" id="changing" name="changing"
                    onChange={e => setBaseCurrencyRate(e.currentTarget.value)}>
                    {props.currensyNamesOptions("UAH")}
                </select>
            </label>
        </div>
        {mainCurrencyes && <div className="current-display">{mainCurrencyesItems}</div>}
        
    </div>
})
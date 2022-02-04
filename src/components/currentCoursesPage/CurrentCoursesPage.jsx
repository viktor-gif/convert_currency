
import React, { useState } from "react";
import { Preloader } from "../common/preloader/preloader";
import "./CurrentCoursesPage.css"

export const CurrentCoursesPage = React.memo((props) => {
    const [baseCurrencyName, setBaseCurrencyName] = useState("UAH")

    const mainCurrencyes = props.currencyCourses?.filter(c => {
        return c.cc === "USD" || c.cc === "UAH" || c.cc === "EUR" || c.cc === "RUB"
    })

    const baseCurrencyRate = props.currencyCourses?.filter(
        c => c.cc === baseCurrencyName
    )[0].rate

        console.log(baseCurrencyRate)

    const mainCurrencyesItems = mainCurrencyes && mainCurrencyes
    .filter(m => m.rate / baseCurrencyRate !== 1)
    .map(m => {
        return <div className="current-display__item" key={m.r030}>
            <span>1</span>{" "}
            {m.cc}{" "}={" "} 
        <span>{(Math.round(m.rate / baseCurrencyRate * 100) / 100).toFixed(2)}</span>{" "}
            {baseCurrencyName}</div>
    })

    const onSelectOption = (e) => {
        setBaseCurrencyName(e.currentTarget.value)
        console.log(e);
    }

    if (props.requestInProgress) {
        return <Preloader />
    }

    return <div>
        <div className="currentCourses__item">
            <label htmlFor="changing">
                <span className="currentCourses__to-currency">Current Rate to</span>
                <select className="currentCourses__input" id="changing" name="changing"
                    onChange={onSelectOption}>
                    {props.currensyNamesOptions}
                </select>
            </label>
        </div>
        {mainCurrencyes && <div className="current-display">
            {mainCurrencyesItems}
        </div>}
        
    </div>
})
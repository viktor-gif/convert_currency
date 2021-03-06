import React, { useState } from "react";
import { Preloader } from "../common/preloader/preloader";
import "./ConverterPage.css"

export const ConverterPage = React.memo((props) => {

    const [sum, setSum] = useState(1)
    const [changeableName, setChangeableName] = useState(props.defaultCurrency)
    const [changingName, setChangingName] = useState(props.defaultCurrency)
    const [result, setResult] = useState(1)

    const changeableRate = props.currencyCourses?.filter(
        c => c.cc === changeableName
    )[0].rate

    const baseCurrencyRate = props.currencyCourses?.filter(
        c => c.cc === changingName
    )[0].rate

    const calculateResult = () => {

        let currentResult

        if (+sum > 0) {
            currentResult = (Math.round(((changeableRate / baseCurrencyRate) * sum) * 100) / 100)
            .toFixed(2)
        } else if (sum === '0') {
            currentResult = 0
        } else {
            currentResult = null
        }
        
        setResult(currentResult)
    }

    const onPageEnterPress = (e) => {
        if (e.charCode === 13) {
            calculateResult()
        }
    }

    const onSumInputChange = e => {
        setSum(e.currentTarget.value)
    }

    if (props.requestInProgress) {
        return <Preloader />
    }

    let changeSizeOfSumInput = sum.length > 8 ? "converter__input_sum-larger" : ""

    return <div className="converter" onKeyPress={onPageEnterPress}>
                    
        <div className="converter__item converter__item_input">
            <span className="converter__description-field converter__description-field_sum">Currency amount</span>
            <label className="loginLabel" htmlFor="sum">
                <input className={`converter__input converter__input_sum ${changeSizeOfSumInput}`} type="number" id="sum" stap="any"
                name="sum" placeholder="Sum"
                value={sum} onChange={onSumInputChange} />
            </label>
        </div>
        <div className="converter__item converter__item_from-to-exchange">
            <span className="converter__description-field">From</span>
            <label className="converter__change-from-label" className="loginLabel" htmlFor="changeable">
                <select className="converter__input" id="changeable" name="changeable"
                onChange={e => setChangeableName(e.currentTarget.value)}>
                    {props.currensyNamesOptions}
                </select>
            </label>
            <span className="converter__description-field converter__description-field_to">To</span>
            <label className="loginLabel" htmlFor="changing">
                <select className="converter__input" id="changing" name="changing"
                onChange={e => setChangingName(e.currentTarget.value)}>
                    {props.currensyNamesOptions}
                </select>
            </label>
        </div>

                    
        <button className="converter__calc-button" onClick={calculateResult}>Calculate</button>

        {result || result === 0
            ? <div className="converter__result">{`${sum} ${changeableName} = ${result} ${changingName}`}</div>
            : <div className="converter__error-result">Please, enter correct sum of money</div>
        }
    </div>
    
})
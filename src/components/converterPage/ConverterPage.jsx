import React, { useState } from "react";
import { Preloader } from "../common/preloader/preloader";
import "./ConverterPage.css"


export const ConverterPage = React.memo((props) => {

    const [sum, setSum] = useState(0)
    const [changeable, setChangeable] = useState(1)
    const [changing, setChanging] = useState(1)
    const [result, setResult] = useState(0)

    if (props.isProgress) {
        return <Preloader />
    }

    return <div className="converter">
                    
        <div className="converter__item converter__item_input">
            <div className="converter__field-description">Кідькість валюти в одиницях:</div>
            <label className="loginLabel" htmlFor="sum">
                <input className="converter__input" type="number" id="sum"
                name="sum" placeholder="Sum"
                value={sum} onChange={e => setSum(e.currentTarget.value)} />
            </label>
        </div>
        <div className="converter__item converter__item_select">
            <div className="converter__field-description">Міняєм валюту:</div>
            <label className="loginLabel" htmlFor="changeable">
                <select className="converter__input" id="changeable" name="changeable"
                onChange={e => setChangeable(e.currentTarget.value)}>
                    <option selected value="Виберіть валюту">Виберіть валюту</option>
                    {props.currensyNamesOptions("")}
                </select>
            </label>
        </div>
        <div className="converter__item converter__item_select">
            <div className="converter__field-description">На валюту:</div>
            <label className="loginLabel" htmlFor="changing">
                <select className="converter__input" id="changing" name="changing"
                onChange={e => setChanging(e.currentTarget.value)}>
                    <option selected value="Виберіть валюту">Виберіть валюту</option>
                    {props.currensyNamesOptions("")}
                </select>
            </label>
        </div>

                    
        <button className="converter__calc-button" onClick={() => setResult(Math.round(((changeable / changing) * sum) * 100) / 100)}>Порахувати</button>

        <div className="converter__result">{result}</div>

    </div>
    
})
import React, { useState } from "react";

export const ConverterPage = React.memo((props) => {

    const [sum, setSum] = useState(0)
    const [changeable, setChangeable] = useState(1)
    const [changing, setChanging] = useState(1)
    const [result, setResult] = useState(0)
    console.log(changeable)

    
    

    return <div>
                    
        <div className="inputItem">
            <label className="loginLabel" htmlFor="sum">
                <input type="number" id="sum"
                name="sum" placeholder="Sum"
                value={sum} onChange={e => setSum(e.currentTarget.value)} />
            </label>
        </div>
        <div className="inputItem">
            <label className="loginLabel" htmlFor="changeable">
                <select id="changeable" name="changeable"
                onChange={e => setChangeable(e.currentTarget.value)}>
                    <option selected value="Виберіть валюту">Виберіть валюту</option>
                    {props.currensyNamesOptions("")}
                </select>
            </label>
        </div>
        <div className="inputItem">
            <label className="loginLabel" htmlFor="changing">
                <select id="changing" name="changing"
                onChange={e => setChanging(e.currentTarget.value)}>
                    <option selected value="Виберіть валюту">Виберіть валюту</option>
                    {props.currensyNamesOptions("")}
                </select>
            </label>
        </div>

                    
        <button onClick={() => setResult(Math.round(((changeable / changing) * sum) * 100) / 100)}>submit</button>

        <div>{result}</div>

    </div>
    
    
    // return <div>
    //     <Formik
    //         initialValues={{
    //             sum: 0,
    //             changeable: '',
    //             changing:  '',
    //         }}
    //         onSubmit={(val) => {
    //             console.log(val)
    //         }}
    //         >
            
    //         {({ errors, touched, validateField, validateForm }) => (
                
    //             <Form>
                    
    //                 <div className="inputItem">
    //                     <label className="loginLabel" htmlFor="sum">
    //                         <Field
    //                         type="number" id="sum" component="input"
    //                         name="sum" placeholder="Sum" />
    //                     </label>
    //                 </div>
    //                 <div className="inputItem">
    //                     <label className="loginLabel" htmlFor="changeable">
                            {/* <Field
                            type="select" id="changeable" component="select"
                            name="changeable" placeholder="Email"
                            options={[{value: "dslfs", label: "bdffddf"}]} /> */}
                            {/* <select id="changeable" name="changeable">
                                {props.currensyNamesOptions("USD")}
                            </select> */}
                    //         <Select
                    //                 id={"changeable"}
                    //                 type={"text"}
                    //                 value={'values.flavors'}
                    //                 onChange={option => setFieldValue("flavors", option)}
                    //                 options={[{value: "dslfs", label: "bdffddf"}]}
                                    
                    //             />
                    //     </label>
                    // </div>
                    // <div className="inputItem">
                    //     <label className="loginLabel" htmlFor="changing">
                            {/* <Field
                            type="select" id="email" component="input"
                            name="email" placeholder="Email" /> */}
                            {/* <select id="changing" name="changing">
                                {props.currensyNamesOptions("UAH")}
                            </select>
                        </label>
                    </div>

                    
                    <button type="submit">submit</button>
                </Form>
            )}
        </Formik>
    </div> */}
})
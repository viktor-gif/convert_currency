import React,{ useEffect, useState } from 'react';
import './App.css';
import './components/converterPage/ConverterPage.css';

import { ConverterPage } from './components/converterPage/ConverterPage';
import { CurrentCoursesPage } from './components/currentCoursesPage/CurrentCoursesPage';
import { Header } from './components/header/Header';
import { HashRouter, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { getCurrencyCourses } from './redux/app-reducer'
import { compose } from 'redux';
import store from './redux/redux-store';
import { CurrencyName } from './components/currencyName/CurrencyName';

const App = React.memo((props) => {

  const [defaultCurrency, setDefaultCurrency] = useState("UAH")
  const [isAppActive, setAppActive] = useState(false)

  useEffect(() => {
    props.getCurrencyCourses()
  }, [])

  const currensyNamesOptions = props.currencyCourses?.map(c => {
    return <CurrencyName key={c.r030} cc={c.cc} rate={c.rate} current={defaultCurrency} />
  })

  return (
      <div className="App">
        {!isAppActive ?
        <div className="defalt-currency">
          <div className="converter__item converter__item_from-to-exchange">
              <span className="converter__description-field">
                Choose a default currency
              </span>
              <label className="converter__change-from-label" className="loginLabel" htmlFor="changeable">
                  <select className="converter__input" id="changeable" name="changeable"
                  onChange={e => setDefaultCurrency(e.currentTarget.value)}>
                      {currensyNamesOptions}
                  </select>
              </label>
          </div>
          <button className="converter__calc-button" onClick={() => setAppActive(true)}>Set default value</button>
        </div>
        :
        <div className="mainWrap">
          <Header />
          <main>
            <Route path="/converter" render={() => <ConverterPage currencyCourses={props.currencyCourses}
              currensyNamesOptions={currensyNamesOptions}requestInProgress={props.requestInProgress}
              defaultCurrency={defaultCurrency} />} />
            <Route path="/current" render={() => <CurrentCoursesPage currencyCourses={props.currencyCourses}
              currensyNamesOptions={currensyNamesOptions}requestInProgress={props.requestInProgress}
              defaultCurrency={defaultCurrency} />} />
            {props.errorMessage && <Error errorMessage={props.errorMessage} />}
          </main>
        </div>
        }
      </div>
  );
})

const Error = (props) => {
  return <div className="errorMessage">
    {props.errorMessage}
    <div className="errorRecomendations">
      Please check your network connection or try later
    </div>
  </div>
}

const mapStateToProps = (state) => ({
  currencyCourses: state.app.currencyCourses,
  requestInProgress: state.app.requestInProgress,
  errorMessage: state.app.errorMessage
})

const AppContainer = compose (
  connect(mapStateToProps, { getCurrencyCourses })
)(App);

const AppWrapper = React.memo(() => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
})
export default AppWrapper;
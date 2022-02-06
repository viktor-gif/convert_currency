import React from 'react';
import './App.css';
import { ConverterPage } from './components/converterPage/ConverterPage';
import { CurrentCoursesPage } from './components/currentCoursesPage/CurrentCoursesPage';
import { Header } from './components/header/Header';
import { HashRouter, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { getCurrencyCourses } from './redux/app-reducer'
import { compose } from 'redux';
import store from './redux/redux-store';
import { CurrencyName } from './components/currencyName/CurrencyName';

const App = React.memo((props) => {

  useEffect(() => {
    props.getCurrencyCourses()
  }, [])

  console.log(props.errorMessage)

  const currensyNamesOptions = props.currencyCourses?.map(c => {
    return <CurrencyName key={c.r030} cc={c.cc} rate={c.rate} current={"UAH"} />
  })

  return (
      <div className="App">
          <Header />
        <main>
          <Route path="/converter" render={() => <ConverterPage currencyCourses={props.currencyCourses}
            currensyNamesOptions={currensyNamesOptions}requestInProgress={props.requestInProgress} />} />
          <Route path="/current" render={() => <CurrentCoursesPage currencyCourses={props.currencyCourses}
            currensyNamesOptions={currensyNamesOptions}requestInProgress={props.requestInProgress} />} />
          {props.errorMessage && <Error errorMessage={props.errorMessage} />}
        </main>
      </div>
  );
})

const Error = (props) => {
  return <div className="errorMessage">{props.errorMessage}</div>
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
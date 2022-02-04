import React from 'react';
import './App.css';
import { ConverterPage } from './components/converterPage/ConverterPage';
import { CurrentCoursesPage } from './components/currentCoursesPage/CurrentCoursesPage';
import { Header } from './components/header/Header';
import { HashRouter, Route, withRouter } from 'react-router-dom';
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

  const currensyNamesOptions = (current) => 
    {return props.currencyCourses?.map(c => {
        return <CurrencyName key={c.r030} cc={c.cc} rate={c.rate} txt={c.txt} current={current} />
    })}

  return (
      <div className="App">
          <Header />
        <main>
          <Route path="/converter" render={() => <ConverterPage currencyCourses={props.currencyCourses}
            currensyNamesOptions={currensyNamesOptions}isProgress={props.isProgress} />} />
          <Route path="/current" render={() => <CurrentCoursesPage currencyCourses={props.currencyCourses}
            currensyNamesOptions={currensyNamesOptions}isProgress={props.isProgress} />} />
        </main>
      </div>
  );
})

const mapStateToProps = (state) => ({
  currencyCourses: state.app.currencyCourses,
  isProgress: state.app.isProgress
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
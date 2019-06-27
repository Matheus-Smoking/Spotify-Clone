import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader'
import App from './app'
import { createStore } from 'redux';
import Counter from './reducers/Counter'


const store = createStore(Counter);

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp  />
      </Provider>
    </AppContainer>,
    document.querySelector('#app')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
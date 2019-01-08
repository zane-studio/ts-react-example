import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { Provider } from 'react-redux';
import { EnthusiasmAction } from './actions'

const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
})

ReactDOM.render(
  <Provider store={store}>
    <Hello name="TypeScript" enthusiasmLevel={10} />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

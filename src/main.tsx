import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './app/index.css'
import { store } from './app/store.tsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App/>
  </Provider>
)
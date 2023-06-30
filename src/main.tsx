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

// curl -X POST "https://accounts.spotify.com/api/token" \
//   -H "Content-Type: application/x-www-form-urlencoded" \
//   -d "grant_type=client_credentials&client_id=fef1daa5363a476c8a53e5094ccbd8e6&client_secret=701c68b3b3034fd2aa005714271d5405"
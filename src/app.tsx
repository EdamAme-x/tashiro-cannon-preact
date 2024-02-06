import './app.css'
import { Panel } from './components/panel'

export function App() {

  return <>
    <h1 css={{
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center',
    }}>
      <img
        src="/icon.svg"
      />
      Preact DDoS
    </h1>
    <Panel />
  </>
}

import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'

render(<div css={{
    width: '100vw',
    height: '100vh',
    background: '#0f0f0fee',
    color: 'white',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}}>
    <App />
</div>, document.getElementById('app')!)

import { useRef, useState } from 'preact/hooks'
import './app.css'
import { isURL } from './utils/isURL';
import { fixURL } from './utils/fixURL';

export function App() {

  const [targetUrl, setTargetUrl] = useState("");
  const countRef = useRef(null);
  const statusRef = useRef(null);

  const start = () => {
    const url = fixURL(targetUrl)
    if (isURL(url)) {
      // @ts-ignore
      statusRef.current.innerHTML = "attack to " + url

      const onAttack = () => {
        fetch(url, {
          method: "GET",
        })
      }
    }else {
      // @ts-ignore
      statusRef.current.innerHTML = "url is wrong"
    }
  }

  return (
    <div css={{
      display: "flex",
      flexDirection: "column"
    }}>
      <h1 css={{
        fontSize: "2rem"
      }}>Preact 田代砲</h1>
      <input css={{
        marginBottom: "10px"
      }} defaultValue={targetUrl} onChange={(e: any) => {
        setTargetUrl((e.target as HTMLInputElement)?.value)
      }} placeholder="https://ctkp.net (攻撃対象)" />
      <button onClick={() => start()}>開始</button>
      <p>
        ステータス: <span ref={statusRef}>wait</span>
      </p>
      <p>
        攻撃回数: <span ref={countRef}>0</span>
      </p>
    </div>
  )
}

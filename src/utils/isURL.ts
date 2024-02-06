export function isURL(url: string): boolean {
    try {
        new URL(url)
        if (!url.includes(".")) {
            throw Error("no domain")
        }
        return true
    }catch {
        return false    
    }
}
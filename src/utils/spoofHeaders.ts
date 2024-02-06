export function genIP() {
    const genOneAddr = () => {
        return Math.floor(Math.random() * 255)
    }

    return `${genOneAddr()}.${genOneAddr()}.${genOneAddr()}.${genOneAddr()}`
}

export function genCookie() {
    const genOneCookie = () => {
        return `${Math.random().toString(36).substring(2, 15).repeat(10)}=${Math.random().toString(36).substring(2, 15).repeat(10).repeat(10)}; ${Math.random().toString(36).substring(2, 15).repeat(10)}=${Math.random().toString(36).substring(2, 15).repeat(10).repeat(10)}; `
    }

    return Array.from({ length: Math.floor(Math.random() * 20) + 1 }, genOneCookie).join("")
}

export function spoofHeaders() {
    return {
        "X-Forwarded-For": `${genIP()}, ${genIP()}, ${genIP()}, ${genIP()}`,
        "X-Real-IP": genIP(),
        "X-Client-IP": genIP(),
        "X-Host": genIP(),
        "X-Forwarded-Host": genIP(),
        "cookie": genCookie()
    }
}
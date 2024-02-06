export function genParam() {
    const createOneParam = () => {
        return `&` + Math.random().toString(36).substring(2, 15).repeat(10) + "=" + Math.random().toString(36).substring(2, 15).repeat(10)
    }

    return `?` + Array.from({ length: Math.floor(Math.random() * 10) + 1 }, createOneParam).join("")
}
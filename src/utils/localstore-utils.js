//创建localStorage中的key值


export function createKet(name) {
    return window.localStorage.host + '_' + name;
}

export function setItem(key, value, expire) {
    const valueObj = {
        value,
        expire
    }
    window.localStorage.setItem(key, JSON.stringify(valueObj))
}

export function getItem(key) {
    let obj = window.localStorage.getItem(key);
    if (obj) {
        let valueObject = JSON.parse(obj);
        if (Date.now() -valueObject.expire > 0) {
            window.localStorage.removeItem(key)
            return null
        } else {
            return valueObject.value;
        }
    } else {
        return null
    }
}
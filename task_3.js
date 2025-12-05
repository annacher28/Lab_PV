function findIP(str) {
    const ipPattern = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
    
    const match = str.match(ipPattern);
    return match ? match[0] : null;
}

const text = "Сервер доступен по адресу 192.168.1.100, порт 80.";
const ip = findIP(text);

console.log(ip);
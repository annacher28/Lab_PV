function findIP(str) {
    const ipPattern = /(\b?\b|1\b{2}|2[0-4]\b|25[0-5])\.(\b?\b|1\b{2}|2[0-4]\b|25[0-5])\.(\b?\b|1\b{2}|2[0-4]\b|25[0-5])\.(\b?\b|1\b{2}|2[0-4]\b|25[0-5]\.)/g
    const match = str.match(ipPattern);
    return match ? match[0] : null;
}

const text = "Сервер доступен по адресу 192.168.1.100, порт 80.";
const ip = findIP(text);

console.log(ip);

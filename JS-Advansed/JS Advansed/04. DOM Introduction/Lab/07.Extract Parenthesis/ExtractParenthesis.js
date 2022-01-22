function extract(content) {
    let contentEl = document.getElementById(content);
    let regex = /\(([^(]+)\)/g;
    let matches = contentEl.textContent.matchAll(regex);
    let result = [];
    for (const m of matches) {
        result.push(m[1])
    }
    return result.join('; ');
}
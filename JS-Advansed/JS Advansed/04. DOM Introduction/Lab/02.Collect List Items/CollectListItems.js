function extractText() {
    let liTextElements = document.getElementById('items').textContent;
    let res = document.getElementById('result');
    res.textContent = liTextElements;
}
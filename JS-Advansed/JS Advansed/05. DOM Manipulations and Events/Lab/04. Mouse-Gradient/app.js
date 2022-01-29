function attachGradientEvents() {
    let resultElement = document.querySelector('#result');
    let gradientBoxElement = document.querySelector('#gradient-box');
    
    let gradientMouseoverHandler = (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);

        resultElement.textContent = `${percent}%`;
    };
    
    gradientBoxElement.addEventListener('mousemove', gradientMouseoverHandler);
}
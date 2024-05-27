// utils.js
export const displayLog = (message) => {
    const logContainer = document.getElementById('displayLog');
    if (logContainer) {
        const logElement = document.createElement('div');
        logElement.textContent = message;
        logContainer.appendChild(logElement);
    } else {
        console.warn('No se encontró el contenedor de logs en el HTML.');
    }
};

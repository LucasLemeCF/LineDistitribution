export function paraDecimoDeSegundo(tempo) {
    const [minutos, segundos, milisegundos] = tempo.split(':');
    return ((parseInt(minutos) * 60 + parseInt(segundos)) * 1000 + parseInt(milisegundos)) / 100;
}
export function converterParaSegundos(tempo) {
    let result = tempo.slice(0, -1) + '.' + tempo.slice(-1);
    if (Number(tempo.slice(0, -1)) < 1) {
        result = '0' + result;
    }
    return result.toString();
}
export function converterParaTempo(tempo) {
    const tempoEmMilisegundos = tempo * 100;
    const minutos = Math.floor(tempoEmMilisegundos / 60000);
    const restoSegundos = tempoEmMilisegundos % 60000;
    const segundos = Math.floor(restoSegundos / 1000);
    const milisegundos = restoSegundos % 1000;
    let minutosStr = minutos.toString();
    if (minutos < 10) {
        minutosStr = '0' + minutosStr;
    }
    let segundosStr = segundos.toString();
    if (segundos < 10) {
        segundosStr = '0' + segundosStr;
    }
    let milisegundosStr = (milisegundos / 10).toString();
    if (milisegundosStr == "0") {
        milisegundosStr = '00';
    }
    return `${minutosStr}:${segundosStr}:${milisegundosStr}`;
}

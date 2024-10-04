function calcularPi() {
    const iteraciones = parseInt(document.getElementById('iteraciones').value);
    let pi = 0;
    let serie = '';
    
    for (let i = 0; i < iteraciones; i++) {
        const term = 1 / (2 * i + 1);
        if (i % 2 === 0) {
            pi += term;
            serie += (i === 0 ? '' : ' + ') + `1/${2 * i + 1}`;
        } else {
            pi -= term;
            serie += ' - ' + `1/${2 * i + 1}`;
        }
    }
    
    pi *= 4;
    serie = `π = 4 (${serie})`;
    
    document.getElementById('resultado').textContent = `π ≈ ${pi.toFixed(6)}`;
    document.getElementById('serie').textContent = serie;
}
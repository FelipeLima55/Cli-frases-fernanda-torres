const url = "https://fernanda-torres.isabelleoliveiradesign.workers.dev/"

 async function fraseParaVoceFernandaTorres() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data.quote;

    } catch (error) {
        return "Erro ao buscar frase"
    }
 }    

fraseParaVoceFernandaTorres()
.then(frase => console.log(`🎭 ${frase}`));
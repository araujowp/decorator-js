class Shuffle {

    constructor(records){
        this._records = records;
    }

    get() {
        // Cria uma cópia da coleção para não alterar a original
        const shuffledRecords = this._records.slice();
        const lastIndex = shuffledRecords.length - 1;

        // Algoritmo de Fisher-Yates (Knuth)
        for (let currentIndex = lastIndex; currentIndex > 0; currentIndex--) {
            const randomIndex = Math.floor(Math.random() * (currentIndex + 1));

            // Troca os elementos de posição usando a técnica do destructuring assignment
            [shuffledRecords[currentIndex], shuffledRecords[randomIndex]] = [shuffledRecords[randomIndex], shuffledRecords[currentIndex]];
        }

        return shuffledRecords;
    }

}
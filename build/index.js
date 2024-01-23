"use strict";
function printObjects(pessoa) {
    console.log(pessoa);
}
printObjects({
    name: "Bruce Wayne",
    vulgo: "Batman",
});
// Para executar o ts no node tem que colocar o comando no terminal: npx (node package exporter) e tsc (typescript compyler) e aí depois colcoar o src/index.ts para traduzir o que foi feito em TS para JS e aí sim pode executar o código

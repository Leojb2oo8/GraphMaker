import { openLogFile, writeInFile } from "./log.js";
openLogFile("ChartLog.txt");

const maxX = 5;
const maxY = 10;

function makeGraph(colums, rows){
    let graph = []

    for (let i=0; i<colums; i++){
        graph.push(["  "])
    }

    for (let i=0; i < graph.length; i++){
        for (let x=0; x < rows-1; x++){
            graph[i].push("  ")
        }
    }

    return graph
}

function plotGraph(graph, cordinate1, cordinate2, colur, maxX){
    let newCordinate1 = maxX - cordinate1
    if (graph[newCordinate1][cordinate2-1] == "  "){
        if (cordinate1-1==0){
            graph[newCordinate1][cordinate2-1] = "🟥"
        }
        else{
            graph[newCordinate1][cordinate2-1] = colur
        }
    }
    else{
        graph[newCordinate1][cordinate2-1] = "🟧"
    }
}




let graph = makeGraph(maxY, maxX)

plotGraph(graph, [5], [4], "🟩", maxY)

writeInFile(graph, "ChartLog.txt");
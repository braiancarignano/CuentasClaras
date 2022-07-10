const ctx = document.getElementById('myChart');
const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}

const mostrarGrafico = () => {
    renderGrafico()
} 
const renderGrafico = () => {
    const data = {
        labels: ["uno","dos","tres"],
        datasets: [{
            data: [10,20,30],
            borderColor: getDataColors(),
            backgroundColor: getDataColors(20)
        }]
    }
     new Chart(ctx, { type: "doughnut", data})
}

mostrarGrafico()


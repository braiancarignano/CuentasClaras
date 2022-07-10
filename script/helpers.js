
const fetchCoastersData = (...urls) => {
    const promises = urls.map(url => fetch(url).then(response => response.json()))
    return Promise.all(promises)
}

const getDataColors = opacity => {
    const colors = ['#7448c2', '#21c0d7', '#d99e2b', '#cd3a81', '#9c99cc', '#e14eca', '#ffffff', '#ff0000', '#d6ff00', '#0038ff']
    return colors.map(color => opacity ? `${color + opacity}` : color)
}

const getCoastersByYear = (coasters, years) => {
    const coastersByYear = years.map(yearsRange => {
        const [from, to] = yearsRange.split('-')
        return coasters.filter(eachCoaster => eachCoaster.year >= from && eachCoaster.year <= to).length
    })
    return coastersByYear
}

const updateChartData = (chartId, data, label) => {
    const chart = Chart.getChart(chartId)
    chart.data.datasets[0].data = data
    chart.data.datasets[0].label = label
    chart.update()
}

const enableEventHandlers = coasters => {

    document.querySelector('#featuresOptions').onchange = e => {

        const { value: property, text: label } = e.target.selectedOptions[0]

        const newData = coasters.map(coaster => coaster[property])

        updateChartData('featuresChart', newData, label)
    }
}
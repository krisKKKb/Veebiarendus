let occupations ={
    2211:{name:'Üldarst', rate: 0},
    2261:{name:'Hambaarst',rate: 0},
    2511:{name:'Süsteemianalüütik', rate: 0},
    2512:{name:'Tarkvara arendaja', rate: 0},
    2611:{name:'Juristid', rate: 0}
}

const occupationSelect = document.getElementById('occupation-select')
const salaryDiv = document.getElementById('salary')

for (const key in occupations) {
    const option = document.createElement('occupation-select')
    option.value = key
    option.text = occupations[key].name
    occupationSelect.append(option)
    console.log(option)
}
occupationSelect.addEventListener('change', ()  => {
    if (occupationSelect.value) {
        salaryDiv.innerHTML = occupations[occupationSelect.value].rate
    }
    })


    fetch('http://andmebaas.stat.ee/sdmx-json/data/PA633/58+65+DBL96+DBL97+DBL105.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(Response =>{
    return Response.json()
})
.then(data => {
    console.log(data)

    console.log(data.structure.dimensions.observation[0].values)
    data.structure.dimensions.observation[0].values.forEach((el, i) => {
     const occupationKey = (el.name.split(' ')[0])
     const dataSetkey = i + ':0:0:0'
     console.log(i)
     console.log(el.name.split(' ')[0])
     console.log(data.dataSets[0].observations[dataSetkey][0])
    });
    
    console.log(occupations)
})

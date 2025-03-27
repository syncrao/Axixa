let x = [
    {"name": "rahulg", "age": "28", "gender": "male", "salary": 30000},
    {"name": "rahulffd", "age": "28", "gender": "female", "salary": 20000},
    {"name": "rahuldd", "age": "28", "gender": "male", "salary": 20000},
    {"name": "rahudl", "age": "28", "gender": "female", "salary": 20000},
    {"name": "rahul", "age": "28", "gender": "male", "salary": 20000},
    {"name": "raddhul", "age": "28", "gender": "female", "salary": 30000},
    {"name": "raddhul", "age": "28", "gender": "female", "salary": 20000},
    {"name": "rahul", "age": "28", "gender": "male", "salary": 30000},
    {"name": "radhul", "age": "28", "gender": "male", "salary": 30000},
]

let y = x.reduce((oldValue, newValue) => {
    if (newValue.gender == 'male') {
        oldValue[0]= [...oldValue[0], newValue];
        oldValue[0][0].male++

    } else {
        oldValue[1] = [...oldValue[1], newValue];
        oldValue[1][0].female++
    }
    return oldValue
},[[{male:0}],[{female:0}]])


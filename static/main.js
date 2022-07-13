
const korzinaBtn = document.querySelector('.korzina')
const btnBuy = document.querySelectorAll('.buy-btns')
const korzina = document.querySelector('.korzina')
const basketModal = new bootstrap.Modal(document.querySelector('#jokeModal'))
const getMessange = document.querySelector('.modal-body')
const schet = document.querySelector('.count')


const addKey = (data) => {
    for (let key in data) {
        getMessange.insertAdjacentHTML('beforeend', `<h3>${key} - ${data[key]}</h3>`)
    }
}

btnBuy.forEach(element => {

    element.addEventListener('click', () => {
        let count = 0
        count += 1,2,3,4
        schet.innerHTML = count
        const postObj = { userName: element.id }
        fetch('/cart', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(postObj)
        }).then(response => response.json()).then(data => alert(data.message))
    })
    
})

korzina.addEventListener('click', () => {
    fetch('/korzina').then(response => response.json()).then(data => addKey(data), basketModal.show())

})
const cards = document.querySelectorAll('.card-image-container')
const cardsName = document.querySelectorAll('.card-name')
const authors = document.querySelectorAll('.author')
const modal = document.querySelector('.modal')

for (let card of cards) {
    for (let cardName of cardsName) {
        for (let author of authors) {
            card.addEventListener('click', () => {
                const type = card.getAttribute('id')
                const typeCardsName = cardName.getAttribute('id')
                const typeAuthor = author.getAttribute('id')

                modal.classList.add('actived')
                modal.querySelector('img').src = `../assets/${type}.png`
                cardsName.querySelector('p').add(typeCardsName)
                authors.querySelector('p').add(typeAuthor)
            })
        }
    }
}

document.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('actived')
})
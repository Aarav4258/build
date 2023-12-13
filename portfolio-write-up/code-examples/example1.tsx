const words = ['potato', 'apple', 'tomato', 'pasta', 'salad', 'pizza', 'delivery', 'cover', 'string']

const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex];
}
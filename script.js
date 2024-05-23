function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
}

let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const generateQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(randomQuote);

    document.getElementById('qoute').innerText = randomQuote
}

// document.getElementById('generate').onclick = generateQuote();
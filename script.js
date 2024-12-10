// Array of compliments
const compliments = [
    "Are you a magician? Because whenever I’m with you, everyone else disappears.",
    "I must be a snowflake because I’ve fallen for you.", 
    "I’m not a photographer, but I can definitely picture us together… forever.", 
    "I must be dreaming because I’ve never met someone as amazing as you in real life.", 
    "If kisses were snowflakes, I’d send you a blizzard.", 
    "Are you a time traveler? Because I can see you in my future.", 
    "I think I need a map because I keep getting lost in your eyes.", 
    "You must be tired because you’ve been running through my mind all day.", 
    "Do you have a name, or can I call you mine?", 
    "I didn’t believe in love at first sight, but that was before I met you.", 
    "I think my heart is a little broken... but you have the glue to fix it.", 
    "Do you believe in love at first sight, or should I walk by again?", 
    "If I were a cat, I’d spend all 9 lives with you.", 
    "Are you a star? Because your presence lights up my world.", 
    "I don’t need a genie to grant me three wishes... because I already have you.", 
    "Are you made of sugar and spice? Because you’re everything nice.", 
    "I’m not saying you’re the best, but you’re definitely my favorite.", 
    "Can I follow you home? Because my parents always told me to follow my dreams.", 
    "Are you a campfire? Because you’re hot and I want s’more!", 
    "If I could rearrange the alphabet, I’d put U and I together.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is your name Google? Because you have everything I’ve been searching for… and some random things I didn’t know I needed.",
"Are you French? Because Eiffel for you.",
"Do you believe in love at first sight, or should I walk by again?",
"Are you a parking ticket? Because you’ve got ‘FINE’ written all over you!",
"Are you made of copper and tellurium? Because you’re Cu-Te.",
"Is your dad a boxer? Because you’re a knockout!",
"Are you a magician? Because every time I look at you, everyone else disappears… and so does my train of thought.",
"Is your name Wi-Fi? Because I’m feeling a connection.",
"Do you have a map? Because I keep getting lost in your eyes… and my sense of direction is terrible.",
"Are you a snowstorm? Because you’ve made my heart race, and I can’t see anything clearly!",
"If you were a vegetable, you’d be a cute-cumber.",
"Are you a campfire? Because you’re hot and I want s’more.",
"Is your name Chapstick? Because you’re da balm.",
"Do you have a sunburn, or are you always this hot?",
"If you were a fruit, you’d be a fineapple.",
"Are you a time traveler? Because I see you in my future.",
"Is your dad a terrorist? Because you’re the bomb.",
"Are you a 45-degree angle? Because you’re acute-y.",
"Are you a loan from a bank? Because you have my interest!",
"Do you have a pencil? Because I want to erase your past and write our future.",
"I’m not a photographer, but I can definitely picture us together.",
"Do you like raisins? No? Well, how about a date?",
"Are you an angel? Because heaven is missing one.",
"You must be a light bulb, because you brighten up my day!"
];

// Function to generate a random compliment
function generateCompliment() {
    const complimentElement = document.getElementById("compliment");
    const randomIndex = Math.floor(Math.random() * compliments.length);
    complimentElement.textContent = compliments[randomIndex];
}

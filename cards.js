const baseURL = "https://deckofcardsapi.com/api/deck"

// 1.
async function oneCard() {
    const card = await axios.get(`${baseURL}/new/draw/?count=1`);
    console.log("Question 1");
    console.log("Single card from new deck");
    console.log(card.data.cards[0].value, card.data.cards[0].suit);
}
oneCard();

// 2.

async function drawTwo () {
    let res = await axios.get(`${baseURL}/new/draw/?count=1`)
    const deckID = res.data.deck_id;
    const card1 = res.data.cards[0].value + " " + res.data.cards[0].suit;

    res = await axios.get(`${baseURL}/${deckID}/draw/?count=1`);
    const card2 = res.data.cards[0].value + " " + res.data.cards[0].suit;
    console.log ("");
    console.log("Question 2");
    console.log(card1);
    console.log(card2);
}
drawTwo();

// 3.
const $cardBTN = $('.get-card');
const $cardSpot = $('.card-spot');

let deckID;
async function newDeckID () {
    const res =  await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
    deckID = res.data.deck_id;
}
newDeckID();

$cardBTN.on("click", async function(evt) {
    evt.preventDefault();
    console.log(`${baseURL}/${deckID}/draw/?count=1`);
    const res = await axios.get(`${baseURL}/${deckID}/draw/?count=1`);
    $cardSpot.append(
        $('<img>', {
            src: res.data.cards[0].image
        })
    );
});
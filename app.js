const baseURL = "http://numbersapi.com";

const $numberInput1 = $('.numbers-input1');
const $numberSubmit = $('.numbers-submit');
const $factsText = $('.facts-text');
const $factsDisplay = $('.facts-display');

// 1.
async function favNumFact (num) {
    const res = await axios.get(`${baseURL}/${num}?json`);
    console.log(res.data.text);
}
favNumFact(134);

// 2.
async function favNumFacts(nums) {
    const res = await axios.get(`${baseURL}/${nums}?json`);
    for (const key in res.data) {
        console.log(res.data[key]);
    }
}
const favNums = [56, 58, 66, 234];
favNumFacts(favNums);

// 3.
const favNum = 112;
const numPromises = Array.from({length: 4}).map(() => {
    return axios.get(`${baseURL}/${favNum}?json`);
});
Promise.all(numPromises).then (facts => {
    facts.forEach(res => {
        $factsDisplay.append(`<p>${res.data.text}</p>`)
    });
});
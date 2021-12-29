// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
)}</span>
</div>
`;

startTimer();

function onTimesUp() {
    clearInterval(timerInterval);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
        );
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            onTimesUp();
            result();
        }
    }, 1000);
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);

        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);


    }

}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);

}


beginner={
    0:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
    1:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
    2:"Bezos founded Blue Origin in 2000. This company develops technologies to lower the cost of space travel. For over a decade, the firm operated in the shadows, but Bezos in 2016 introduced its headquarters to reporters and revealed his vision of humans not only visiting the space but also colonising it. Two years later, he revealed the Blue Origin moon lander, which had been conducting test flights of its suborbital New Shepard rocket",
    
}
average= {
    0:"Tesla, Inc. is an American electric vehicle and clean energy company based in Austin, Texas, United States. Tesla designs and manufactures electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, and related products and services",
    1:"Mark Elliot Zuckerberg is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Meta Platforms, Inc. (formerly named Facebook, Inc.) and serves as its chairman, chief executive officer, and controlling shareholder.He also is a co-founder of the solar sail spacecraft development project Breakthrough Starshot and serves as one of its board members",
    2:"Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware",
   
}
expert={
    0:"Strange Bedfellows!” lamented the title of a recent letter to Museum News, in which a certain Harriet Sherman excoriated the National Gallery of Art in Washington for its handling of tickets to the much-ballyhooed “Van Gogh’s van Goghs” exhibit. A huge proportion of the 200,000 free tickets were snatched up by the opportunists in the dead of winter, who then scalped those tickets at $85 apiece to less hardy connoiseurs.",
    1:"Ethical appeals notwithstanding, great art will increasingly devolve into big business. Firstly, great art can only be certified by its market value. Moreover, the “world at large” hasn’t the means of acquisition. Only one museum currently has the funding to contend for the best pieces–the J. Paul Getty Museum, founded by the billionaire oilman. The art may disappear into private hands, but its transfer will disseminate once static fortunes into the hands of various investors, collectors, and occasionally the artist.",
    2:"Yet, Sherman’s bedfellows are far from strange. Art, despite its religious and magical origins, very soon became a commercial venture. From bourgeois patrons funding art they barely understood in order to share their protegee’s prestige, to museum curators stage-managing the cult of artists in order to enhance the market value of museum holdings, entrepreneurs have found validation and profit in big-name art. Speculators, thieves, and promoters long ago created and fed a market where cultural icons could be traded like commodities.",

}

function beginner1(){
    x = Math.floor(Math.random() * 2);
    document.getElementById("passage").innerHTML=beginner[x]
}
function average1(){
    x = Math.floor(Math.random() * 2);
    document.getElementById("passage").innerHTML=average[x]
}
function expert1(){
    x = Math.floor(Math.random() * 2);
    document.getElementById("passage").innerHTML=expert[x]
}

function result() {


    let str = document.getElementById("passage").innerHTML
    a = str.split(' ').filter(w => w !== '');
    let str1 = document.getElementById("text").value
    b = str1.split(' ').filter(w => w !== '');

    sum = 0

    for (i in b) {
        if (a.includes(b[i]) == true) {
            sum = sum + 1
            delete a[b[i]]
        }
    }
    document.getElementById("passage").innerHTML = sum + "WPM"



}




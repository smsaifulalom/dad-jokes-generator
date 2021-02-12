// const jokeEle = document.getElementById('joke');
// const getJoke = document.getElementById('get_joke');

// getJoke.addEventListener('click',generateJoke);

// generateJoke();

// async function generateJoke(){
//     // call the icanhazdadjoke API
//     const jokeRes = await fetch('https://icanhazdadjoke.com/',{
//         headers:{
//             'Accept': 'application/json'
//         }
//     });
//     const joke = await jokeRes.json();

//     console.log(joke)

//     // set the new joke
//     jokeEle.innerHTML = joke.joke
// }

const jokeEle = document.getElementById('joke')
const getJoke = document.getElementById('get_joke')

getJoke.addEventListener('click',generateJoke)
generateJoke()

async function generateJoke(){
    // call the icanhazdadjoke API
    const jokeRes = await fetch('https://icanhazdadjoke.com/',{
        headers:{
            "Accept":"application/json"
        }
    })

    const joke = await jokeRes.json()

    console.log(joke)

    // set the new joke

    jokeEle.innerHTML = joke.joke

}
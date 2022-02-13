//q2
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=ce3d26349b534877bdd5c3eb211e6dee";

const displayContainer = document.querySelector(".display");

async function getResults() {
  try {
    const response = await fetch(url);

    const results = await response.json();

    const information = results.results;

    displayContainer.innerHTML = "";

    for (let i = 0; i < information.length; i++) {
      if (i === 8) {
        break;
      }

      displayContainer.innerHTML += `<h1>${information[i].name}</h1>
                                        <p>Rating: ${information[i].rating}</p>
                                        <hp>Tags: ${information[i].tags.length}</hp>`;
    }
  } catch (error) {
    console.log(error);
    displayContainer.innerHTML = "sorry something went wrong";
  }
}

getResults();

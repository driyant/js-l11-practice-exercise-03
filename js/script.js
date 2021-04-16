// selec ul document
const ul = document.querySelector(".not-registered");

const getRegistrationData = async () => {
    const url = "https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json";
    const request = await fetch(url);
    const data = await request.json();
    //console.log(data);
    diplayContactList(data);
}

const diplayContactList = (data) => {
    const li = document.createElement("li");
    const notRegistered = data.filter(student => {
        return student.registered === "no";
    });
    //console.log(notRegistered[1]);
    for(let i=0;i<=notRegistered.length;i++) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${notRegistered[i]["name"]}</span>`;
        ul.appendChild(li);
    }
}

getRegistrationData();
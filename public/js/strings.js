
const isOnEmbed = window.location.pathname.includes('embed');

const initUpdatedTime = () => {
  const updatedTime = "20.3.2020, 00:10";
  if (isOnEmbed) {
    document.getElementById("last-updated-time-embed").textContent = updatedTime;
  } else {
    document.getElementById("last-updated-time").textContent = updatedTime;
  }
};

const sickDataUpdate = () => {
  const updatedTime = "20.3.2020, 00:10";
  const numberOfSickPeople = 677;
  const numberOfRecovered = 14;
  const numberOfDeaths = 0;
  const numberOfPeopleInQuarantine = '50,337';
  document.getElementById("number-of-sick-people-text").textContent = numberOfSickPeople;
  document.getElementById("number-of-recovered-people-text").textContent = numberOfRecovered;
  document.getElementById("number-of-deaths-text").textContent = numberOfDeaths;
  document.getElementById("number-of-people-in-quarantine-text").textContent = numberOfPeopleInQuarantine;
  document.getElementById("last-updated-time-sick").textContent = updatedTime;
};

initUpdatedTime();
sickDataUpdate();

import PlayingArea from "../components/playing-area/playing-area";

document.addEventListener('DOMContentLoaded', () => {
    const playingArea = new PlayingArea(document.querySelector('.playing-area'));
  
    const randomMovingGoblinTimerId = setInterval(playingArea.randomMovingGoblin, 1000);
})
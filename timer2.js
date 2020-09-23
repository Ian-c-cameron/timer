const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////


const soundAlarm = () => {
  console.log("ALARM!!!");
};


stdin.on('data', (key) => {
  if (key === 'b') {
    soundAlarm();
  }
  let time = Number(key);
  if (time && time > 0) {
    console.log(`setting timer for ${time} seconds...`);
    setTimeout(soundAlarm, time * 1000);
  } else if (time === 0) {
    soundAlarm();
  }
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});


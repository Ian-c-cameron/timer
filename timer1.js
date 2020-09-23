let args = process.argv.slice(2);
const soundAlarm = () => {
  console.log("ALARM!!!");
};

for (let i = args.length - 1; i >= 0; i--) {
  let time = Number(args[i]);
  if (time && time > 0) {
    setTimeout(soundAlarm, time * 1000);
  }
}

const myterm = process.env.TERM;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My Term is ${myterm}`);
    await sleep(5000);
  }
}

main();

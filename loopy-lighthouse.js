// printing out numbers from 100 to 200
for (var i = 100; i <= 200; i++) {
  // printing out numbers from 100 to 200 as long as they are not multiple of 3 and a multiple of 4
  if (i % 3 !== 0 && i % 4 !== 0) {
    console.log(i);
  }
  // if number is multiple of 3 and multiple of 4 printing "LoopyLighthouse"
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse');
  }
  // printing "Loopy" if number is multiple of 3
  else if (i % 3 === 0) {
    console.log('Loopy');
  }
  //   printing "Lighthouse" if number is multiple of 4
  else if (i % 4 === 0) {
    console.log('Lighthouse');
  }
}

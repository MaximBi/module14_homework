const promiseToCreateNumber = new Promise((resolve, reject) => {
  const waitPromise = new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 100 + 1))
    }, 3000)
  });

  waitPromise
    .then(randomNumber => {
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(randomNumber);
      }
    })
});

promiseToCreateNumber
  .then((result) => {
    console.log(`Завершено успешно. Сгенерированное число — ${result}`);
  })
  .catch((error) => {
    console.log(`Завершено с ошибкой. Сгенерированное число — ${error}`);
  });

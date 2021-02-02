const workers = [
  {name:"John", salary:"500"},
  {name:"Mike", salary:"1300"},
  {name:"Linda", salary:"1500"},
];

const getWorthyWorkers = arrWorkers=>{
  const worthyWorker = [];


  arrWorkers.forEach(currentWorker =>{
    if (currentWorker.salary > 1000) {
      worthyWorker.push(currentWorker.name)
    }
  })
  return worthyWorker;
}

console.log(getWorthyWorkers(workers))
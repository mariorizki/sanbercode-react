const unfilteredArray = [
  {
    name: 'Bejo',
    isAllowed: true
  },
  {
    name: 'Jhonson',
    isAllowed: false
  },
  {
    name: 'Juara',
    isAllowed: true
  },
  {
    name: 'Panco',
    isAllowed: false
  },
  {
    name: 'Nasional',
    isAllowed: true
  }
];

const filteredArray = unfilteredArray.filter(i => i.isAllowed === true);
let filterToggle = false;

const displayList = () => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  if (filterToggle === false) {
    unfilteredArray.forEach(i => {
      const listP = document.createElement('p');
      listP.innerHTML = i.name;
      listDiv.appendChild(listP);
    });
  } else {
    filteredArray.forEach(i => {
      const listP = document.createElement('p');
      listP.innerHTML = i.name;
      listDiv.appendChild(listP);
    });
  }
};

const filterList = () => {
  //   const filteredArray = unfilteredArray.filter(i => i.isAllowed === true);
  //   unfilteredArray = filteredArray;
  //   displayList();
  filterToggle = true;
};

displayList();

console.log(filteredArray);

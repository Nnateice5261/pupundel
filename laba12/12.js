const arr1 = [1, 2, 3]; // 1
const arr2 = arr1.map(item => (item + 10) * 3);
alert(arr2);

const years = [2010, 2011, 2012, 2013, 2014, 2015]; //2
const age = years.map(item => 2024 - item);
alert(age);

const users = [ // 3
    { name: 'Peter', rights: false},
    { name: 'Mark', rights: true},
    { name: 'John', rights: false},
    { name: 'Jane', rights: true},
    { name: 'Tony', rights: false},
  ];
  const fullAge = users.filter(user => {
    user.rights === true ? alert(user.name) : undefined;
});

const students = [ //4
    { name: 'Peter', score: 4 },
    { name: 'Mark', score: 3 },
    { name: 'John', score: 5 },
    { name: 'Jane', score: 4 },
    { name: 'Tony', score: 2},
];
const sum = students.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, 0);
const srednee_value = sum / students.length;
alert('Средний балл студентов: ' + srednee_value);

const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C']; //5
function mapForEach(arr, callback) { 
  const newArray = [];
  for(let i = 0; i < arr.length; i++) {
    newArray.push(
      callback(arr[i])
    );
  }
  return newArray;
}
const arrValue = mapForEach(strArray, function(item) { // вызов функции старшего порядка
  return item.length <= 3 ? item = 0 : item = 1 ; // функция - параметр(callback)
});
alert(arrValue);


  
  
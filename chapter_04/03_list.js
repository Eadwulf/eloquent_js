let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

let list2 = {value: 0, rest: list};
let list3= {value: -1, rest: list};

console.log(list2);

var usGermany = [{
  country: 'United States',
  points: 4,
  goalDiff: 1,
  goalTotal: 4,
  victories: {'Ghana': true},
  flagURL: '',
  curScore: 0
}, 
{ country: 'Germany',
  points: 4,
  goalDiff: 4,
  goalTotal: 6,
  victories: {'Portugal': true},
  flagURL: '',
  curScore: 0
}];

var portGhana = [{
  country: 'Portugal',
  points: 1,
  goalDiff: -4,
  goalTotal: 2,
  victories: {},
  flagURL: '',
  curScore: 0
}, 
{ country: 'Ghana',
  points: 1,
  goalDiff: -1,
  goalTotal: 3,
  victories: {},
  flagURL: '',
  curScore: 0}
];

new app(usGermany, portGhana);

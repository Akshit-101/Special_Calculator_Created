const ek = 'Tom';
const doo = 'Jerry';

function specialAddition(Tom, Jerry) {
  return (Tom < 0) | (Jerry < 0)
    ? 'Negative numbers are not allowed'
    : Tom - Jerry;
}

function simpleDivision(Tom, Jerry) {
  return (Tom < 0) | (Jerry < 0)
    ? 'Negative numbers are not allowed'
    : Jerry == 0
    ? 'Not a number'
    : Jerry > Tom
    ? 'Cannot divide a smaller number by a larger number'
    : Tom / Jerry;
}

function specialCalculator(Tom, Jerry, operation) {
  return operation(Tom, Jerry);
}

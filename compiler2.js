alert('Compiler Script Loaded');
const outputDiv = document.getElementById('output');

const testCode = `int ye = 2; bool < const > cool = false`;

const tokens = {
  STARTERS: {
    type: 'list',
    tokens: {
      INT: ['memName', 'attatchmentOpen'],
    },
  },
  attatchmentOpen: {
    type: 'char',
    tokens: {
      '<': ['attatchment'],
    },
  },
  attatchments: {
    type: 'list',
    tokens: {
      CONST: ['attatchment', 'attatchmentClose'],
    },
  },
  attatchmentClose: {
    type: 'char',
    tokens: {
      '>': ['memName'],
    },
  },
  memName: {
    type: 'value',
    tokens: {
      '': ['LINEEND', 'EQUALS'],
    },
  },
  LINEEND: {
    type: 'char',
    tokens: {
      ';': ['VALUE'],
    },
  },
  VALUE: {
    type: 'value',
  },
};

function breakIntoPeices(code) {
  let newCode = '';
  let starterToken = code.split(' ')[0].toUpperCase();
  if (tokens.STARTERS.tokens.hasOwnProperty(starterToken)) {
    alert(
      'PASSED: ' +
        starterToken +
        ' is a property of ' +
        'tokens.STARTERS.tokens'
    );
    newCode += starterToken + ' ';
  } else {
    alert(
      'ERROR: ' +
        starterToken +
        ' is not a property of ' +
        ' tokens.STARTERS.tokens'
    );
  }

  alert(
    'tokens.STARTERS.tokens.' +
      starterToken +
      ' = ' +
      tokens.STARTERS.tokens[starterToken]
  );
  alert('Next looking for: ' + tokens.STARTERS.tokens[starterToken]);

  let nextLookingFor = tokens.STARTERS.tokens[starterToken];

  for (let i = 0; i < 10000; i++) {
    for (let j = 0; j < nextLookingFor.length; j++) {
      alert(
        'yeye: ' +
          tokens[nextLookingFor[j]].tokens.hasOwnProperty(
            code.split(' ')[j + 1]
          )
      );
    }
    break;
  }

  outputDiv.innerHTML = newCode;
}

function tokenize(input) {
  breakIntoPeices(input);
}

try {
  breakIntoPeices(testCode);
} catch (err) {
  alert(err);
}

const outputDiv = document.getElementById("output");

const get = (obj, path) => {
    // if path is not a string or array of string
    if (path === '' || path.length == 0) return undefined;
    
    // if path is an array, concatenate it and form a string
    // to handle a single case of string
    if (Array.isArray(path)) path = path.join('.');
    
    // filter out the brackets and dot
    let exactPath = [];
    for (let i = 0; i < path.length; i++) {
      if (path[i] !== '[' && path[i] !== ']' && path[i] !== '.') {
        exactPath.push(path[i]);
      }
    }
    
    // get the value of the path in the sequence
    alert(`(${source}, ${path}) => ${source[path]}, ${obj}`)
    const value = exactPath.reduce((source, path) => source[path], obj);
    
    // if not found return undefined
    return value ? value : undefined;
}

const code = `int const ye = 2;bool const cool = false`

alert("Compiler Script Loaded")

function tokenize(input) {
    const tokens = {
        start: {
            type: "find",
            _INT: {
                valueForLater: "intager",
                next: ["attatchment", "name"] 
            },
            _BOOL: {
                valueForLater: "boolean",
                next: ["attatchment", "name"]
            },
            _FUNC: {
                valueForLater: "function",
                next: ["attatchment", "name"]
            }
        },
        attatchment: {
            type: "find",
            CONST: {
                next: ["attatchment", "name"]
            },
            STATIC: {
                next: ["attatchment", "name"]
            }
        },
        name: {
            type: "string",
            next: ["end", "equals"]
        },
        equals: {
            type: "char",
            char: "=",
            next: ["value"]
        },
        value: {
            type: "string",
            next: ["end"]
        }
    }
    let splitInput = input.split(";");

    for(let i = 0; i < splitInput.length; i++) {
        let splitLine = splitInput[i].split(" ")
        
        for(let j = 0; j < splitLine.length; j++) {
            if (j == 0) {
                alert("Testing start token")
                if(Object.keys(tokens.start).includes('_' + splitLine[j].toUpperCase())) {
                    alert(splitLine[j] + ' = ' + true)
                    try {
                        alert("Next looking for: " + ('tokens.start._' + splitLine[j].toUpperCase() + '.next'))
                        alert("Which is " + get(tokens, 'start._INT.next'))
                    } catch(err) {
                        alert(err)
                    }
                } else {
                    alert(splitLine[j] + ' = ' + false + 'ERROR!!!')
                }
            }
        }
    }

    return(splitInput)
}

outputDiv.innerHTML = tokenize(code)
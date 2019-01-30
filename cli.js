#!/usr/bin/env node 
 /* 
1. COMMAND [chmod +x cli.js]
2. Add the file to the bin package property
3. COMMAND [npm link] to system-link the file to node environment
4. COMMAND [npm unlink] to remove the system-link if we wants to
5. RUN file BY its name in the terminal
*/ 

// Grab provided argrs. 
const [,, ...args] = process.argv;

// Print hello world provided args. Array destructuring
console.log(`Hello World ${args}`);
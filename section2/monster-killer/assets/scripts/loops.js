/*
    Loops
    - for 
    -> (loop with counter)
        for (let i = 0; i < 5; i++)
        for(;;) - infinite loop (we have to be careful)
    - while 
    -> (loop with condition)
        while (i < 5)
    - do while 
    -> (loop with condition)
        do { } while (i < 5)
    - for of 
    -> (loop over arrays)
        for (const el of list)
    - for in 
    -> (loop over object keys)
        for (const key in obj)
*/


function printLogHandler() {
    for (let i = 0; i < battleLog.length; i++) {
        console.log('-------------');
        console.log(`#${i}`);
        for (const key in battleLog[i]) {
            console.log(`${key} => ${battleLog[i][key]}`);
        }
    }
    //console.log(battleGameLogs);
}

logBtn.addEventListener('click', printLogHandler);

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
    // for (let i = 0; i < battleLog.length; i++) {
    //     console.log('-------------');
    //     console.log(`#${i}`);
    //     for (const key in battleLog[i]) {
    //         console.log(`${key} => ${battleLog[i][key]}`);
    //     }
    // }
    //console.log(battleGameLogs);

    let i = 0;
    for (const log of battleGameLogs) {
        console.log('-------------');
        console.log(`#${i}`);
        for (const key in log) {
            console.log(`${key} => ${log[key]}`);
        }
        i++;
    }
}

logBtn.addEventListener('click', printLogHandler);


function printLogHandler() {
    let i = 0;
    outerFor: for (let i = 0; i < battleGameLogs.length; i++) {
        console.log('-------------');
        console.log(`#${i}`);
        innerFor: for (const key in battleGameLogs[i]) {
            if (i === 3) {
                console.log('log 3 reached');
                break outerFor;
            }
            console.log(`${key} => ${log[key]}`);
        }
        i++;
    }

    /*
        Labelled Statements:
        - we can use labels to break out of nested loops
            break labelName;
        - we can use labels to continue nested loops
            continue labelName;
        
        labelName: for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 3; j++) {
                if (i === 1) {
                    continue labelName;
                }
                console.log(i, j);
            }
        }

        Java, C#, C++, etc. have the same feature

    */
}
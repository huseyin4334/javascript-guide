// User Input
// Identified in assets/scripts/errorHandling.js

// Start Health
// Identified in assets/scripts/errorHandling.js
let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;

// Log Object
const battleGameLogs = [];
let battleLog = [];

adjustHealthBars(choseMaxLife);

function attackPlayer(mode) {

    let maxDamage = mode === MODE_ATTACK ? MONSTER_ATTACK_VALUE : MONSTER_STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_MONSTER_ATTACK : LOG_EVENT_MONSTER_STRONG_ATTACK;
    // ternary operator is a short form of if statement

    // if (mode === MODE_ATTACK) {
    //     maxDamage = MONSTER_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_MONSTER_ATTACK;

    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = MONSTER_STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_MONSTER_STRONG_ATTACK;
    // } 
    // CTRL + K and CTRL + C add comment, CTRL + K and CTRL + U remove comment
    
    const damage = dealPlayerDamage(maxDamage);
    currentPlayerHealth -= damage;

    writeLog(logEvent, damage);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = choseMaxLife;
        setPlayerHealth(choseMaxLife);
        writeLog(LOG_EVENT_PLAYER_BONUS, choseMaxLife);
        
        alert('Bonus life saved you!');
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDamage = PLAYER_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;

    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = PLAYER_STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    writeLog(logEvent, damage);
}

function controlScore() {
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        clearGameBoard('Monster dead! You won', LOG_EVENT_PLAYER_WON);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        clearGameBoard('You dead! You lost', LOG_EVENT_MONSTER_WON);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        clearGameBoard('Draw! Both dead', LOG_EVENT_DRAW);
    }
}

function clearGameBoard(message, winner) {
    writeLog(LOG_EVENT_GAME_OVER, winner);
    alert(message);
    resetGameHandler();
}

function attackHandler() {
    attackPlayer(MODE_ATTACK);
    attackMonster(MODE_ATTACK);

    controlScore();
}

function strongAttackHandler() {
    attackPlayer(MODE_STRONG_ATTACK);
    attackMonster(MODE_STRONG_ATTACK);

    controlScore();
}

function healPlayerHandler() {
    let maxHeal;

    if (currentPlayerHealth + HEAL_VALUE > choseMaxLife) {
        alert('You can`t heal more than max health');
        maxHeal = choseMaxLife - currentPlayerHealth;
    } else {
        maxHeal = HEAL_VALUE;
    }
    currentPlayerHealth += maxHeal;
    increasePlayerHealth(maxHeal);
    writeLog(LOG_EVENT_HEAL, maxHeal);
}

function resetGameHandler() {
    currentPlayerHealth = choseMaxLife;
    currentMonsterHealth = choseMaxLife;
    resetGame(choseMaxLife);
}
 
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);

function writeLog(event, value) {
    let logEntry;
    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: LOG_TARGET_MONSTER,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: LOG_TARGET_MONSTER,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: LOG_TARGET_PLAYER,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
    } else if (event === LOG_EVENT_MONSTER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: LOG_TARGET_PLAYER,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
    } else if (event === LOG_EVENT_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: LOG_TARGET_PLAYER,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
    } else if (event === LOG_EVENT_PLAYER_BONUS) {
        logEntry = {
            event: event,
            value: value,
            target: LOG_TARGET_PLAYER,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
    } else if (event === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: event,
            value: value,
            finalMonsterHealth: currentMonsterHealth,
            finalPlayerHealth: currentPlayerHealth
        };
        battleLog.push(logEntry);
        battleGameLogs.push({
            gameId: "Game-" + Math.floor(Math.random() * 1000),
            battleLog: battleLog,
        });
        battleLog = [];
    }
    battleLog.push(logEntry);
}

function switchCaseWriteLog(event, value) {    
    const logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: currentMonsterHealth,
        finalPlayerHealth: currentPlayerHealth
    };

    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK || LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = LOG_TARGET_MONSTER;
            battleLog.push(logEntry);
            break;
        case LOG_EVENT_MONSTER_ATTACK || LOG_EVENT_MONSTER_STRONG_ATTACK || LOG_EVENT_HEAL || LOG_EVENT_PLAYER_BONUS:
            logEntry.target = LOG_TARGET_PLAYER;
            battleLog.push(logEntry);
            break;
        case LOG_EVENT_GAME_OVER:
            battleLog.push(logEntry);
            battleGameLogs.push({
                gameId: "Game-" + Math.floor(Math.random() * 1000),
                battleLog: battleLog,
            });
            battleLog = [];
            break;
    }
}

/*
    Ternary Operator:
    const maxDamage = mode === MODE_ATTACK ? MONSTER_ATTACK_VALUE : MONSTER_STRONG_ATTACK_VALUE;

    Normally if statements not return a value, but ternary operator returns a value. It's a short form of if statement.

    Some Logical Tricks:
    
    1 -> !!value - converts value to boolean
            !!'' - false
            !!'Hello' - true
    2 -> +value - converts value to number
            +'5' - 5
            +'Hello' - NaN
    3 -> +value.toFixed(2) - converts value to number with 2 decimal places
            +5.toFixed(2) - 5.00
            +5.123.toFixed(2) - 5.12
    4 -> || , && - logical operators
            1. Or operator chooses the first truthy value. If all values are falsy, it returns the last value
            2. And operator chooses the first falsy value. If all values are truthy, it returns the last value

            let userInput = '';
            
            const name = userInput || 'Max';
            console.log(name); // Max
            
            const name = userInput && 'Max';
            console.log(name); // ''
            
            
            userInput = 'John';
            
            const name = userInput || 'Max';
            console.log(name); // John

            const name = userInput && 'Max';
            console.log(name); // Max

            
*/
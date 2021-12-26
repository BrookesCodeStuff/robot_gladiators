var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  // Repeat and execute as long as the enemy lives
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    // If player chooses to skip
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      // Confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // If yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye.');
        // Subtract money from playerMoney for skipping
        playerMoney -= 10;
        console.log('Player Money: ' + playerMoney);
        // Leave while loop since battle skipped
        break;
      }
    }

    // Remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth -= playerAttack;
    console.log(
      playerName +
        ' attacked ' +
        enemyName +
        '. ' +
        enemyName +
        ' now has ' +
        enemyHealth +
        ' health remaining.'
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // Award for winning
      playerMoney += 20;

      // Leave while loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // Remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth -= enemyAttack;
    console.log(
      enemyName +
        ' attacked ' +
        playerName +
        '. ' +
        playerName +
        ' now has ' +
        playerHealth +
        ' health remaining.'
    );

    // Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');

      // Leave while loop since dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// Function to start a new game
var startGame = function () {
  // Reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // Fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyNames.length; i++) {
    // If player is still alive, keep fighting
    if (playerHealth > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      // Call fight function with enemy
      var pickedEnemyName = enemyNames[i];
      // Reset enemy health before starting a new fight
      enemyHealth = 50;
      // Pass the pickedEnemyName into fight function
      fight(pickedEnemyName);
    } else {
      window.alert('You have lost your robot in battle! G A M E O V E R');
      break;
    }
  }

  // After the lop ends, player is either out of health or enemies, end the game
  endGame();
};

// Function to end the game
var endGame = function () {
  // If player is alive, player wins!
  if (playerHealth > 0) {
    window.alert(
      'Great job, you survived the game! You now have a score of ' +
        playerMoney +
        '.'
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // Ask player if they want to play again
  var playAgainConfirm = window.confirm('Would you like to play again?');

  if (playAgainConfirm) {
    // Restart the game
    startGame();
  } else {
    window.alert('Thank you for playing Robot Gladiators! Come back soon!');
  }
};

// Start the game when the page loads
startGame();

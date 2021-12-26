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

for (var i = 0; i < enemyNames.length; i++) {
  // Call fight function with enemy
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i]);
}

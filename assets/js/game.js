// Function to generate a random numeric value
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value;
};

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

var enemyInfo = [
  { name: 'Roborto', attack: randomNumber(10, 14) },
  { name: 'Amy Android', attack: (10, 14) },
  { name: 'Robo Trumble', attack: (10, 14) },
];

var fight = function (enemy) {
  // Repeat and execute as long as the enemy lives
  while (playerInfo.health > 0 && enemy.health > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    // If player chooses to skip
    if (promptFight === 'skip' || promptFight === 'SKIP') {
      // Confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // If yes (true), leave fight
      if (confirmSkip) {
        window.alert(
          playerInfo.name + ' has decided to skip this fight. Goodbye.'
        );
        // Subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log('Player Money: ' + playerInfo.money);
        // Leave while loop since battle skipped
        break;
      }
    }

    // Generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    // Deduct damage from enemy's health pool
    enemy.health = Math.max(0, enemy.health - damage);
    console.log(
      playerInfo.name +
        ' attacked ' +
        enemy.name +
        '. ' +
        enemy.name +
        ' now has ' +
        enemy.health +
        ' health remaining.'
    );

    // Check enemy's health
    if (enemy.health <= 0) {
      window.alert(enemy.name + ' has died!');

      // Award for winning
      playerInfo.money += 20;

      // Leave while loop since enemy is dead
      break;
    } else {
      window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
    }

    // Generate random damage value based on enemy's attack power
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    // Deduct damage from player health pool
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemy.name +
        ' attacked ' +
        playerInfo.name +
        '. ' +
        playerInfo.name +
        ' now has ' +
        playerInfo.health +
        ' health remaining.'
    );

    // Check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');

      // Leave while loop since dead
      break;
    } else {
      window.alert(
        playerInfo.name + ' still has ' + playerInfo.health + ' health left.'
      );
    }
  }
};

// Function to start a new game
var startGame = function () {
  // Reset player stats
  playerInfo.reset();

  // Fight each enemy robot by looping over them and fighting them one at a time
  for (var i = 0; i < enemyInfo.length; i++) {
    // If player is still alive, keep fighting
    if (playerInfo.health > 0) {
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      // Call fight function with enemy
      var pickedEnemyObj = enemyInfo[i];
      // Reset enemy health before starting a new fight
      pickedEnemyObj.health = randomNumber(40, 60);
      // Pass the pickedEnemyObj into fight function
      fight(pickedEnemyObj);

      // If player is still alive and not at the last enemy, allow shopping
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
        // Ask player if they want to shop
        var storeConfirm = window.confirm(
          'The fight is over, visit the store?'
        );

        // If yes, go to shop
        if (storeConfirm) {
          shop();
        }
      }
    }
  }
  // After the loop ends, player is either out of health or enemies, end the game
  endGame();
};

// Function to end the game
var endGame = function () {
  // If player is alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      'Great job, you survived the game! You now have a score of ' +
        playerInfo.money +
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

// Allow player to shop
var shop = function () {
  // Ask player what they want to do
  var shopOptionPrompt = window
    .prompt(
      'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: REFILL, UPGRADE, or LEAVE to make a choice.'
    )
    .toLowerCase();

  // Fulfill player choice
  switch (shopOptionPrompt) {
    case 'refill':
      playerInfo.refillHealth();
      break;
    case 'upgrade':
      playerInfo.upgradeAttack();
      break;
    case 'leave':
      window.alert('Leaving the store.');
      break;
    default:
      window.alert('You did not pick a valid option. Try again.');
      // Call shop again to allow player to pick a valid option
      shop();
      break;
  }
};

// Start the game when the page loads
startGame();

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

var enemyName = 'Roborto';
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
  //Alert players that they are starting the round
  window.alert('Welcome to Robot Gladiators!');

  // Subtract value of playerAttack from value of enemyHealth
  enemyHealth = enemyHealth - playerAttack;

  // Log resulting message to console
  console.log(
    playerName +
      ' attacked ' +
      enemyName +
      '. ' +
      enemyName +
      ' now has ' +
      enemyHealth +
      ' health remaining!'
  );

  // Check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + ' has died!');
  } else {
    window.alert(enemyName + ' still has ' + enemyHealth + ' health left!');
  }

  // Subtract value of enemyAttack from value of playerHealth
  playerHealth = playerHealth - enemyAttack;

  // Log resulting message to console
  console.log(
    enemyName +
      ' attacked ' +
      playerName +
      '. ' +
      playerName +
      ' now has ' +
      playerHealth +
      ' health remaining!'
  );

  // Check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + ' has died!');
  } else {
    window.alert(playerName + ' still has ' + playerHealth + ' health left!');
  }
};

fight();

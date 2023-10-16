const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => rl.question(`${question}\n> `, resolve));
}

function message(message) {
  console.log(message);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Car {
  constructor(name, price, winChanceModifier) {
    this.name = name;
    this.price = price;
    this.winChanceModifier = winChanceModifier;
  }
}

class House {
  constructor(name, cost, income) {
    this.name = name;
    this.cost = cost;
    this.income = income;
  }
}

class Player {
  constructor(name, fame, hasGirlfriend, money, car, house) {
    this.name = name;
    this.fame = fame;
    this.hasGirlfriend = hasGirlfriend;
    this.money = money;
    this.car = car;
    this.house = house;
  }
}

const cars = [
  new Car("Toyota Corolla", 15000, 0.1),
  new Car("Honda Civic", 18000, 0.15),
  new Car("Ford Mustang", 35000, 0.25),
  new Car("Chevrolet Camaro", 40000, 0.3),
  new Car("Nissan GT-R", 80000, 0.35),
  new Car("Porsche 911", 120000, 0.4),
  new Car("Ferrari 488", 250000, 0.5),
  new Car("Tesla Model S", 80000, 0.35),
  new Car("Mercedes-Benz S-Class", 100000, 0.4),
  new Car("Lamborghini Huracan", 300000, 0.6),
];

const houses = [
  new House("Small Apartment", 50000, 1000),
  new House("Suburban House", 150000, 3000),
  new House("Luxury Mansion", 500000, 10000),
  new House("Cozy Cottage", 75000, 1500),
  new House("City Loft", 200000, 5000),
  new House("Seaside Villa", 800000, 12000),
];

const dateActivities = [
  { name: "Romantic Dinner", fun: 20, cost: 200 },
  { name: "Amusement Park", fun: 30, cost: 300 },
  { name: "Beach Picnic", fun: 25, cost: 250 },
];

let player;

async function startGame() {
  const cityName = "ACP";
  message(`Welcome to ${cityName}! The city of speed and adventure. You're an emerging racer with a dream to become the fastest.`);
  const racerName = await ask(`What is your racer name?`);
  player = new Player(racerName, 0, false, 50000, cars[0], null);
  message(`Hello ${player.name}! Your adventure begins now.`);

  while (true) {
    const choice = await ask("What would you like to do? (race/date/buyCar/buyHouse/exit)");

    switch (choice.toLowerCase()) {
      case 'race':
        await race();
        break;
      case 'date':
        if (player.hasGirlfriend) {
          await goOnDate();
        } else {
          message("You need a girlfriend to go on a date. Find love first!");
        }
        break;
      case 'buycar':
        await chooseCar();
        break;
      case 'buyhouse':
        await buyHouse();
        break;
      case 'exit':
        message("Exiting the game. Goodbye!");
        rl.close();
        return;
      default:
        message("Invalid choice. Try again.");
        break;
    }
  }
}

async function chooseCar() {
  message("Welcome to the Car Dealership. Here are the available cars:");
  cars.forEach((car, index) => {
    message(`${index + 1}. ${car.name} - $${car.price} (Improves race winning chances by ${car.winChanceModifier * 100}%)`);
  });

  const carChoice = await ask("Which car would you like to buy? (1-10)");

  if (carChoice >= 1 && carChoice <= cars.length && player.money >= cars[carChoice - 1].price) {
    player.money -= cars[carChoice - 1].price;
    player.car = cars[carChoice - 1];
    message(`Congratulations! You've bought a ${cars[carChoice - 1].name}. You now have $${player.money} remaining.`);
  } else {
    message("Invalid choice or not enough money. Exiting the dealership.");
  }
}

async function buyHouse() {
  message("Welcome to the Real Estate Agency. Here are the available houses:");
  houses.forEach((house, index) => {
    message(`${index + 1}. ${house.name} - $${house.cost} (Generates $${house.income} per race)`);
  });

  const houseChoice = await ask("Which house would you like to buy? (1-6)");

  if (houseChoice >= 1 && houseChoice <= houses.length && player.money >= houses[houseChoice - 1].cost) {
    player.money -= houses[houseChoice - 1].cost;
    player.house = houses[houseChoice - 1];
    message(`Congratulations! You've bought a ${houses[houseChoice - 1].name}. You now have $${player.money} remaining.`);
  } else {
    message("Invalid choice or not enough money. Exiting the Real Estate Agency.");
  }
}

async function race() {
  const otherCars = cars.filter((car) => car !== player.car);

  message("Other cars in the race:");
  otherCars.forEach((car) => {
    const winChance = player.car.winChanceModifier + car.winChanceModifier;
    message(`${car.name} - Winning Chance: ${winChance * 100}%`);
  });

  const playerWinChance = player.car.winChanceModifier + getRandomInt(0, 5) / 100; // Add a bit of randomness
  const totalWinChance = otherCars.reduce((acc, car) => acc + car.winChanceModifier, player.car.winChanceModifier);
  const raceWinChance = playerWinChance / totalWinChance;

  if (Math.random() < raceWinChance) {
    message("Congratulations! You win the street race and earn some reputation points.");
    player.fame += 10;
    player.money += 50000; // Earn money for winning the race

    if (player.hasGirlfriend) {
      await goOnDate();
    }

    if (player.house) {
      player.money += player.house.income;
      message(`You earned $${player.house.income} from your house.`);
    }

  } else {
    message("Unfortunately, you lose the race. But don't give up; every racer has their ups and downs.");
    // Deduct some fame and money, but allow the player to continue
    player.fame -= 5;
    player.money -= 20000;
  }

  message(`You now have ${player.fame} fame points and $${player.money}.`);

  // Continue the game
  await continueGame();
}

async function goOnDate() {
  message("You're going on a date with your girlfriend. Choose an activity:");

  for (let i = 0; i < dateActivities.length; i++) {
    message(`${i + 1}. ${dateActivities[i].name} - Cost: $${dateActivities[i].cost}, Fun: ${dateActivities[i].fun}`);
  }

  const activityChoice = await ask("Enter the number of the activity you'd like to do:");

  if (activityChoice >= 1 && activityChoice <= dateActivities.length && player.money >= dateActivities[activityChoice - 1].cost) {
    player.money -= dateActivities[activityChoice - 1].cost;
    player.fame += dateActivities[activityChoice - 1].fun;
    message(`You chose to go on a ${dateActivities[activityChoice - 1].name}. You spent $${dateActivities[activityChoice - 1].cost}.`);
  } else {
    message("Invalid choice or not enough money. The date is canceled.");
  }

  message(`The date went well. Your relationship with your girlfriend is flourishing!`);
}

async function continueGame() {
  const continueChoice = await ask("Do you want to continue? (yes/no)");

  if (continueChoice.toLowerCase() === 'yes') {
    await startGame();
  } else {
    message("Exiting the game. Goodbye!");
    rl.close();
  }
}

startGame();
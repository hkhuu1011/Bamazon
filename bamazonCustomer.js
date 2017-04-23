var mysql = require("mysql");
var inquirer = require('inquirer');

// Create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "Bamazon"
});

// Connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Function to prompt the user for the ID of the product they would like to buy
var start = function() {
  // Query the database for all items listed
  connection.query("SELECT * FROM products", function(err, res) {
    // console.log(res[0].Product_Name);
    if (err) throw err;

    // Display items listed in database
    for (var i = 0; i < res.length; i++) {
      console.log("ID: " + res[i].Item_Id + " | " + "Name: " + res[i].Product_Name + " | " + "Price: $" + res[i].Price);
    }
    
    // Once items are listed, prompt the user to select the item ID of the product
    inquirer.prompt([
    {
      name: "choice",
      message: "Please select an ID of the product you would like to buy.",
      type: "input"
    },
    {
      // Prompt how many units they want to buy
      name: "units",
      message: "How many units would you like to buy?",
      type: "input"
    }
    ]).then(function(answer) {
    	// Get the information of the picked item
    	connection.query("SELECT * FROM products WHERE ?", {
    		Item_Id: answer.choice
    	}, function (err, res) {
    		// Getting the total of the product by multiplying the price by the quantity
    		var total = res[0].Price * answer.units
    		console.log("Order placed successfully! Your Total: $" + total);
    		if (err) {
    			throw err;
    			console.log("ID invalid");
    		}
    		// If customer asks for more than what's in stock. Log insufficient quantity.
    		if (res[0].Stock_Quantity - answer.units < 0) {
    			console.log("Insufficient quantity!");
    		}
    	})


      // var pickedItem;
      // for (var i = 0; i < res.length; i++) {
      //   if (res[i].Item_Id === answer.choice) {
      //     pickedItem = res[i];
      //   }
      // } // End for loop

      // Check store's inventory if they have enough of the product the customer is requesting
      // if (answer.units <= pickedItem.Stock_Quantity) {
      //   // If units are less than the stock quantity, database will update remaining quantity
      //   connection.query("UPDATE Stock_Quantity SET ? WHERE ?", [{
      //     Stock_Quantity: answer.units
      //   }, {
      //     id: pickedItem.id
      //   }], function(error) {
      //     if (error) throw err;
      //     console.log("Order placed successfully!");
      //   });
      // } else {
      //   console.log("Insufficient quantity!");
      //   start();
      // }
  	

    })

  }); // End query connection

}; // End start function

start();


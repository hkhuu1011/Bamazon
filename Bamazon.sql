CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products(
  Item_Id INT NOT NULL AUTO_INCREMENT,
  Product_Name VARCHAR(255) NOT NULL,
  Department_Name VARCHAR(45) NOT NULL,
  Price INT default 0,
  Stock_Quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Swan Pool Float", "Toys and Games", "39.90", "42");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Flamingo Pool Float", "Toys and Games", "49.90", "27");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Unicorn Pool Float", "Toys and Games", "39.90", "8");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Wireless Headphones", "Electronics", "299.90", "16");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("MP3 Player", "Electronics", "199.90", "66");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Tablet", "Electronics", "245.90", "4");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Essential Oil Diffuser", "Home and Kitchen", "29.90", "54");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Blender", "Home and Kitchen", "19.90", "128");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Crock-Pot Slow Cooker", "Home and Kitchen", "68.90", "104");

INSERT INTO products (Product_Name, Department_Name, Price, Stock_Quantity)
VALUES ("Vaccuum Cleaner", "Home and Kitchen", "119.90", "281");
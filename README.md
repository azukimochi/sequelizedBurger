# burger

This Burger application functions to track the burgers a customer has ordered. A MySQL database is used to store all orders. 

This application was created using JavaScript, jQuery, MySQL, HTML, CSS, Handlebars, NodeJS, Sequelize, and ExpressJS.  It has been deployed on both Github and Heroku. 

The creator of this application is azukimochi and she can be contacted via https://github.com/azukimochi.
___________________________________________________

### HOW TO USE:

1.  Within the form, type in the name of the burger you want to order. 
2. Once you have placed your order, the burger's name will populate under the header "On Your Table" along with a "Devour" button and an input form for the customer's name next to it.
3. If you type in the customer's name and click on the Devour button, the burger will move to the "In Your Stomach" list. In brackets next to the burger, the name of the customer who ate the burger will also be listed. 

Note: The same customer can have as many burgers as they want.  This is for order tracking. 

A MySQL database deployed on Heroku keeps track of the id, burger name, and a boolean for whether or not the burger has been eaten. A separate associated table called Customers contains the names of all the customers. 

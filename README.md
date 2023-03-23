## Concept
Create Menu of Products 

TODO POC
- [x] Find bud image
- [x] Upload image to `./public` folder
- [x] Pull data from JSON
- [ ] Uniform fonts 
- [ ] Implement cart
- [x] setState on button clicks
- [x] change price type string -> number
- [x] Change MenuItem to Product

TODO down the line
- [ ] Figure out how user session works in QR code ordering. 
- [ ] Separate products by strains
- [ ] Figure out product hierarchy/categories
Components:
- Product: has image, item name, item price, order button. Must have the ability to add and delete items to the cart. 
- Global Cart: (Array vs Set) vs Redux: holds all the Products added on to it
- Cart (rendered on button click): Renders the contents inside the Global Cart. Cart Items can be deleted with the press of a button. 

```
Product Render
State 0: default
__________________________________________ 
| ___________                             |
| |         |   item name                 |
| |   img   |   ---------                 |
| |_________|   | order |           price |
|               ---------                 |
|_________________________________________|

State 1: order button pressed
__________________________________________ 
| ___________                             |
| |         |   item name                 |
| |   img   |   ---------                 |
| |_________|   -   1   +           price |
|               ---------                 |
|_________________________________________|

With dummy values
__________________________________________ 
| ___________                             |
| |         |   gorilla glue OG           |
| |   img   |   ---------                 |
| |_________|   -   1   +          $69.99 |
|               ---------                 |
|_________________________________________|

Cart Render

```
## (Array vs Set) vs Redux
- Kinda depends on the component architecture which you have yet to draw bro. LOL

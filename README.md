## Concept
Create Menu of Products 

TODO POC
- [x] Find bud image
- [x] Upload image to `./public` folder
- [x] Pull data from JSON
- [ ] Uniform fonts 
- [ ] Implement cart component
- [ ] Implement check component
- [x] Implement footer navigation with buttons for cart and check
- [x] setState on button clicks
- [x] change price type string -> number
- [x] Change MenuItem to Product
- [x] Redux actions add and remove to cart
- [ ] Modal vs Page for cart render
- [ ] Redux slice check
- [ ] Redux actions add to check and clear cart

TODO down the line
- [ ] Figure out how user session works in QR code ordering. 
- [ ] Separate products by strains
- [ ] Figure out product hierarchy/categories
- [ ] Figure out product types
- [ ] Implement menu component
- [ ] Implement profile component
- [ ] Extend footer navigation to include buttons for profile and menu

Components:
- Product: has image, item name, item price, order button. Must have the ability to add and delete items to the cart. 
- Cart (rendered on button click): Renders the contents inside the Redux store cart. Cart Items can be deleted with the press of a button. 
- Check: ordered from cart moves to the check. 

## Carts
- Cart: represents the current cart 
- Check: represents the items the user has already ordered. Cart gets added to Check as soon as the user orders the current cart. Total amount to be paid is determined by items present in this Check. 

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
___________________________________________
|  x <img>  <name> <price>  
|
|  x <img>  Gorilla Glue OG $77.99
|
|  x <img>  Gorilla Glue OG $77.99
|
|  x <img>  Wedding Cake    $69.99
|
|  x <img>  Wedding Cake    $69.99
|
|                           _______
|   
|   SubTotal                $295.96
|   Taxes
|                           _______
|   Total                   $295.96
|                           -------
|                           | ORDER|
|                           -------- 
_________________________________________
```
## Redux
- Redux. Adding to the cart is handled by the Product + and - buttons. Add products to this store, and when the cart is ready to render, retrieve the products in this store. 
- Actions - add to cart, remove from cart, clear cart, add to check. `ADDTOCART`, `REMOVEFROMCART`, `CLEARCART`, `ADDTOCHECK`
- States: `cart:[]`, `check:[]`
```
state: {
    cart:[],
    check:[],
}
```

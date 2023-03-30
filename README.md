## Concept
Create Menu of Products 

TODO POC
- [x] Find bud image
- [x] Upload image to `./public` folder
- [x] Pull data from JSON
- [ ] Uniform fonts 
- [x] Implement cart component
- [ ] Implement check component
- [x] Implement footer navigation with buttons for cart and check
- [x] Dispatch actions on store for - and + button clicks
- [x] Change price type string -> number
- [x] Change Product to MenuItem
- [x] Redux slice cart
- [x] Redux actions add and remove to cart
- [x] Modal for cart render, called by root `<App>`
- [x] Consolidate quantity between `<MenuItem>` and `<Cart>`
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
- [ ] Shopping cart icon with number of items

Components:
- MenuItem: has image, item name, item price, order button. Must have the ability to add and delete items to the cart. 
- Cart (rendered on button click): Renders the contents inside the Redux store cart. Cart Items can be deleted with the press of a button. 
- Quantity: child of any component who needs quantity displayed.
- Check: ordered from cart moves to the check. 

## Carts
- Cart: represents the current cart 
- Check: represents the items the user has already ordered. Cart gets added to Check as soon as the user orders the current cart. Total amount to be paid is determined by items present in this Check. 

```
MenuItem Render
State 0: default
__________________________________________ 
| ___________                             |
| |         |   item name                 |
| |   img   |   ---------                 |
| |_________|   -   0   +           price |
|               ---------                 |
|_________________________________________|

State 1: add button pressed
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
|   <img> - 1 + <name> <price>  
|
|   <img> - 1 + Gorilla Glue OG $77.99
|
|   <img> - 1 + Gorilla Glue OG $77.99
|
|   <img> - 1 + Wedding Cake    $69.99
|
|   <img> - 1 + Wedding Cake    $69.99
|
|                           _______
|   
|   SubTotal                $295.96
|   
|                           _______
|   Total                   $295.96
|                           -------
|                           | ORDER|
|                           -------- 
_________________________________________
```
## Redux
- Redux. Adding to the cart is handled by the Quantity + and - buttons. Add products to this store, and when the cart is ready to render, retrieve the products in this store. 
- Actions - add to cart, remove from cart, clear cart, add to check. `ADDTOCART`, `REMOVEFROMCART`, `CLEARCART`, `ADDTOCHECK`
- States: `cart:[]`, `check:[]`
```
state: {
    cart:[],
    check:[],
}
```

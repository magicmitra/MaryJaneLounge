## Concept
Create Menu. 

TODO
- [x] Find bud image
- [x] Upload image to `./public` folder
- [x] Pull data from JSON
- [ ] Uniform fonts 
- [ ] Implement pseudo-cart
- [ ] setState on button clicks

Critical components:
- MenuItem (parent): has image, item name, item price, order button

```
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
```
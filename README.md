# NOTHS Challenge

## Usage
`yarn`


`yarn start`

Alternatively, I have included the `build` folder. You can run a basic HTTP server in that folder to see the built site without installing dependencies.

## Reasoning

For this exercise I've used React and redux (plus `styled-components`)
* The stack at NOTHS as I understand is similar so it seems appropriate to demonstrate those skills
* The spec asks for it to be "flexible and well-structured so it can be easily extended". When this is a condition, thorough state management solutions like redux are good to get in early. For something this size that would not be extended I would probably stick to React's `setState`
* React is relatively easy to test with Jest features like snapshots, giving me more time to build the app itself

I bootstrapped it with `create-react-app`, then ejected to make some quick config changes
* CRA makes it easy to get up and running with a working app and common config
* Ejecting let me make quick and dirty config changes to get eslint, prettier, and jest set up how I wanted. If this were an ongoing project I would take the time to research a solution without ejecting

I tested mostly with Jest snapshots
* They provide simple comparisons when changes occur
* They are perfect for testing pure functions like redux reducers
* Components were primarily presentational
* I also used enzyme and Jest mocks to test components with functionality (eg 'Add to basket')

Some other details
* I've used a little bit of flexbox to make the design responsive - adjusting the number of products per row and moving the basket to the top of the page depending on space
* reducers, actionTypes, and actions are bundled together similarly to the ducks proposal to avoid unnecessary boilerplate (https://github.com/erikras/ducks-modular-redux)
* I follow the common pattern of "components" and "containers", where components are dumb while containers orchestrate components, providing the right data, action props, etc. This helps keep components reusable and separate presentation from logic
* Styled components are bundled inside component files because the app is small. If they were likely to be re-used or there were too many they would be extracted
* I made an overly complicated basket reducer (supporting increment item, decrement item, delete item, and set item count) with expansion of functionality in mind, so I added a 'Delete item' button to the basket to at least show off one of those features 😄

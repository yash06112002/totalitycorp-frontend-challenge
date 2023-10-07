# TotalityCorp Frontend Challenge

This project is a React-based e-commerce website that replicates a shopping site with essential features, including product listing, cart management, and checkout.

## Approach

### Product Listing
- For the product listing feature, started by defining an array for our products. We decided to keep it simple and store product data locally in a JavaScript array for this sample project. 
- On `Home` Page, map through the product data and displays each product's information along with an "Add to Cart" button. We also implemented `Sorting` component to sort products by price starting from lowest to highest and reverse of it enhancing the user's shopping experience.

### Shopping Cart
- The shopping cart feature is implemented using React's Context API. We created a `CartProvider` to manage the cart state and provide it to components that need it.
- The `Cart` component displays the items in the cart, allows users to adjust quantities, and removes items. It also calculates and displays the total cost of items in real-time.
- To achieve real-time updates of the cart total and item count, used React's `useContext` hook to connect to the `CartProvider`.

### Checkout
- The checkout process is asimple form. Created a `Checkout` component that guides the user through entering shipping information and payment details like Name, Address and Credit Card Number.
- To calculate the total cost in the checkout process, reused the cart state managed by the `CartProvider`.

### Responsive Design
- Ensuring a responsive design was a top priority. We used vanilla CSS and MaterialUI to adapt the layout to different screen sizes. This approach provides a seamless user experience on both desktop and mobile devices.

## Tech Stack

### Frontend Framework
- React: We chose React as our frontend framework because of its component-based architecture, which allows for easy organization and reusability of UI elements.

### Styling
- Material-UI: We used Material-UI, a popular React UI framework, for styling. Material-UI provides pre-built components, themes, and styles that help maintain a consistent and visually appealing design throughout the application.
- CSS-in-JS: Material-UI utilizes a CSS-in-JS approach, allowing us to define component-specific styles directly in our React components. This approach enhances the maintainability and reusability of styles.

### State Management
- React Context API: We used React's built-in Context API for state management. It simplifies the management of the shopping cart state across components without the need for external libraries.

### Data Management
- Local Data: In this sample project, we stored product data locally in a JavaScript array. In a real-world application, this data would typically come from a backend API.



# React Calculator App

A simple and responsive calculator application built using **React**. This project performs basic arithmetic operations such as addition, subtraction, multiplication, and division while demonstrating React concepts like **components, props, state management, and event handling**.

## Features

- Perform basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (*)
  - Division (/)
- Clear button (`C`) to reset calculator
- Decimal number support (`.`)
- Dynamic display screen
- Responsive button layout
- Built using reusable React components

## Technologies Used

- React.js
- JavaScript (ES6)
- CSS Modules
- HTML5

## Project Structure

```bash
src/
│── components/
│   │── ButtonContainer.jsx
│   │── ButtonContainer.module.css
│   │── Display.jsx
│   │── Display.module.css
│
│── App.jsx
│── App.module.css
│── main.jsx
```

## How It Works

The calculator is divided into multiple components:

### 1. Display Component
Shows the current value or expression entered by the user.

```jsx
<Display displayValue={calVal} />
```

### 2. ButtonContainer Component
Contains all calculator buttons and sends clicked button values to the parent component.

```jsx
<button onClick={() => onButtonClick(buttonName)}>
```

### 3. App Component
Handles state management and calculator logic using React’s `useState`.

```jsx
const [calVal, setCalVal] = useState("");
```

When a button is clicked:

- If button = `C` → clears display
- If button = `=` → evaluates expression
- Otherwise → appends value to display

## Installation & Setup

Move into project folder:

```bash
cd calculator
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## Learning Outcomes

Through this project I learned:

- React component architecture
- Passing data using props
- State management using `useState`
- Handling button click events
- Conditional logic in React
- Debugging props and state issues
- Building reusable UI components


## Screenshot

<img width="443" height="706" alt="image" src="https://github.com/user-attachments/assets/093646d8-640a-4ab1-bff1-b5877ca81320" />

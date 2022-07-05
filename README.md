# Token Queue

Visitor Queue Management with Tokens.

## Specification

Download the [Token-System-Spec.pdf](https://s3.amazonaws.com/cdn.vidura/token/Token-System-Spec.pdf)

If there is any trouble downloading the spec. try again or please contact me for help.

## Setup

1. This is the ReactJS frontend application.
2. Find the NodeJS backend required to run this app here:\
  https://github.com/ViduraAdikari/token-queue-backend.git

Run `npm install` for both apps

## Way to Check

Best way to check is:
Open 3 browser tabs for [http://localhost:3000](http://localhost:3000)
1. For customers to get tokens.
2. To display assigned tokens.
3. For counter agent to enter served token number.

#####Backend will initiate with 7 Counters.
2 x Counters - Billing / Payments. (Counter 1 & 2)\
4 x Counters - Document Services. (Counter 3, 4, 5, & 6)\
1 x Counter - Consultation. (Counter 7 only)

## Functions

`All functions related to spec are working.`

- Run the app.

#### As a Customer
- Open a browser tab for [http://localhost:3000](http://localhost:3000) (only if you didn't open 3 in Way to Check step).
- Enter a phone number in the input and click next.
- Dashboard will be loaded and 3 Services (#Billing / Payments, #Document Services and #Consultation) will be loaded from remote and displayed on the panel.
- Your phone and randomly selected avatar will be displayed on the panel below the Services List.
- Click on a Service from the panel to get a token.
- Token will be issued from the backand, added to the queue, displayed to customer with token number.
- Click on print the button below the token to get redirected.
- Repeat the steps to get another token as a new customer.

#### Display Tokens
- Open a browser tab for [http://localhost:3000](http://localhost:3000) (only if you didn't open 3 in Way to Check step).
- Enter a phone number or any text (like 'display') in the phone number input and click next.
- Open navigation drawer on the top right and click the link 'Display Queue'.
- Tokens that are assigned to counters will be loaded Token Display.
- New Tokens that get assigned will be automatically updated in Token Display (refreshed every 5 seconds).

#### As a Counter Agent.
- Open a browser tab for [http://localhost:3000](http://localhost:3000) (only if you didn't open 3 in Way to Check step).
- Enter a phone number or any text (like '+1', so you can remember it's the Counter #1) in the phone number input and click next.
- Open navigation drawer on the top right and click the link 'Agent Counter'.
- Token which is assigned to the Counter with a form to enter the Served Token number will be displayed.
- Enter Served Token Number and submit.
- Next waiting Token from the queue will be assigned to the Counter.
- Token Display screen will display this Token with Counter.

### Check for more counters

- [x] You can check this for all 7 counters.
- Open another browser tab for [http://localhost:3000](http://localhost:3000)
- Follow the instructions in 'As a Counter Agent' section from the 2nd step.
- Follow the instructions in 'As a Customer' section to get more tokens.

### Component Hierarchy

Components are in src/components/deck dir.

Atomic level components are in elements dir.

`elements < cartons < pallet < container`

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

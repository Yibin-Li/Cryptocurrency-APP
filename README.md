# Yibin-Li-Crypto-App-Test
## How to run this app
1. Clone the repo to your computer
2. On the terminal run

``` $ npm run ios``` on ios simulator

``` $ npm run android ``` on Android emulator

``` $ npm run start ``` on React Native view app(e.g. Expo) using QR code

## Answer to Short Questions
1. There are two problems in the program. First, the Content, Host, Section, SignUpButton, 
Version are all styles, so the render function is missing a View element. Second, 
the onSignupPress() function doesn't work as intented. When the users press the signup button,
the onSignupPress() will be invoked, but it doesn't send signup data to backend, meaning that 
it fails to sign up a user.

2. store.dispatch() modified the store inside and dispatch a change to that, while 
effect.push() creates an effect description that instructs the middleware to dispatch 
an action to the Store.

3. The first one is a static function, meaning that it can only be invoked by 
Class.static function (Dashboard.staticFunc() at this case.) The last two ways are generally 
the same at creating function except that arrow functions make code more concise, and simplify 
function scoping when using "this.

For example

```javascript
var n = new Dashboard(5);
n.staticFunc();
```

throw an error

```javascript
Dashboard.staticFunc();
n.memberFunc1();
n.memberFunc2();

n.num = 999;
n.memberFunc1();
n.memberFunc2();
```
will work and log out

```
staticFunc undefined
memberFunc1 5
memberFunc2 5
memberFunc1 999
memberFunc2 999
```

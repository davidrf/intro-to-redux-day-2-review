# Introduction to Redux - Day 2 Review
## Set Up Locally

```
$ git clone https://github.com/davidrf/intro-to-redux-day-2-review.git
$ cd intro-to-redux-day-2-review
$ yarn install
$ yarn start
```

## Instructions
Convert this application from using React local state to using state from Redux.
You will find a `src/rootReducer` file that contains the reducer and actions that you'll need.
You should not have to modify this file to get the application working.
The following is a list of recommended steps to accomplishing this goal:

1. Add a `Provider` to your application.
2. Connect your component using `connect`.
3. Delete the state from the `App` component, write a `mapStateToProps` function, and pass it to `connect`.
4. Write `mapDispatchToProps` and pass it to `connect`. Make the necessary changes to get the input fields to work again.

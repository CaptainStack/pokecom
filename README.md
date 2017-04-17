# Technical Assessment

We’re so excited about your interest in joining the Pluralsight engineering team! 

This next part of your interview process is a technical assessment for you to complete and return within one week. Being an engineer is more than just writing as many lines of code as you can — it’s about problem solving, communication, and leveraging the right tools for the job. We’re excited to see what you can do.

## How You’re Building

- Should be written in Ruby, Python, Javascript, or Node. Any accompanying framework (back-end or front-end) can also be used.
- Please use git and commit throughout the entire process. We want to see all of your commits as you go (even the ones with mistakes). That will help us to get a sense of your thinking process as you work.
- Feel free to use as many libraries as you need to get the job done (this is how we work after all).
- Write enough automated tests to make sure the basic functionality is working. You don’t have to write a full test suite with 100% coverage. Our goal is to see not just that you can write code, but that you can validate that it functions. If Test-driven development helps you build out your code, go for it!
- Write a README outlining how to build and run the app locally, think of it as open-source project.
- We’re not looking for an absolutely complete project. We’re interested in learning how you work over what you get done.  At a minimum, the application should run locally and we should be able to create a post that is stored to a database.

## What You’re Building

A simplified version of Twitter — with a Pokemon twist.

### Requirements

- Posts
  - Users should be able to submit posts that are stored to a database.
  - All posts should be displayed in a feed on the home page.
  - You can also implement update and delete functionality [optional].
  - Don’t worry about customizing the feed depending on user account. It’s **not** required.
- External Data
  - Here’s the twist — users are anonymized, so each time a post is submitted, a random Pokemon is assigned to the post and shows up as the username.
  - Make a call to the Pokemon API when each post is created to select a random Pokemon name: http://pokeapi.co/ 
- Authentication [optional]
  - Users should be able to create an account, login, and logout.
  - Account management features, like updating email or password, are **not** needed.

### How To Submit

- You can clone this repository or make your own private fork.
- We expect you to work on a branch, to make creating a pull request easier.
- You can push your changes to that branch while you’re working.
- Once you’re done you can create a pull request from your branch or from your own fork.
- You can use the pull request message to tell us about your overall thought process after finishing.

### Questions

Don’t worry if have an issue or a question about the requirements (big or small), please don’t hesitate to ask. We don’t work in silos and we don’t expect you to either! You can send an email to katie-delfin@pluralsight.com or ping @katiedelfin in a GitHub issue at any time. 

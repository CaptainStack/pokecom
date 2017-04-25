# Pokecom
Welcome to Pokecom! A social network for lovers of Pokemon that respects your privacy and protects your identity.

## Setup instructions
* Step 1: Clone the repository using `git clone git@github.com:CaptainStack/pokecom.git`
* Step 2: Configure databases by setting environment variables to ElephantSQL's URLs
  `export TEST_DATABASE_URL=postgres://hdfkugzc:hK0tjwCloEk7GJ7QwF-fb_odHAOKf3Qi@stampy.db.elephantsql.com:5432/hdfkugzc`
  `export DATABASE_URL=postgres://wisigade:Q88Mzj6GZ4fQQf6jDOZ4NEe1YLbD0Ez8@stampy.db.elephantsql.com:5432/wisigade`
* Step 3: Configure and start the server by `cd server`, `npm install`, `npm run start:dev`
* Step 4 (in new terminal): Configure the client by `cd client`, `npm install`, `npm start`
* Step 5: Go to localhost:3000 to try the app, interact with API at localhost:3001

## Running tests
* From inside /server `npm test`

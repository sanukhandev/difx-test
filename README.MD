## Dev Setup Info

1. Go to backend-node and copy `.envsample` to `.env`
2. Fill in db details and a sceret key for jwt token encryption
3. Run `npm run install:all` on root folder to install dependencies for both FE & BE
4. Run `npm run db:setup` create DB with db name mentioned in `.env` file. and migrate db structure and seed the tables with dummy data
5. Run `npm run start:all` to start both front-end and back-end togather.
6. Finally the FE will running on port `3000` and BE will running on `5000`

Note: Visit `http://localhost:3000/` 
default user created `sanu@test.com:testPassword`


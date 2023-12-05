# CRUD

### SETUP
1. Git clone repo: https://github.com/hiaytus/CRUD
2. Run docker:
```
docker run --rm --name inventory_CRUD -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```
3. Start container
```
docker exec -it <PSQL-Container-ID> bash
```
4. Connect to postgres
```
psql -U postgres
```
5. Create database
```
CREATE database inventory;
```
6. Connect to database
```
\c inventory
```
7. Cd into the local CRUD repo and open it
```
cd CRUD
code .
```

8. cd into backend, then install npm and run migrations and seeding
```
npx knex migrate:latest
npx knex seed:run
npm start
```
- Backend running on http://localhost:8080

9. Cd into frontend
```
npm install
npm start
```
- Frontend running on http://localhost:3000

### User should be able to:
- Guest view for public inventory
- Clicking an item brings up detailed view
- Create an account
- Log into an existing account 
  - username: dog@gmail.com
  - password: password
- Logged in users have a personal inventory list
- Add items
- Delete items 
- Clicking item brings up detailed view with edit toggle function
- View all for public inventory 
- Dark mode toggle
- Return for navigation
- Log out

# CRUD

SETTING UP APP
1. git clone repo
2. docker run --rm --name inventory_CRUD -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
3. docker exec -it <PSQL-Container-ID> bash
4. CREATE database inventory ;
5. \c inventory
6. cd into backend, npm init migrate and seed data, then npm start
7. cd into frontend start it as well
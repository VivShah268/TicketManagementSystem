# TicketManagementSystem

Create table scripts

create table users (
    id SERIAL PRIMARY KEY,
    name text not null,
    email text not null,
    password text not null
);

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    title  text not null,
    description  text not null,
    type  text not null,
    venue  text not null,
    status  text not null,
    priority  text not null,
    dueDate  text not null,
    createdBy  int references users(id)
);


# Script to run the project
npm run dev

# Things completed
User creation
DB Connection
Authentication
User Login
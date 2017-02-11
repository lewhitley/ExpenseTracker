# Expense Tracker

Idea behind the project: As a consumer, in order to better understand my spending patterns I want to input my expenses in a tracking system which can generate reports. This implementation uses a Rails backend with ActiveRecord queries, a PostgreSQL database, and a React/Redux frontend. Components are not styled but functional; expenses are listed by their amount and description.

## Setup for the project

bundle install
npm install
rake db:create
rake db:migrate
rake db:seed

## Schema

Each user has a username, password, and admin boolean. Admin users have access to all expenses of other users. Expenses have a user_id as a foreign key, an amount, a description, and a created_at timestamp.

The `User` model contains authentication methods for the creation and verification of a user. The `Expense` model contains a filter class method to run a SQL query for the dates given by the user to perform a report.

## Testing

The tests can be run all at once with the command `bundle exec rspec` or in the order they were written:
```
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/expense_spec.rb
bundle exec rspec spec/controllers/application_controller_spec.rb
bundle exec rspec spec/controllers/users_controller_spec.rb
bundle exec rspec spec/controllers/sessions_controller_spec.rb
bundle exec rspec spec/controllers/expenses_controller_spec.rb
```
These tests follow the conventional sections of testing with Rails and do not cover features or integration tests using Capybara.

If test db not setup, run `bundle exec rake db:test:create` and `bundle exec rake db:test:load`.

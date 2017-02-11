# Expense Tracker

As a consumer, in order to better understand my spending patterns I want to input my expenses in a tracking system which can generate reports.

## Setup

bundle install
npm install
rake db:create
rake db:setup

## Schema

## Testing

```
bundle exec rspec spec/models/user_spec.rb
bundle exec rspec spec/models/expense_spec.rb
bundle exec rspec spec/controllers/application_controller_spec.rb
bundle exec rspec spec/controllers/users_controller_spec.rb
bundle exec rspec spec/controllers/sessions_controller_spec.rb
bundle exec rspec spec/controllers/expenses_controller_spec.rb
bundle exec rspec spec/features/auth_spec.rb
bundle exec rspec spec/features/expenses_spec.rb
bundle exec rspec spec/features/report_spec.rb
```

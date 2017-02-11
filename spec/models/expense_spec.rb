require 'rails_helper'
require 'byebug'

begin
  Expense
rescue
  Expense = nil
end

RSpec.describe Expense, :type => :model do
  subject(:user) { User.create!(username: "jack_bruce", password: "abcdef") }

  it "is valid with valid attributes" do
    expense = Expense.new(user_id: user.id, amount: 30, description: "hello world")
    expect(expense).to be_valid
  end

  it "is not valid without an amount" do
    expense = Expense.new(amount: nil)
    expect(expense).to_not be_valid
  end

  it "is not valid without a description" do
    expense = Expense.new(description: nil)
    expect(expense).to_not be_valid
  end

  it "is not valid without a user_id" do
    expense = Expense.new(user_id: nil)
    expect(expense).to_not be_valid
  end

  it "belongs to a user" do
    expense = Expense.create!(user_id: user.id, amount: 30, description: "hello world")
    expect(expense.user).to eq(user)
  end

  describe "::report" do
    let(:good) { Expense.report(user, {startDate: Date.today, endDate: Date.today}) }

    it "accepts two arguments" do
      expect{ Expense.report(user, {startDate: Date.today, endDate: Date.today}) }.to_not raise_error
      expect{ Expense.report(user) }.to raise_error(ArgumentError)
      expect{ Expense.report(user, user, {startDate: Date.today, endDate: Date.today}) }.to raise_error(ArgumentError)
    end

    it "returns an ActiveRecord_Relation" do
      expect(good.class).to eq(Expense::ActiveRecord_Relation)
    end

    it "only returns expenses belonging to that user" do
      expect(good.to_a.all? {|expense| expense.user == user}).to be true
    end

    it "returns expenses in the appropriate date range" do
      expect(good.to_a.all? {|expense| expense.created_at == Date.today}).to be true
    end
  end
end

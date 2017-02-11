require 'rails_helper'

begin
  Api::ExpensesController
rescue
  Api::ExpensesController = nil
end

RSpec.describe Api::ExpensesController, :type => :controller do
  render_views

  let(:json) { JSON.parse(response.body) }
  let(:user) { User.create({username: "jack_bruce", password: "abcdef"}) }
  let(:expense) { Expense.create({user_id: user.id, amount: 30, description: "cool"}) }

  before(:each) do
    allow_message_expectations_on_nil
    post :create, format: :json, user: {username: "jack_bruce", password: "abcdef"}
  end

  describe "POST #create" do
    context "with invalid parameters" do
      it "returns error with an non-existent amount" do
        post :create, format: :json, expense: {user_id: user.id, description: "cool"}
        expect(response.status).to eq(422)
      end

      it "returns error on non-existent description" do
        post :create, format: :json, expense: {user_id: user.id, amount: 30}
        expect(response.status).to eq(422)
      end
    end

    context "with valid parameters" do
      it "gives expense index data on success" do
        post :create, format: :json, expense: {user_id: user.id, amount: 30, description: "cool"}
        expect(Expense.last.amount).to eq(30)
        expect(Expense.last.user_id).to eq(user.id)
        expect(Expense.last.description).to eq("cool")
      end
    end
  end

  describe "PATCH #update" do

  end

  describe "GET #index" do

  end

  describe "DELETE #destroy" do

  end
end

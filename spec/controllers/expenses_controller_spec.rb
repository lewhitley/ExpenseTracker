require 'rails_helper'

begin
  Api::ExpensesController
rescue
  Api::ExpensesController = nil
end

RSpec.describe Api::ExpensesController, :type => :controller do
  render_views

  let(:json) { JSON.parse(response.body) }
  let(:user) { User.last }

  describe "POST #create" do
    before(:each) do
      allow_message_expectations_on_nil
    end

    it "returns error when not logged in" do
      post :create, format: :json, expense: {amount:35, description: "cool"}
      expect(response.status).to eq(404)
    end

    context "when user logged in" do
      before(:each) do
        controller.login(user)
      end

      it "returns error when missing description" do
        post :create, format: :json, expense: {user_id: user.id, amount:35}
        expect(response.status).to eq(422)
      end

      it "returns error when missing description" do
        post :create, format: :json, expense: {user_id: user.id, description: "cool"}
        expect(response.status).to eq(422)
      end

      context "with valid parameters" do
        it "gives expense index data on success" do
          post :create, format: :json, expense: {user_id: user.id, amount: 50, description: "awesome"}
          expect(json.any? {|id, obj| obj["amount"] == 50.0}).to be true
          expect(json.any? {|id, obj| obj["description"] == "awesome"}).to be true
        end
      end
    end
  end

  describe "DELETE #destroy" do
    before(:each) do
      allow_message_expectations_on_nil
    end

    context "when no user logged in" do
      it "returns an error" do
        delete :destroy, format: :json, id: Expense.last.id
        expect(response.status).to eq(404)
      end
    end

    context "when owner logged in" do
      before(:each) do
        controller.login(user)
        post :create, format: :json, expense: {user_id: user.id, amount: 70, description: "cooliest"}
      end

      it "returns an index of the user's expenses" do
        delete :destroy, format: :json, id: Expense.last.id
        expect(json.all? {|id, obj| obj.class == Hash}).to be true
      end

      it "deletes only the given expense" do
        expect(json.any? {|id, obj| obj["amount"] == 70.0}).to be true
        delete :destroy, format: :json, id: Expense.last.id
        expect(Expense.last.amount != 70.0).to be true
      end
    end
  end

  describe "GET #index" do
    before(:each) do
      allow_message_expectations_on_nil
    end

    context "when no user logged in" do
      it "returns an error" do
        get :index, format: :json
        expect(response.status).to eq(404)
      end
    end

    context "when user logged in" do
      before(:each) do
        controller.login(user)
      end

      it "without admin or filter parameter returns an index of the user's expenses" do
        get :index, format: :json
        expect(json.all? {|id, obj| obj["user_id"] == user.id}).to be true
      end
    end
  end
end

require 'rails_helper'

begin
  Api::UsersController
rescue
  Api::UsersController = nil
end

RSpec.describe Api::UsersController, :type => :controller do
  render_views

  let(:json) { JSON.parse(response.body) }

  describe "POST #create" do
    context "with invalid params" do
      it "validates the presence of the user's username and password" do
        post :create, user: {username: "jack_bruce", password: ""}
        expect(User.last).to be nil
      end

      it "validates that the password is at least 6 characters long" do
        post :create, user: {username: "jack_bruce", password: "short"}
        expect(User.last).to be nil
      end
    end

    context "with valid params" do
      it "redirects user to posts index on success" do
        post :create, format: :json, user: {username: "jack_bruce", password: "password"}
        expect(User.last.username).to eq("jack_bruce")
      end
    end
  end
end

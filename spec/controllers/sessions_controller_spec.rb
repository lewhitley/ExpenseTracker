require 'rails_helper'

begin
  Api::SessionsController
rescue
  Api::SessionsController = nil
end

RSpec.describe Api::SessionsController, :type => :controller do
  render_views

  let(:json) { JSON.parse(response.body) }

  before(:each) do
    allow_message_expectations_on_nil
    User.create!({username: "jack_bruce", password: "abcdef"})
  end

  context "with invalid credentials" do
    it "returns error with an non-existent user" do
      post :create, format: :json, user: {username: "jill_bruce", password: "abcdef"}
      expect(response.status).to eq(401)
      expect(json).to eq(["Invalid username/password combination"])
    end

    it "returns error on bad password" do
      post :create, format: :json, user: {username: "jack_bruce", password: "notmypassword"}
      expect(response.status).to eq(401)
      expect(json).to eq(["Invalid username/password combination"])
    end
  end

  context "with valid credentials" do
    it "gives user data on success" do
      post :create, format: :json, user: {username: "jack_bruce", password: "abcdef"}
      expect(json["username"]).to eq("jack_bruce")
      expect(json["admin"]).to be false
    end
  end
end

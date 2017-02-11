require 'rails_helper'
begin
  User
rescue
  User = nil
end

RSpec.describe User, :type => :model do
  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "ted_bruce", password: "abcdef")
      user = User.find_by_username("ted_bruce")
      expect(user.password).not_to be("abcdef")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "ted_bruce", password: "abcdef")
    end
  end

  it "is valid with valid attributes" do
    user = User.new(username: "ted_bruce", password: "abcdef")
    expect(user).to be_valid
  end

  it "is not valid without a username" do
    user = User.new(username: nil)
    expect(user).to_not be_valid
  end

  it "is not valid without a password" do
    user = User.new(password: "")
    expect(user).to_not be_valid
  end
end

require 'rails_helper'

RSpec.describe ApplicationController, :type => :controller do
  describe "CSRF protection" do
    it "protects from forgery" do
      expect(ApplicationController.new.forgery_protection_strategy).not_to be_nil
    end
  end

  controller do
    def index
      @current_user = current_user
      render text: 'Hello World'
    end
  end

  describe "#current_user" do
    it "returns nil when no one logged in" do
      get :index
      expect(controller.current_user).to be nil
    end
  end
end

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_username(params[:user][:username])
    if @user.is_password?(params[:user][:password])
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: Hash.new
    else
      render json: ["No user currently logged in"], status: 404
    end
  end
end

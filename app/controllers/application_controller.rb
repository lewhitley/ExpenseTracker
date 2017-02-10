class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :require_login

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def require_login
    unless logged_in?
      render json: ["No user currently logged in"], status: 404
    end
  end

  def logged_in?
    !!current_user
  end
end

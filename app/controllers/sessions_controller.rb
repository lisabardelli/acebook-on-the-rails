class SessionsController < ApplicationController
  include BCrypt

  def new
    @user = User.new()
  end

  def create
    user = User.find_by_email(params[:email])
    # if user && user.password_string == params[:password]
    if user && Password.new(user.password) == params[:password]
      session[:user_id] = user.id
      redirect_to posts_url, notice: "Logged in!"
    else
      flash.now[:alert] = "Email or password is invalid"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url, notice: "Logged out!"
  end

end

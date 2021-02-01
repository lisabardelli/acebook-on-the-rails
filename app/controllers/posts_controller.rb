class PostsController < ApplicationController

  def create
    @post = Post.create(post_params)
    redirect_to posts_url
  end

  def index
    @post = Post.new
    @posts = Post.all
  end

  def index_API
    @posts = Post.all
    render json: @posts
  end



  private

  def post_params
    params.require(:post).permit(:message)
  end
end

class PostsController < ApplicationController
  
  def create
    @user = current_user
    @post = @user.posts.create(post_params)
    redirect_to posts_url
  end

  def index
    @post = Post.new
    @posts = Post.all
  end

  def index_Api
    p "iam in the index_api"
    @post = Post.new
    sql = 'SELECT posts.*, users.username
    FROM posts 
    INNER JOIN users 
    ON posts.user_id = users.id'
    @posts = ActiveRecord::Base.connection.execute(sql)
    # p 'posts as result of sql query' 
    # posts is a list of hash
    #  @posts.each do |post|
    #   p post
      # it resturns an hash
    # end 
   
"-----------------"
json_object = {
  "posts"=> []
}

@posts.each do |post|
  # post['id'] to get the id
json_subnode = {
  "id": post['id'],
  "message": post['message'],
  "created_at": post['created_at'],
  "updated_at": post['updated_at'],
  "username": post['username']
}
# p 'json_subnode'
#  p json_subnode
json_object["posts"]<< json_subnode
p 'json_object'
 p json_object
end 
"-----------------"
    render json: @posts

  end


  private

  def post_params
    params.require(:post).permit(:message)
  end
end

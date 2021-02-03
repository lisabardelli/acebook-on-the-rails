class PostsController < ApplicationController

  def create
    @user = current_user
    @post = @user.posts.create(post_params)
    p "triggered"
    redirect_to posts_url
  end

  def create_API
#     respond_to do |format|

#       @post = Post.new(params[:post])
#        if @post.save
#         #  flash[:notice] = "Prayer Successfully created."
#          format.json{ render :json => @post, :status => :created }

#          p format
#        else 
#         #  flash[:notice] = "Error"
#          format.json{ render :json => @post, :status => :created }
#        end
#     end 
# "---------------"
data_json = JSON.parse request.body.read
p 'data_json'
p data_json
@post = Post.new(data_json)
@post.save


  end


  def index
    @post = Post.new
    @posts = Post.all
  end

  def index_API
    p "iam in the index_api"
    @post = Post.new
    sql = 'SELECT posts.*, users.username
    FROM posts 
    INNER JOIN users 
    ON posts.user_id = users.id'
    @posts = ActiveRecord::Base.connection.execute(sql)
json_object = {
  "posts"=> []
}
      @posts.each do |post|
      json_subnode = {
        "id": post['id'],
        "message": post['message'],
        "created_at": post['created_at'],
        "updated_at": post['updated_at'],
        "username": post['username']
      }
      json_object["posts"]<< json_subnode
      end 
    render json: @posts
  end

  private

  def post_params
    params.require(:post).permit(:message)
  end
end

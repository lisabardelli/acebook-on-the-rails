require 'rails_helper'

RSpec.feature "New User", type: :feature do
  scenario "Can sign up and be directed to posts" do
    visit "/"
    click_link "sign-up"
    # User.create!(username: 'test', email: 'john@doe.com', password: 'abép*éb«be')
    # username = "Stephen"
    # email= "stephen@test.com"
    # password_string= "stephenisntreal"
    fill_in "user[username]", with: 'test'
    fill_in "user[email]", with: 'john@doe.com'
    fill_in "user[password_string]", with: 'abép*éb«be'
    click_button "Create Account"
    expect(current_path).to eq("/posts")
  end
end



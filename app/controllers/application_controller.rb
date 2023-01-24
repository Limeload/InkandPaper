class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  # # Add your routes here
  get '/users' do
    User.all.to_json
  end

  get '/users/:id' do
    user = User.find(params[:id]).to_json
  end

  post '/users' do
    newUser = User.create(username:params[:username], password:params[:password]).to_json
  end

end

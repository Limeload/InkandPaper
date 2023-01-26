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

  get '/books' do
    books = Book.all.order(:title)
    books.to_json(include: :author)
  end

  post '/books' do
    author1 = Author.all.find_by(last_name: params[:author])
    newBook = Book.create(title:params[:title], author_id:author1.id, genre:params[:genre], user_id:1)
    newBook.to_json
  end
end

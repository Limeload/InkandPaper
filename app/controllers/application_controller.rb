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
    books.to_json
  end

  get '/books/:id' do
    book = Book.find(params[:id]).to_json
  end


  post '/books' do
    newBook = Book.create(title:params[:title], author:params[:author], genre:params[:genre], image_URL:params[:image_URL], user_id:1)
    newBook.to_json
  end

  patch '/books/id' do
    book1 = Book.find(params[:id])
    book1.update(user_id: params[:user_id])
    Book.all.to_json
  end

  delete '/books/id' do
    Book.find(params[:id]).destroy
    Book.all.to_json
  end
  
end


class User < ActiveRecord::Base
  has_many :books, class_name: "book", foreign_key: "books_id"
end

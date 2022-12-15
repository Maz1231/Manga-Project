class BooksController < ApplicationController
    
    def index
        book = Book.all
         render json: book,  status: :ok
     end
end

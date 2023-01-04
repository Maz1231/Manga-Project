class BooksController < ApplicationController
    
    def index
        book = Book.all
         render json: book,  status: :ok
     end

     def show
        book = Book.find(params[:id])
        render json: book,  status: :ok
    end

    def update
        book = Book.find_by!(id: params[:id])
        book.update!(books_params)
        render json: book, status: :accepted
    end

    def create
        book = Book.create!(books_params)
        render json: book, status: :created
    end

    def destroy 
        book = Book.find_by!(id: params[:id])
        book.destroy
        head :no_content
    end

    private

    def books_params
        params.permit(:title, :isbn, :year, :price, :buy, :image, :description, :author_id)
    end

end

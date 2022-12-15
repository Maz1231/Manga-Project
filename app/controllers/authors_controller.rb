class AuthorsController < ApplicationController
    
    def index
        author = Author.all
         render json: author,  status: :ok
     end

     def show
        author = Author.find(params[:id])
        render json: author,  status: :ok
    end

    def update
        author = Author.find_by!(id: params[:id])
        author.update!(authors_params)
        render json: author, status: :accepted
    end

    def create
        author = Author.create!(authors_params)
        render json: author, status: :created
    end

    def destroy 
        author = Author.find_by!(id: params[:id])
        author.destroy
        head :no_content
    end

    private

    def authors_params
        params.permit(:first_name, :last_name)
    end

end



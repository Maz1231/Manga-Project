class CategoriesController < ApplicationController
    
    def index
        category = Category.all
         render json: category,  status: :ok
     end

     def show
        category = Category.find(params[:id])
        render json: category,  status: :ok
    end

    def update
        category = Category.find_by!(id: params[:id])
        category.update!(categories_params)
        render json: category, status: :accepted
    end

    def create
        category = Category.create!(categories_params)
        render json: category, status: :created
    end

    def destroy 
        category = Category.find_by!(id: params[:id])
        category.destroy
        head :no_content
    end

    private

    def categories_params
        params.permit(:name)
    end

     

end

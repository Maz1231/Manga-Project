class StoresController < ApplicationController
    
    def index
        store = Store.all
         render json: store,  status: :ok
     end

     def show
        store = Store.find(params[:id])
        render json: store,  status: :ok
    end

    def update
        store = Store.find_by!(id: params[:id])
        store.update!(stores_params)
        render json: store, status: :accepted
    end

    def create
        store = Store.create!(stores_params)
        render json: store, status: :created
    end

    private

    def stores_params
        params.permit(:image, :price, :image, :description)
    end

end

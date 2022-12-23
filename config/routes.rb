Rails.application.routes.draw do
  resources :stores, only: [:index, :show, :create, :update]
  resources :books
  resources :categories
  resources :authors
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
end

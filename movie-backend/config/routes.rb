Rails.application.routes.draw do
  root to: 'movies#index'
  resources :user_favorite_movies
  resources :movies 
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

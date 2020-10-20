class Movie < ApplicationRecord
    has_many :user_favorite_movies
    has_many :users, through: :user_favorite_movies
end

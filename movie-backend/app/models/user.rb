class User < ApplicationRecord
    has_many :user_favorite_movies
    has_many :movies, through: :user_favorite_movies
end

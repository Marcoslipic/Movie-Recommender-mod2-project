class UserFavoriteMoviesController < ApplicationController

    def index 
        @user_favorite_movies = UserFavoriteMovie.all 
        render json: @user_favorite_movies
    end

    def show 
        @user_favorite_movie = User.find(params[:id])
        render json: @user_favorite_movie
    end 

    def create 
        @User = User.create(
            user_id: params[:user_id],
            movie_id: params[:movie_id]
        )
    end
end

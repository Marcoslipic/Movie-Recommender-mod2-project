class MoviesController < ApplicationController

    def index 
        @movies = Movie.all 
        render json: @movies, include: [:user_favorite_movies]
    end

    def show 
        @movie = Movie.find(params[:id])
        render json: @movie, include: [:user_favorite_movies]
    end 

end

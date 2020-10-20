class UsersController < ApplicationController

    def index 
        @users = User.all 
        render json: @users, inculde: [:user_favorite_movies]
    end

    def show 
        @user = User.find(params[:id])
        render json: @user, include: [:user_favorite_movies]
    end 

    def create 
        @User = User.create(
            name: params[:name]
        )
    end
end

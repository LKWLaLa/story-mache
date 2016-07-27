class GenresController < ApplicationController

  before_action :set_genre, only: [:show, :destroy]


  def index
    @genres = Genre.all
    render json: @genres, status: 200
  end


  def create
    @genre = Genre.create(name: params["name"])

    render json: @genre, status: 201
  end


  def show
    render json: @genre, status: 200
  end

  def destroy
    @genre.destroy
    render json: {}, status: 204 
  end


  private

  def set_genre
   @genre = Genre.find_by(id: params[:id])
  end


end
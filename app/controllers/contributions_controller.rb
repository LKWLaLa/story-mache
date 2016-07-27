class ContributionsController < ApplicationController

  before_action :set_contribution, only: [:show, :destroy]


  def index
    @contributions = Contribution.all
    render json: @contributions, status: 200
  end


  def create
    @contribution = Contribution.create(
      body: params["body"], 
      author: params["author"], 
      story_id: params["story_id"])

    render json: @contribution, status: 201
  end


  def show
    render json: @contribution, status: 200
  end

  def destroy
    @contribution.destroy
    render json: {}, status: 204 
  end


  private

  def set_contribution
   @contribuion = Contribution.find_by(id: params[:id])
  end



end
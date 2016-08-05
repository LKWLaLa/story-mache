class StoriesController < ApplicationController

  before_action :set_story, only: [:show, :destroy, :update]
    wrap_parameters include: [:id, :contributions_attributes]


  def index
    @stories = Story.all
    render json: @stories, status: 200
  end


  def create
    @story = Story.create(title: params["title"])
    render json: @story, status: 201
  end

  def update
    puts params
    if @story.update(story_params)
      @story.increment!(:total_contributions)
      render json: @story, status: 200
    end
  end


  def show
    render json: @story, status: 200
  end

  def destroy
    @story.destroy
    render json: {}, status: 204 
  end


  private

  def set_story
   @story = Story.find_by(id: params[:id])
  end

  def story_params
    params.require(:story).permit(:title, :total_contributions, 
      :contributions_attributes => [:story_id, :body, :author])
  end


end
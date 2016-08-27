class AuthorsController < ApplicationController


  def show
    @author = Author.find_by(name: params[:name])
    render json: @author, status: 200
  end

end

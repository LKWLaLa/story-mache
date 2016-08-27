class AuthorsController < ApplicationController


  def show
    @author = Author.find_by(:name)
    render json: @author, status: 200
  end

end

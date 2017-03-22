class Api::TagsController < ApplicationController

  def index
    if params[:name]
      @tag = Tag.find_by(name: params[:name])
      render :show
    else
      @tags = Tag.all
      render :index
    end
  end

end

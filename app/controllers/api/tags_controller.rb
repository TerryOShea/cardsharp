class Api::TagsController < ApplicationController

  def index
    if params[:name]
      @tag = Tag.find_by(name: params[:name])
      render :show
    elsif params[:popular]
      @tags = Tag.joins(:taggings).joins(:decks).group("tags.id").order("COUNT(*) desc").limit(params[:popular])
      render :index
    else
      @tags = Tag.all
      render :index
    end
  end

end

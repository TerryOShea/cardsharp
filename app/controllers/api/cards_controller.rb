class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
  end

end

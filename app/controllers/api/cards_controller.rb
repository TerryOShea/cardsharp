class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:side_a, :side_b, :deck_id)
  end

end

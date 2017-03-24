class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    @current_user = current_user
  end

  def create
    @card = Card.new(card_params)
    if @card.save
      @mastery = @card.mastery(current_user.id)
      p "mastery: "
      p @mastery
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      @mastery = @card.mastery(current_user.id)
      p "mastery: "
      p @mastery
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy
    render :show
  end

  private

  def card_params
    params.require(:card).permit(:side_a, :side_b, :deck_id, :user_id)
  end

end

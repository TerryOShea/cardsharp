class Api::MasteriesController < ApplicationController

  def show
    @mastery = Mastery.find(params[:id])
    if @mastery
      render :show
    else
      render @mastery.errors.full_messages, status: 422
    end
  end

  def create
    @mastery = Mastery.new(mastery_params)
    if @mastery.save
      render :show
    else
      render @mastery.errors.full_messages, status: 422
    end
  end

  def update
    mastery = Mastery.find_by(card_id: params[:mastery][:card_id], user_id: current_user.id)
    if mastery.update(mastery_params)
      @card = Card.find(mastery.card_id)
      @mastery = { id: mastery.id, value: mastery.value }
      render 'api/cards/show'
    else
      render mastery.errors.full_messages, status: 422
    end
  end

  private

  def mastery_params
    params.require(:mastery).permit(:user_id, :card_id, :value)
  end

end

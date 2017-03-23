class Api::SubscriptionsController < ApplicationController

  def create
    subscription = Subscription.new(subscription_params)
    subscription.user_id = current_user.id
    if subscription.save
      @deck = Deck.find(subscription.deck_id)
      render 'api/decks/show'
    else
      render subscription.errors.full_messages, status: 422
    end
  end

  def destroy
    subscription = Subscription.find_by(user_id: current_user.id, deck_id: params[:deck_id])
    if subscription.destroy
      @deck = Deck.find(params[:deck_id])
      render 'api/decks/show'
    else
      render subscription.errors.full_messages, status: 422
    end
  end

  private

  def subscription_params
    params.require(:subscription).permit(:deck_id)
  end

end

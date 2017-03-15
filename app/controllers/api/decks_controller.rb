class Api::DecksController < ApplicationController

  def index
    if params[:recent]
      @decks = Deck.most_recent(params[:recent][:num].to_i, params[:recent][:offset].to_i, current_user.id)
    elsif params[:authorId]
      @decks = Deck.authored_by(params[:authorId].to_i, current_user.id)
    else
      @decks = Deck.all
    end

    render :index
  end

  def show
    @deck = Deck.find(params[:id])
    if @deck
      render :show
    else
      render json: ["deck not found"], status: 422
    end
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :description, :is_private)
  end

end

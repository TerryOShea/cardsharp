class Api::DecksController < ApplicationController

  def index
    if params[:recent]
      num = params[:recent][:num].to_i || 10
      offset = params[:recent][:offset].to_i || 0
      @decks = Deck.most_recent(num, offset)
    elsif params[:authorId]
      @decks = Deck.authored_by(params[:authorId].to_i, current_user.id)
    else
      @decks = Deck.all
    end

    render :index
  end

  def show
    @deck = Deck.includes(:cards).find(params[:id])
    if @deck
      @deck.touch
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
    @deck = Deck.find(params[:id])
    if @deck.update(deck_params)
      render :show
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    @deck.destroy
    render :show
  end

  private

  def deck_params
    params.require(:deck).permit(:title, :description, :is_private, :category)
  end

end

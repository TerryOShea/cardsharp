class Api::DecksController < ApplicationController

  def index
    if params[:recent]
      num = params[:recent][:num].to_i || 10
      offset = params[:recent][:offset].to_i || 0
      @decks = Deck.most_recent(num, offset)
    elsif params[:authorId]
      @decks = current_user.decks + current_user.subscribed_decks
    else
      @decks = Deck.all
    end

    @current_user = current_user
    render :index
  end

  def show
    @deck = Deck.includes(:cards).includes(:tags).find(params[:id])
    if @deck
      @deck.touch
      @current_user = current_user
      render :show
    else
      render json: ["deck not found"], status: 422
    end
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    p @deck
    if @deck.save
      p "new deck: "
      p @deck
      render :show, include: :tags
    else
      p @deck.errors.full_messages
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
    @deck = Deck.find(params[:id])
    if @deck.update(deck_params)
      render :show, include: :tags
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
    params.require(:deck).permit(:title, :description, :is_private, tag_names: [])
  end

end

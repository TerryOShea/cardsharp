Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :decks, only: [:create, :destroy, :index, :update, :show]
    resources :cards, only: [:show, :create, :destroy, :update]
    resources :tags, only: [:index, :show]
  end
end

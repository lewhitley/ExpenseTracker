Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resource :expense, only: [:create, :destroy, :index, :update, :show]
  end

  root "static_pages#root"
end

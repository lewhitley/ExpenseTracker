Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :expenses, only: [:create, :destroy, :index, :update]
  end

  root "static_pages#root"
end

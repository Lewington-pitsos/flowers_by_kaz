Rails.application.routes.draw do

  resources :categories do
    resource :works, only: [:index, :new, :create]
  end

  resources :works, only: [:show, :edit, :update, :destroy]

  get '/home' => 'home#index', as: :home

  get '/about' => 'about#index', as: :about

  get '/services' => 'services#index', as: :services

  get '/contact' => 'contact#index', as: :contact

  get '*path' => redirect('/home')
end

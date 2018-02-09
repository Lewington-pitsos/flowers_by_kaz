Rails.application.routes.draw do
  resources :admins

  resources :categories do
    resource :works, only: [:index, :new, :create]
  end

  resources :works, only: [:show, :edit, :update, :destroy]

  post '/send' => 'contact#send', as: :send

  get '/home' => 'home#index', as: :home

  get '/about' => 'about#index', as: :about

  get '/services' => 'services#index', as: :services

  root 'admins#authorize', as: 'authorize'

  get '/contact' => 'contact#index', as: :contact

  get '*path' => redirect('/home')
end

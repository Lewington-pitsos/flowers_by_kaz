Rails.application.routes.draw do
  get '/home' => 'home#index', as: :home

  get '/about' => 'about#index', as: :about
end

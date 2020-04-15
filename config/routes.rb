Rails.application.routes.draw do
  resources :schools
  resources :school_classes
  devise_for :school_admins
  devise_for :users
  root to: 'pages#home'

  get 'fetch_for_sign_up', to: 'school_classes#fetch_for_sign_up'
  post 'fetch_for_sign_up', to: 'school_classes#fetch_for_sign_up'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

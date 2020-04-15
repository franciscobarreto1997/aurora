Rails.application.routes.draw do
  get 'schools/index'
  get 'schools/new'
  get 'schools/create'
  get 'schools/show'
  get 'schools/edit'
  get 'schools/update'
  get 'schools/destroy'
  resources :school_classes
  devise_for :school_admins
  devise_for :users
  root to: 'pages#home'

  get 'fetch_for_sign_up', to: 'school_classes#fetch_for_sign_up'
  post 'fetch_for_sign_up', to: 'school_classes#fetch_for_sign_up'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

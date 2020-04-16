Rails.application.routes.draw do
  resources :teacher_codes, only: [:index, :new, :crete, :destroy]
  resources :schools
  resources :school_classes
  devise_for :school_admins
  devise_for :users
  root to: 'pages#home'

  post 'fetch_school_classes_for_sign_up', to: 'school_classes#fetch_school_classes_for_sign_up'
  get 'fetch_roles_for_sign_up', to: 'roles#fetch_roles_for_sign_up'
  post 'fetch_teachers_codes_for_sign_up', to: 'teacher_codes#fetch_teachers_codes_for_sign_up'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

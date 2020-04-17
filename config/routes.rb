Rails.application.routes.draw do
  scope :dashboard do
    resources :teacher_codes, only: [:index, :new, :create, :destroy]
    resources :schools, except: [:index]
    resources :school_classes
  end

  devise_for :school_admins, controllers: { registrations: 'school_admins/registrations' }
  devise_for :users, controllers: { registrations: 'users/registrations' }

  root to: 'pages#home'

  post 'fetch_school_classes_for_sign_up', to: 'school_classes#fetch_school_classes_for_sign_up'
  get 'fetch_roles_for_sign_up', to: 'roles#fetch_roles_for_sign_up'
  post 'fetch_teachers_codes_for_sign_up', to: 'teacher_codes#fetch_teachers_codes_for_sign_up'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

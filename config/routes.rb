Rails.application.routes.draw do

  authenticate :school_admin do
    scope :dashboard do
      resources :teacher_codes, only: [:index, :new, :create, :destroy]
      resources :schools, except: [:index]
      resources :school_classes
      resources :subjects
    end
  end

  authenticate :user do
    scope :dashboard do
      resources :subjects, only: [:index, :show]
      resources :lectures
      resources :messages
    end
  end

  devise_for :school_admins, controllers: { registrations: 'school_admins/registrations' }
  devise_for :users, controllers: { registrations: 'users/registrations' }

  root to: 'pages#home'

  get 'fetch_roles_for_sign_up', to: 'roles#fetch_roles_for_sign_up'
  post 'fetch_school_classes_for_sign_up', to: 'school_classes#fetch_school_classes_for_sign_up'
  post 'fetch_teachers_codes_for_sign_up', to: 'teacher_codes#fetch_teachers_codes_for_sign_up'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

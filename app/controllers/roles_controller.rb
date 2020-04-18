class RolesController < ApplicationController

  skip_before_action :authenticate_user!, only: [:fetch_roles_for_sign_up]

  def fetch_roles_for_sign_up
    render json: Role.all
  end
end

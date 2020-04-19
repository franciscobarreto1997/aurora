class RolesController < ApplicationController
  def fetch_roles_for_sign_up
    render json: Role.all
  end
end

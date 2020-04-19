class PagesController < ApplicationController
  def home
    redirect_to new_school_path if school_admin_signed_in?
  end
end

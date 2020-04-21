class PagesController < ApplicationController
  def home
    if school_admin_signed_in?
      school = School.find_by school_admin_id: current_school_admin.id
      redirect_to school_school_classes_path(school.id)
    end
    redirect_to subjects_path if user_signed_in?
  end
end

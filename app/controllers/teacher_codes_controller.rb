class TeacherCodesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
  end

  def new
  end

  def create
  end

  def destroy
  end

  def fetch_teachers_codes_for_sign_up
    teacher_code =  TeacherCode.find_by code: params[:teacher_code] || nil
    if teacher_code != nil
      school = School.find_by id: teacher_code.school_id
      render json: school
    else
      render json: []
    end
  end
end

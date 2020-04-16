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
    teacher_code = params[:teacher_code]
    render json: TeacherCode.where(code: teacher_code)
  end
end

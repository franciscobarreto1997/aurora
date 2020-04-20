class SchoolClassesController < ApplicationController

  skip_before_action :verify_authenticity_token, only: [:fetch_school_classes_for_sign_up]

  def index
    @school = School.find(params[:school_id])
    @school_classes = SchoolClass.where(school_id: @school.id)
    @school_class = SchoolClass.new
  end

  def show
  end

  def create
    @school = School.find(params[:school_id])
    @school_class = SchoolClass.new(school_class_params)
    @school_class.school = @school
    @school_class.school_code = @school.code
    @school_classes = SchoolClass.where(school_id: @school.id)
    if @school_class.save
      redirect_to school_school_classes_path
    else
      p @school_class.errors
      render "school_classes/index", locals: { school_classes: @school_classes }
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def fetch_school_classes_for_sign_up
    render json: SchoolClass.where(school_code: params[:school_code])
  end

  private

  def school_class_params
    params.require(:school_class).permit(:name, :school_id, :school_code)
  end
end

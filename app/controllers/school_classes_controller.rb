class SchoolClassesController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def fetch_for_sign_up
    school_code = params[:school_code]
    classes = SchoolClass.where(school_code: school_code)
    classes_arr = []
    classes.each do |school_class|
      classes_arr << school_class
    end
    p classes_arr
    render json: classes_arr
  end
end

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
    render json: SchoolClass.where(school_code: school_code)
  end
end

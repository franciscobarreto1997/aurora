class SchoolsController < ApplicationController
  def new
    @school = School.new
  end

  def create
    @school = School.new(school_params)
    @school.code = generate_school_code
    @school.school_admin = current_school_admin
    if @school.save
      redirect_to school_school_classes_path(@school)
    else
      p @school.errors
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def school_params
    params.require(:school).permit(:name, :code)
  end

  def generate_school_code
    letters =  ("A".."Z").to_a
    numbers = (1..9).to_a.map { |n| n.to_s }
    code = ""
    5.times do
      code += letters.sample + numbers.sample
    end
    code
  end
end

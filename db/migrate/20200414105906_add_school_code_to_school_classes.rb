class AddSchoolCodeToSchoolClasses < ActiveRecord::Migration[6.0]
  def change
    add_column :school_classes, :school_code, :string
  end
end

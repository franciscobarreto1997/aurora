class AddSchoolAdminRefToSchools < ActiveRecord::Migration[6.0]
  def change
    add_reference :schools, :school_admin, null: false, foreign_key: true
  end
end

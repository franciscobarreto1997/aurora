class AddSchoolCodeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :school_code, :string
  end
end

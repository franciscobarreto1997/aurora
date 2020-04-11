class AddSchoolRefToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :school_class, null: false, foreign_key: true
  end
end

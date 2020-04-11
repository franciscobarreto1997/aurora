class Createusersubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :users_subjects, id: false do |t|
      t.belongs_to :user
      t.belongs_to :subject
    end
  end
end

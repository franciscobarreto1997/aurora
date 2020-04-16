class CreateTeacherCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :teacher_codes do |t|
      t.string :code
      t.references :school, null: false, foreign_key: true

      t.timestamps
    end
  end
end

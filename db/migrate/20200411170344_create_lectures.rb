class CreateLectures < ActiveRecord::Migration[6.0]
  def change
    create_table :lectures do |t|
      t.references :subject, null: false, foreign_key: true
      t.string :summary
      t.string :slides

      t.timestamps
    end
  end
end

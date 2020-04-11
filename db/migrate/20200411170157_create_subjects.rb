class CreateSubjects < ActiveRecord::Migration[6.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.references :school_class, null: false, foreign_key: true
      t.integer :credits
      t.string :description

      t.timestamps
    end
  end
end

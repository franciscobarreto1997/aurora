class Subject < ApplicationRecord
  belongs_to :user
  belongs_to :school_class
  has_and_belongs_to_many :users, join_table: :users_subjects

  validates :name, uniqueness: true, length: { minimum: 5 }
  validates :credits, numericality: { only_integer: true }
  validates :description, length: { minimum: 50 }
end

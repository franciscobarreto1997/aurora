class School < ApplicationRecord
  has_many :school_classes

  validates :name, presence: true, uniqueness: true, length: { minimum: 10 }
  validates :code, presence: true, uniqueness: true, length: { minimum: 10 }
end

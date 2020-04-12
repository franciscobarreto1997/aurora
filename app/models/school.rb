class School < ApplicationRecord
  has_many :school_classes
  belongs_to :school_admin

  validates :name, presence: true, uniqueness: true, length: { minimum: 10 }
  validates :code, presence: true, uniqueness: true, length: { minimum: 10 }
end

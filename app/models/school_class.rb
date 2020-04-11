class SchoolClass < ApplicationRecord
  belongs_to :school

  validates :name, presence: true, uniqueness: true, length: { minimum: 1 }
end

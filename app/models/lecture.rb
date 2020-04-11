class Lecture < ApplicationRecord
  belongs_to :subject

  validates :summary, length: { minimum: 10 }
end

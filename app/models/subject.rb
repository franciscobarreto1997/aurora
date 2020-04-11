class Subject < ApplicationRecord
  belongs_to :user
  belongs_to :school_class
  has_and_belongs_to_many :users
end

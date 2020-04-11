class Message < ApplicationRecord
  belongs_to :subject
  belongs_to :user
end

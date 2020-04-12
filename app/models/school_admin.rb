class SchoolAdmin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :school

  validates :email, presence: true, format: /.+@.+\.\w{2,3}/
  validates :password, length: { minimum: 8 }, format: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
end

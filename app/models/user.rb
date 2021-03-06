class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_and_belongs_to_many :subjects, join_table: :users_subjects
  has_many :messages
  belongs_to :role
  belongs_to :school_class

  validates :email, presence: true, format: /.+@.+\.\w{2,3}/
  validates :password, length: { minimum: 8 }, format: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/
  validates :first_name, :last_name, presence: true
  validates :role, presence: true

end

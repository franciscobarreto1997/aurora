# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Role.destroy_all
SchoolClass.destroy_all
School.destroy_all
SchoolAdmin.destroy_all

# Role.create!(name: "Student")
# Role.create!(name: "Teacher")

SchoolAdmin.create!(email: "franciscoantunesbarreto1997@gmail.com", password: "macklemore123")

def generate_school_code
  letters =  ("A".."Z").to_a
  numbers = (1..9).to_a.map { |n| n.to_s }
  code = ""
  5.times do
    code += letters.sample + numbers.sample
  end
  code
end

School.create!(name: "Escola do Bolinha", code: generate_school_code, school_admin_id: SchoolAdmin.first.id)

SchoolClass.create!(name: "10ºL", school_id: School.first.id, school_code: School.first.code)

SchoolClass.create!(name: "11ºJ", school_id: School.first.id, school_code: generate_school_code)


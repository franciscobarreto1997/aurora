# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_12_105625) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "lectures", force: :cascade do |t|
    t.bigint "subject_id", null: false
    t.string "summary"
    t.string "slides"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["subject_id"], name: "index_lectures_on_subject_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "file"
    t.string "text"
    t.bigint "subject_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["subject_id"], name: "index_messages_on_subject_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "school_admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_school_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_school_admins_on_reset_password_token", unique: true
  end

  create_table "school_classes", force: :cascade do |t|
    t.string "name"
    t.bigint "school_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["school_id"], name: "index_school_classes_on_school_id"
  end

  create_table "schools", force: :cascade do |t|
    t.string "name"
    t.string "code"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "school_admin_id", null: false
    t.index ["school_admin_id"], name: "index_schools_on_school_admin_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.bigint "user_id", null: false
    t.bigint "school_class_id", null: false
    t.integer "credits"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["school_class_id"], name: "index_subjects_on_school_class_id"
    t.index ["user_id"], name: "index_subjects_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.bigint "school_class_id", null: false
    t.string "role"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["school_class_id"], name: "index_users_on_school_class_id"
  end

  create_table "users_subjects", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "subject_id"
    t.index ["subject_id"], name: "index_users_subjects_on_subject_id"
    t.index ["user_id"], name: "index_users_subjects_on_user_id"
  end

  add_foreign_key "lectures", "subjects"
  add_foreign_key "messages", "subjects"
  add_foreign_key "messages", "users"
  add_foreign_key "school_classes", "schools"
  add_foreign_key "schools", "school_admins"
  add_foreign_key "subjects", "school_classes"
  add_foreign_key "subjects", "users"
  add_foreign_key "users", "school_classes"
end

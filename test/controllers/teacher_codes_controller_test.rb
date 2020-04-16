require 'test_helper'

class TeacherCodesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get teacher_codes_index_url
    assert_response :success
  end

  test "should get new" do
    get teacher_codes_new_url
    assert_response :success
  end

  test "should get create" do
    get teacher_codes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get teacher_codes_destroy_url
    assert_response :success
  end

end

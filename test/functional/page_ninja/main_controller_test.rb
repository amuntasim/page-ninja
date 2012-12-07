require 'test_helper'

module PageNinja
  class MainControllerTest < ActionController::TestCase
    test "should get show_page" do
      get :show_page
      assert_response :success
    end
  
  end
end

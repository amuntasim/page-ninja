Rails.application.routes.draw do

  mount PageNinja::Engine => "/pages"
  root :to => 'home#index'
end

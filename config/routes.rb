PageNinja::Engine.routes.draw do
  match ":name", :to => "main#show_page", :via => "get"

  root :to => 'main#index'
end

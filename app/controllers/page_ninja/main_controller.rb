module PageNinja
  class MainController < PageNinja::ApplicationController

    def index

    end

    def show_page
      @data = get_page(params[:name])
      respond_to do |format|
        format.html {render :layout => "page_ninja/#{@data["page"]["layout"]}"}
        format.js
      end
    end

    private
    def get_page(name)
       YAML.load(File.open("app/views/page_ninja/#{params[:name]}.yml","r")) rescue raise rescue raise(Errors::MissingPage)
    end
  end
end

class PageGenerator < Rails::Generators::Base
  source_root File.expand_path('../templates', __FILE__)
  argument :page_name, :type => :string
  class_option :template, :type => :string, :default => 'default', :desc => "Specify template file name."
  class_option :layout_name, :type => :string, :default => 'page_ninja_default', :desc => "Specify layout template name."

  def generate_page
    template "default.yml.erb", "app/views/page_ninja/#{file_name}.yml"
  end

  private

  def file_name
    page_name.underscore
  end
end

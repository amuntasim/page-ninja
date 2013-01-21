module PageNinja # :nodoc:
  module Errors
    class MissingPage < StandardError
      def to_s
        "No page found, to generate one please run rails g page [PAGE_NAME] or run rails g page --help for more options"
      end
    end
  end
end

# frozen_string_literal: true

require_relative "portfolio/version"

Dir.glob("#{__dir__}/**/*_pb.rb").each {|file| require file}

module Portfolio
  class Error < StandardError; end
  # Your code goes here...
end

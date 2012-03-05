class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_filter :bootstrap_backbone
  
  private
  def bootstrap_backbone
    @_protocols ||= Protocol.all
  end
end

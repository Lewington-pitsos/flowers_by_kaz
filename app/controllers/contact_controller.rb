class ContactController < ApplicationController

  def send(params='lol')
    BasicMailer.welcome_email
  end

  def index

  end
end

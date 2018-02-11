class ContactController < ApplicationController

  def send(params='lol')
    BasicMailer.welcome_email.deliver
    flash.now[:error] = 'Thank you for your enquiry. We should get back to you shortly.'
    render 'index'
  end

  def index

  end

  private

  def mail_info
    params.require(:contact).permit(:address, :name, :content)
  end
end

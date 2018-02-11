class ContactController < ApplicationController

  def send_mail(params='lol')
    BasicMailer.welcome_email.deliver_later
    flash.now[:error] = 'Thank you for your enquiry. We should get back to you shortly.'
    redirect_to home_path
  end

  def index

  end

  private

  def mail_info
    params.require(:contact).permit(:address, :name, :content)
  end
end

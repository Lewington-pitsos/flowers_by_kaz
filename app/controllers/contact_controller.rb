class ContactController < ApplicationController

  def send_mail
    inquiry_info = {email: mail_info[:email], name: mail_info[:name], content: mail_info[:content]}
    BasicMailer.inquiry(inquiry_info).deliver_later
    flash.now[:success] = 'Thank you for your inquiry. We should get back to you shortly.'
    redirect_to home_path
  end

  def index

  end

  private

  def mail_info
    params.permit(:email, :name, :content)
  end
end

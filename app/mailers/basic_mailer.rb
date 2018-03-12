class BasicMailer < ApplicationMailer
  default from: 'altitudechess@gmail.com'
  # default is a hash with a bunch of values representing the default configureation for an email send (address, sender, subejct, etc)

  def inquiry(info)
    @name = info[:name]
    @email = info[:email]
    @content = info[:content]
    mail(to: 'lewington@student.unimelb.edu.au', subject: "Message from #{@name} via flowersbykaz.com")
  end

  def confirmation(info)
    @name = info[:name]
    mail(to: info[:email], subject: "Flowers By Kaz: Inquiry successfully received")
  end


  # the views for a mailer represent email templates that will get sent, NOT pages on the site.
  # you should have html.erb and txt.erb of each email, because html looks nicer, but some people still like/can only use txt. Rails automatically sends the most appripriate template
end

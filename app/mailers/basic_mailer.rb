class BasicMailer < ApplicationMailer
  default from: 'lewington@student.unimelb.edu.au'
  # default is a hash with a bunch of values representing the default configureation for an email send (address, sender, subejct, etc)

  def welcome_email
    @url  = 'http://localhost:3000/home'
    mail(to: 'lewington@student.unimelb.edu.au', subject: 'Welcome to My Awesome Site').deliver
  end


  # the views for a mailer represent email templates that will get sent, NOT pages on the site.
  # you should have html.erb and txt.erb of each email, because html looks nicer, but some people still like/can only use txt. Rails automatically sends the most appripriate template
end

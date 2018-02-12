# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

password = 'q1as1z2'

salt = Digest::SHA1.hexdigest("#{password}--#{Time.now} as random value")

e_pass = Digest::SHA1.hexdigest("#{salt}--#{password}")


admin = Admin.new({
    username: 'louka',
    encrypted_pass: e_pass,
    salt: salt
  })

admin.save

password = 'test123'

salt = Digest::SHA1.hexdigest("#{password}--#{Time.now} as random value")

e_pass = Digest::SHA1.hexdigest("#{salt}--#{password}")

admin2 = Admin.new({
    username: 'kaz123',
    encrypted_pass: e_pass,
    salt: salt
  })

admin2.save

password = 'test123'

salt = Digest::SHA1.hexdigest("#{password}--#{Time.now} as random value")

e_pass = Digest::SHA1.hexdigest("#{salt}--#{password}")

admin2 = Admin.new({
    username: 'kaz123',
    encrypted_pass: e_pass,
    salt: salt
  })

admin2.save

paintings = Category.new({title: 'Bouqets', image: nil, place: 2})
prints = Category.new({title: 'Bomething', image: nil, place: 1})
prints2 = Category.new({title: 'Something', image: nil, place: 3})
prints3 = Category.new({title: 'something', image: nil, place: 4})
prints4 = Category.new({title: 'something', image: nil, place: 5})
prints5 = Category.new({title: 'something', image: nil, place: 6})
prints.save
prints2.save
prints3.save
prints4.save
prints5.save
paintings.save


work1 = Work.new({title: 'art1', image: nil, caption: 'erving first as navy minister and then as agriculture minister; the first professional firefighter corps in Brazil was formed during his tenure. In late 1866 he was appointed commander-in-chief of the fleet engaged in the Paraguayan War, and achieved the rank of admiral. Although historical works have not given much coverage to Inhaúma, some historians regard him among the greatest of the Brazilian navy officers. (Full article...)', category_id: 1, position: 3, place: 3})
work2 = Work.new({title: 'art2', image: nil, caption: 'Mohammad bin Salman (pictured), more than 40 senior Saudi princes and ministers are arrested on corruption charges.', category_id: 1, position: 2, place: 2})
work3 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 1, place: 1})
work9 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 9, place: 9})
work8 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 8, place: 8})
work7 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 7, place: 7})
work6 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 6, place: 6})
work5 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 5, place: 5})
work4 = Work.new({title: 'art3', image: nil, caption: 'civilians destroyed and ransacked Jewish homes, businesses and synagogues in Germany and Austria, resulting in at least 90 deaths and the deportation of over 30,000 others to concentration camps.', category_id: 1, position: 4, place: 4})
work1.save
work2.save
work3.save
work4.save
work5.save
work6.save
work7.save
work8.save
work9.save

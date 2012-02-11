Factory.define :protocol do |p|
  p.name  { Faker::Lorem.words}
  p.body  { Faker::Lorem.paragraphs }
end
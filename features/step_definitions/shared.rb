Given /^there are the following (\w+):$/ do |model, table|
  model = model.singularize
  table.hashes.each do |attributes|
    Factory(model.to_sym, attributes)
  end
end
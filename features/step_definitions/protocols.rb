When /^I follow the "(.*)" link for protocol "([^"]+)"$/ do |link_name, protocol_name|
  protocol = Protocol.find_by_name(protocol_name)
  with_scope("protocol with id #{protocol.id}"){ step "I follow \"#{link_name}\"" }
end

Then /^I should see protocol with name "([^"]+)"$/ do |name|
  protocol = Protocol.find_by_name(name)
  page.should have_css("#protocol_#{protocol.id}")
end

Then /^protocol with name "([^"]+)" should not exist$/ do |name|
  protocol = Protocol.find_by_name(name)
  protocol.should be_nil
end
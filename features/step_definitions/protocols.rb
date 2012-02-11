When /^I follow the "(.*)" link for protocol "(.*)"$/ do |link_name, protocol_name|
  protocol = Protocol.find_by_name(protocol_name)
  with_scope("protocol with id #{protocol.id}"){ step "I follow \"#{link_name}\"" }
end
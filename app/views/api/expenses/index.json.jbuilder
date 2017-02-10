json.array! @expenses do |expense|
  json.partial! 'api/expenses/expense', expense: expense
end

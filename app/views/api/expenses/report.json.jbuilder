json.set! :total, @expenses.reduce(0){ |sum, expense| sum += expense.amount}

json.set! :start_date, @start_date
json.set! :end_date, @end_date

week_end = @start_date + 7
expense_array = @expenses.to_a

def within_range(expense, week_end)
  expense.created_at >= week_end.to_datetime.change({ hour: 23, min: 59, sec: 59 })
end

def end_in_range(i, week_end)
  i == @expenses.length - 1 &&
    @expenses[i].created_at <= week_end.to_datetime.change({ hour: 23, min: 59, sec: 59 })
end

json.set! :weeks do
  start_i = 0
  week = []

  json.array! @expenses.each_with_index.to_a do |(expense, i)|
    if within_range(expense, week_end) || end_in_range(i, week_end)
      end_in_range(i, week_end) ? end_i = i + 1 : end_i = i
      week = expense_array[start_i...end_i]

      json.set! :expenses do
        json.array! week do |expense|
          json.partial! 'api/expenses/expense', expense: expense
        end
      end
      json.set! :total, week.reduce(0){ |sum, expense| sum += expense.amount}
      json.set! :start_date, week_end - 7
      json.set! :end_date, week_end

      start_i = i
      week_end += 7
    end
    week_end += 7 if week.empty?
  end
end

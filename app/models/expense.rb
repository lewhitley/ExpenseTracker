class Expense < ActiveRecord::Base
  belongs_to :user

  def self.filter_by(user, params)
    Expense.where("expenses.user_id = ? AND expenses.created_at BETWEEN ? AND ?", user.id,
      params[:startDate].to_datetime,
      params[:endDate].to_datetime.change({ hour: 23, min: 59, sec: 59 }))
  end
end

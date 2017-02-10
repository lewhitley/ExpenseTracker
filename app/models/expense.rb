class Expense < ActiveRecord::Base
  belongs_to :user

  def filter_by(report_params, filter_params)
  end

  def report(report_params)
  end
end

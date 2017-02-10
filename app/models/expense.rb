class Expense < ActiveRecord::Base
  belongs_to :user

  def filter_by(filter_params)
  end
end

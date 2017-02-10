class Api::ExpensesController < ApplicationController
  before_action :logged_in?

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      render :show
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def expense_params
    params.require(:expense).permit(:user_id, :amount, :description)
  end
end

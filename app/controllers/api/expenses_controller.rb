class Api::ExpensesController < ApplicationController
  before_action :require_login

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      @expenses = current_user.expenses
      render :index
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def update
    @expense = Expense.find(params[:id])
    if current_user.id == @expense.user_id
      if @expense.update(expense_params)
        @expenses = current_user.expenses
        render :index
      else
        render json: @expense.errors.full_messages, status: 422
      end
    else
      render json: ["You are not the owner of the expense."], status: 404
    end
  end

  def index
    if !params[:admin]
      if params[:filter]
        @expenses = Expense.report(current_user, params[:filter])
        @start_date = params[:filter][:startDate].to_date
        @end_date = params[:filter][:endDate].to_date
        render :report
      else
        @expenses = current_user.expenses
        render :index
      end
    elsif current_user.admin && params[:admin]
      @expenses = Expense.all
      render :index
    else
      render json: ["You are not the owner of the expenses."], status: 404
    end
  end

  def destroy
    @expense = Expense.find(params[:id])
    if current_user.id == @expense.user_id
      @expense.destroy
      @expenses = current_user.expenses
      render :index
    else
      render json: ["You are not the owner of the expense."], status: 404
    end
  end

  def expense_params
    params.require(:expense).permit(:user_id, :amount, :description)
  end
end

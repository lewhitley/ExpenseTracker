class Api::ExpensesController < ApplicationController
  before_action :require_login

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      render :show
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def update
    @expense = Expense.find(params[:id])
    if current_user.id == @expense.user_id
      if @expense.update(expense_params)
        @expenses = Expense.find_by_user_id(current_user.id)
        render :index
      else
        render json: @expense.errors.full_messages, status: 422
      end
    else
      render json: ["You are not the owner of the expense"], status: 404
    end
  end

  def index
    #need more
    if (current_user.id == @expenses.user_id) || (current_user.admin)
      render :index
    else
      render json: ["You are not the owner of the expense"], status: 404
    end
  end

  def show
    @expense = Expense.find(params[:id])
    if (current_user.id == @expense.user_id) || (current_user.admin)
      render :show
    else
      render json: ["You are not the owner of the expense"], status: 404
    end
  end

  def destroy
    @expense = Expense.find(params[:id])
    if current_user.id == @expense.user_id
      @expense.destroy
      render :index
    else
      render json: ["You are not the owner of the expense"], status: 404
    end
  end

  def expense_params
    params.require(:expense).permit(:user_id, :amount, :description)
  end
end

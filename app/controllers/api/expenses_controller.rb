class Api::ExpensesController < ApplicationController
  before_action :require_login

  def create
    @expense = Expense.new(expense_params)
    if @expense.save
      @expenses = Expense.find_by_user_id(current_user.id)
      render :index
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def update
    @expense = Expense.find(params[:id])
    if current_user.id == @expense.user_id
      if @expense.update(expense_params)
        @expenses = Expense.where(user_id: current_user.id)
        render :index
      else
        render json: @expense.errors.full_messages, status: 422
      end
    else
      render json: ["You are not the owner of the expense."], status: 404
    end
  end

  def index
    if !params[:user_id]
      if params[:report] && params[:filter]
        @expenses = Expense.filter_by(params[:report], params[:filter])
      elsif params[:report]
        @expenses = Expense.report(params[:report])
      else
        @expenses = Expense.where(user_id: current_user.id)
      end
      render :index
    elsif current_user.admin && params[:user_id]
      @expenses = Expense.find_by_user_id(params[:user_id])
      render :index
    else
      render json: ["You are not the owner of the expenses."], status: 404
    end
  end

  def show
    @expense = Expense.find(params[:id])
    if (current_user.id == @expense.user_id) || (current_user.admin)
      render :show
    else
      render json: ["You are not the owner of the expense."], status: 404
    end
  end

  def destroy
    @expense = Expense.find(params[:id])
    if current_user.id == @expense.user_id
      @expense.destroy
      @expenses = Expense.find_by_user_id(current_user.id)
      render :index
    else
      render json: ["You are not the owner of the expense."], status: 404
    end
  end

  def expense_params
    params.require(:expense).permit(:user_id, :amount, :description)
  end
end

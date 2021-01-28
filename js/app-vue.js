import Expense from "./Expenses.js";

const app = Vue.createApp({
  data() {
    return {
      expenses: [],
      userBudget: 0,
      balance: 0,
      totalExpense: 0,
      userExpense: "",
      userAmount: undefined,
    };
  },
  methods: {
    addBudget() {
      this.balance = this.userBudget;
    },
    updateExpensesArray() {
      const expense = new Expense(this.userExpense, this.userAmount);
      this.expenses.push(expense);
      this.totalExpense += parseInt(expense.amount);
      this.balance -= parseInt(expense.amount);
      console.log(expense);
    },

    removeExpense(id) {
      this.expenses = this.expenses.filter((expense) => {
        expense.id != id;
      });
    },
  },
});

app.mount("#app");

import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

export default class Expenses {
  constructor(title, amount) {
    (this.title = title), (this.amount = amount), (this.id = nanoid());
  }
}

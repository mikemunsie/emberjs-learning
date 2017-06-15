import Rentals from "./routes/rentals";

export default function() {
  this.namespace = '/api';
  Rentals.call(this);
}

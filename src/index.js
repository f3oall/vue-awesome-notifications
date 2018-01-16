import AWN from "awesome-notifications";

export default function(Vue, options) {
  Vue.prototype.$awn = new AWN(options);
}

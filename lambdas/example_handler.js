import {createRequire} from "node:module";
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = createRequire(import.meta.url);

// dist/example/dependency.js
var require_dependency = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Repo = undefined;
  var siwe_1 = __require("siwe");

  class RepoBase {
    save(item) {
      const message = new siwe_1.SiweMessage({ address: "0x0" });
      return message.toMessage();
    }
    delete() {
      return false;
    }
  }

  class Repo extends RepoBase {
    get() {
      const message = new siwe_1.SiweMessage({ address: "0x0" });
      return message.validate("123132", "123");
    }
  }
  exports.Repo = Repo;
});

// dist/api/handler.js
var require_handler = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.example_handler = undefined;
  var dependency_1 = require_dependency();
  var example_handler = function potato() {
    console.log("HEllo");
    const item = new dependency_1.Repo().get();
    new dependency_1.Repo().save(item);
  };
  exports.example_handler = example_handler;
  exports.default = exports.example_handler;
});
export default require_handler();

//# debugId=6BDCB10D428135E964756e2164756e21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9leGFtcGxlL2RlcGVuZGVuY3kuanMiLCAiZGlzdC9hcGkvaGFuZGxlci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuUmVwbyA9IHZvaWQgMDtcbmNvbnN0IHNpd2VfMSA9IHJlcXVpcmUoXCJzaXdlXCIpO1xuY2xhc3MgUmVwb0Jhc2Uge1xuICAgIHNhdmUoaXRlbSkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IHNpd2VfMS5TaXdlTWVzc2FnZSh7IGFkZHJlc3M6ICcweDAnIH0pO1xuICAgICAgICByZXR1cm4gbWVzc2FnZS50b01lc3NhZ2UoKTtcbiAgICB9XG4gICAgZGVsZXRlKCkge1xuICAgICAgICAvL25vdCBpbiB1c2VcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNsYXNzIFJlcG8gZXh0ZW5kcyBSZXBvQmFzZSB7XG4gICAgZ2V0KCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IHNpd2VfMS5TaXdlTWVzc2FnZSh7IGFkZHJlc3M6ICcweDAnIH0pO1xuICAgICAgICByZXR1cm4gbWVzc2FnZS52YWxpZGF0ZShcIjEyMzEzMlwiLCBcIjEyM1wiKTtcbiAgICB9XG59XG5leHBvcnRzLlJlcG8gPSBSZXBvO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVwZW5kZW5jeS5qcy5tYXAiLAogICJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXhhbXBsZV9oYW5kbGVyID0gdm9pZCAwO1xuY29uc3QgZGVwZW5kZW5jeV8xID0gcmVxdWlyZShcIi4uL2V4YW1wbGUvZGVwZW5kZW5jeVwiKTtcbmNvbnN0IGV4YW1wbGVfaGFuZGxlciA9IGZ1bmN0aW9uIHBvdGF0bygpIHtcbiAgICBjb25zb2xlLmxvZyhcIkhFbGxvXCIpO1xuICAgIGNvbnN0IGl0ZW0gPSBuZXcgZGVwZW5kZW5jeV8xLlJlcG8oKS5nZXQoKTtcbiAgICBuZXcgZGVwZW5kZW5jeV8xLlJlcG8oKS5zYXZlKGl0ZW0pO1xufTtcbmV4cG9ydHMuZXhhbXBsZV9oYW5kbGVyID0gZXhhbXBsZV9oYW5kbGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5leGFtcGxlX2hhbmRsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oYW5kbGVyLmpzLm1hcCIKICBdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUNBLFNBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxFQUFRLGVBQVk7QUFDcEIsTUFBTTtBQUNOO0FBQUEsUUFBTSxTQUFTO0FBQUEsSUFDWCxJQUFJLENBQUMsTUFBTTtBQUNQLFlBQU0sVUFBVSxJQUFJLE9BQU8sWUFBWSxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ3pELGFBQU8sUUFBUSxVQUFVO0FBQUE7QUFBQSxJQUU3QixNQUFNLEdBQUc7QUFFTCxhQUFPO0FBQUE7QUFBQSxFQUVmO0FBQ0E7QUFBQSxRQUFNLGFBQWEsU0FBUztBQUFBLElBQ3hCLEdBQUcsR0FBRztBQUNGLFlBQU0sVUFBVSxJQUFJLE9BQU8sWUFBWSxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ3pELGFBQU8sUUFBUSxTQUFTLFVBQVUsS0FBSztBQUFBO0FBQUEsRUFFL0M7QUFDQSxFQUFRLGVBQU87QUFBQTs7OztBQ25CZixTQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsRUFBUSwwQkFBdUI7QUFDL0IsTUFBTTtBQUNOLE1BQU0sMkJBQTJCLE1BQU0sR0FBRztBQUN0QyxZQUFRLElBQUksT0FBTztBQUNuQixVQUFNLE9BQU8sSUFBSSxhQUFhLEtBQUssRUFBRSxJQUFJO0FBQ3pDLFFBQUksYUFBYSxLQUFLLEVBQUUsS0FBSyxJQUFJO0FBQUE7QUFFckMsRUFBUSwwQkFBa0I7QUFDMUIsRUFBUSxrQkFBa0I7QUFBQTsiLAogICJkZWJ1Z0lkIjogIjZCRENCMTBENDI4MTM1RTk2NDc1NmUyMTY0NzU2ZTIxIiwKICAibmFtZXMiOiBbXQp9

var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = (id) => {
  return import.meta.require(id);
};

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

// dist/example/handler.js
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
});
export default require_handler();

//# debugId=CD2F3B3CDD796C9D64756e2164756e21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZGlzdC9leGFtcGxlL2RlcGVuZGVuY3kuanMiLCAiZGlzdC9leGFtcGxlL2hhbmRsZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlcG8gPSB2b2lkIDA7XG5jb25zdCBzaXdlXzEgPSByZXF1aXJlKFwic2l3ZVwiKTtcbmNsYXNzIFJlcG9CYXNlIHtcbiAgICBzYXZlKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBzaXdlXzEuU2l3ZU1lc3NhZ2UoeyBhZGRyZXNzOiAnMHgwJyB9KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudG9NZXNzYWdlKCk7XG4gICAgfVxuICAgIGRlbGV0ZSgpIHtcbiAgICAgICAgLy9ub3QgaW4gdXNlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5jbGFzcyBSZXBvIGV4dGVuZHMgUmVwb0Jhc2Uge1xuICAgIGdldCgpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBzaXdlXzEuU2l3ZU1lc3NhZ2UoeyBhZGRyZXNzOiAnMHgwJyB9KTtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UudmFsaWRhdGUoXCIxMjMxMzJcIiwgXCIxMjNcIik7XG4gICAgfVxufVxuZXhwb3J0cy5SZXBvID0gUmVwbztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlcGVuZGVuY3kuanMubWFwIiwKICAiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmV4YW1wbGVfaGFuZGxlciA9IHZvaWQgMDtcbmNvbnN0IGRlcGVuZGVuY3lfMSA9IHJlcXVpcmUoXCIuL2RlcGVuZGVuY3lcIik7XG5jb25zdCBleGFtcGxlX2hhbmRsZXIgPSBmdW5jdGlvbiBwb3RhdG8oKSB7XG4gICAgY29uc29sZS5sb2coXCJIRWxsb1wiKTtcbiAgICBjb25zdCBpdGVtID0gbmV3IGRlcGVuZGVuY3lfMS5SZXBvKCkuZ2V0KCk7XG4gICAgbmV3IGRlcGVuZGVuY3lfMS5SZXBvKCkuc2F2ZShpdGVtKTtcbn07XG5leHBvcnRzLmV4YW1wbGVfaGFuZGxlciA9IGV4YW1wbGVfaGFuZGxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhbmRsZXIuanMubWFwIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQUNBLFNBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPLEtBQUssQ0FBQztBQUM1RCxFQUFRLGVBQVk7QUFDcEIsTUFBTTtBQUNOO0FBQUEsUUFBTSxTQUFTO0FBQUEsSUFDWCxJQUFJLENBQUMsTUFBTTtBQUNQLFlBQU0sVUFBVSxJQUFJLE9BQU8sWUFBWSxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ3pELGFBQU8sUUFBUSxVQUFVO0FBQUE7QUFBQSxJQUU3QixNQUFNLEdBQUc7QUFFTCxhQUFPO0FBQUE7QUFBQSxFQUVmO0FBQ0E7QUFBQSxRQUFNLGFBQWEsU0FBUztBQUFBLElBQ3hCLEdBQUcsR0FBRztBQUNGLFlBQU0sVUFBVSxJQUFJLE9BQU8sWUFBWSxFQUFFLFNBQVMsTUFBTSxDQUFDO0FBQ3pELGFBQU8sUUFBUSxTQUFTLFVBQVUsS0FBSztBQUFBO0FBQUEsRUFFL0M7QUFDQSxFQUFRLGVBQU87QUFBQTs7OztBQ25CZixTQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDNUQsRUFBUSwwQkFBdUI7QUFDL0IsTUFBTTtBQUNOLE1BQU0sMkJBQTJCLE1BQU0sR0FBRztBQUN0QyxZQUFRLElBQUksT0FBTztBQUNuQixVQUFNLE9BQU8sSUFBSSxhQUFhLEtBQUssRUFBRSxJQUFJO0FBQ3pDLFFBQUksYUFBYSxLQUFLLEVBQUUsS0FBSyxJQUFJO0FBQUE7QUFFckMsRUFBUSwwQkFBa0I7QUFBQTsiLAogICJkZWJ1Z0lkIjogIkNEMkYzQjNDREQ3OTZDOUQ2NDc1NmUyMTY0NzU2ZTIxIiwKICAibmFtZXMiOiBbXQp9

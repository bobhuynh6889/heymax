"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Button: () => Button_default,
  WebButton: () => WebButton_default
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_react = __toESM(require("react"));
var import_react_native = require("react-native");
var import_jsx_runtime = require("react/jsx-runtime");
var styles = import_react_native.StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 40,
  },
  primary: {
    backgroundColor: '#802eff',
  },
  secondary: {
    backgroundColor: '#5D5FEF',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#802eff',
  },
  small: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  large: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
    color: '#fff',
    textAlign: 'center',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#0066FF',
  },
});
var Button = import_react.default.forwardRef((_a, ref) => {
  var _b = _a, {
    children,
    intent = "primary",
    size = "medium",
    style,
    onPress,
    onClick
  } = _b, props = __objRest(_b, [
    "children",
    "intent",
    "size",
    "style",
    "onPress",
    "onClick"
  ]);
  const handlePress = (e) => {
    if (onPress) onPress(e);
    if (onClick) onClick();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react_native.Pressable,
    __spreadProps(__spreadValues({
      ref,
      onPress: handlePress,
      style: [
        styles.button,
        styles[intent],
        styles[size],
        style
      ]
    }, props), {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react_native.Text,
        {
          style: [
            styles.text,
            intent === "primary" ? styles.primaryText : intent === "secondary" ? styles.secondaryText : styles.outlineText
          ],
          children
        }
      )
    })
  );
});
Button.displayName = "Button";
var Button_default = Button;

// src/components/WebButton.tsx
var import_react2 = __toESM(require("react"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var buttonVariants2 = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary: 'bg-[#802eff] text-white hover:bg-[#6a1edf]',
        secondary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        outline: 'border border-[#802eff] text-[#802eff] hover:bg-[#f5f0ff]',
      },
      size: {
        small: 'h-9 px-4 py-2 text-sm',
        medium: 'h-10 px-8 py-3',
        large: 'h-12 px-12 py-4 text-lg',
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium"
    }
  }
);
var WebButton = import_react2.default.forwardRef((_a, ref) => {
  var _b = _a, {
    className,
    intent,
    size,
    href,
    children,
    onClick,
    onPress
  } = _b, props = __objRest(_b, [
    "className",
    "intent",
    "size",
    "href",
    "children",
    "onClick",
    "onPress"
  ]);
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (onPress) onPress(e);
  };
  if (href) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "a",
      __spreadProps(__spreadValues({
        href,
        className: buttonVariants2({ intent, size, className }),
        onClick: handleClick
      }, props), {
        children
      })
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    __spreadProps(__spreadValues({
      ref,
      className: buttonVariants2({ intent, size, className }),
      onClick: handleClick
    }, props), {
      children
    })
  );
});
WebButton.displayName = "WebButton";
var WebButton_default = WebButton;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  WebButton
});

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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

// src/components/Button.tsx
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva("", {
  variants: {
    intent: {
      primary: "",
      secondary: "",
      outline: ""
    },
    size: {
      small: "",
      medium: "",
      large: ""
    }
  },
  defaultVariants: {
    intent: "primary",
    size: "medium"
  }
});
var styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8
  },
  primary: {
    backgroundColor: "#0066FF"
  },
  secondary: {
    backgroundColor: "#5D5FEF"
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0066FF"
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 32
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 48
  },
  text: {
    fontWeight: "600"
  },
  primaryText: {
    color: "white"
  },
  secondaryText: {
    color: "white"
  },
  outlineText: {
    color: "#0066FF"
  }
});
var Button = React.forwardRef((_a, ref) => {
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
  return /* @__PURE__ */ jsx(
    Pressable,
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
      children: /* @__PURE__ */ jsx(
        Text,
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
import React2 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants2 = cva2(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      intent: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-indigo-600 text-white hover:bg-indigo-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-50"
      },
      size: {
        small: "h-9 px-4 py-2 text-sm",
        medium: "h-10 px-8 py-3",
        large: "h-12 px-12 py-4 text-lg"
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "medium"
    }
  }
);
var WebButton = React2.forwardRef((_a, ref) => {
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
    return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
export {
  Button_default as Button,
  WebButton_default as WebButton
};

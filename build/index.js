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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();

// app/styles/app.css
var app_default = "/build/_assets/app-E5YXHXAM.css";

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/root.jsx
var import_remix2 = __toESM(require_remix());

// app/utils/misc.js
init_react();
var onServer = () => {
  try {
    if (window) {
      return false;
    }
  } catch {
    return true;
  }
};
var inProduction = () => {
  try {
    if (false) {
      return true;
    }
  } catch {
    return false;
  }
};

// app/utils/email.server.js
init_react();
var import_nodemailer = __toESM(require("nodemailer"));
var import_uuid = require("uuid");
var sendEmail = ({ error }) => {
  const transporter = import_nodemailer.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAUTH2",
      user: process.env.GMAIL_ADDRESS,
      clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
      clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
      accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN
    }
  });
  const options = {
    from: "bandamarketplace@gmail.com",
    to: "bryantleebrock@gmail.com",
    subject: `New Error: (id ${(0, import_uuid.v4)()}`,
    html: `<div style="margin: 20px;">${error}</div>`
  };
  transporter.sendMail(options, (error2) => console.log(error2));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/root.jsx
function meta() {
  return {
    charset: "utf-8",
    title: "Marketplace",
    viewport: "width=device-width,initial-scale=1"
  };
}
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var Document = ({ children, title }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement("title", null, title), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "m-8"
  }, children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null));
}
function ErrorBoundary({ error }) {
  if (onServer() && inProduction()) {
    sendEmail({ error });
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message)));
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer.jsx
var influencer_exports = {};
__export(influencer_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/modules/auth/auth.server.js
init_react();
var import_keys = __toESM(require("lodash/keys"));
var import_omit = __toESM(require("lodash/omit"));
var import_pick = __toESM(require("lodash/pick"));
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.js
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// app/modules/auth/auth.server.js
var import_remix3 = __toESM(require_remix());
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix3.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
var createSession = (module2) => async ({ id, redirectTo }) => {
  const session = await storage.getSession();
  session.set("id", id);
  session.set("module", module2);
  return (0, import_remix3.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
};
var getSession = ({ request }) => {
  return storage.getSession(request.headers.get("Cookie"));
};
var getSessionId = async ({ request }) => {
  const session = await getSession({ request });
  const id = session.get("id");
  if (!id || typeof id !== "string") {
    return null;
  }
  return id;
};
var requireId = (module2) => async ({ request, redirectTo = new URL(request.url).pathname }) => {
  const session = await getSession({ request });
  const sessionId = session.get("id");
  const sessionModule = session.get("module");
  if (!sessionId || sessionModule !== module2 || typeof sessionId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix3.redirect)(`/${module2}/login?${searchParams}`);
  }
  return sessionId;
};
var logout = (module2) => async ({ request }) => {
  const session = await getSession({ request });
  return (0, import_remix3.redirect)(`/${module2}/login`, {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
};
var login = (module2) => async ({ email, password }) => {
  const account = await db[module2].findUnique({ where: { email } });
  if (!account) {
    return { errors: { email: `A ${module2} account with that email was not found.` } };
  }
  if (account.isDeleted) {
    return { errors: { email: `A ${module2} account with that email has been deleted.` } };
  }
  const passwordMatches = await import_bcryptjs.default.compare(password, account.passhash);
  if (!passwordMatches) {
    return { errors: { password: "Incorrect password." } };
  }
  return (0, import_omit.default)(account, ["passhash"]);
};
var register = (module2) => async ({ data }) => {
  let errors = {};
  if (!data.email || !data.email.includes("@")) {
    errors.email = "Please provide a valid email address.";
  }
  if (!data.password) {
    errors.password = "Please provide a password.";
  }
  if (!data.name) {
    errors.name = "Please provide a name.";
  }
  const accountExists = await db[module2].findUnique({ where: { email: data.email } });
  if (accountExists) {
    errors.email = `${module2} already exists.`;
  }
  if ((0, import_keys.default)(errors).length > 0) {
    return { errors };
  }
  try {
    const salt = await import_bcryptjs.default.genSalt(10);
    const passhash = await import_bcryptjs.default.hash(data.password, salt);
    const account = await db[module2].create({ data: __spreadProps(__spreadValues({}, (0, import_omit.default)(data, ["password"])), { passhash }) });
    return (0, import_omit.default)(account, ["passhash"]);
  } catch {
    errors.general = `Unable to create ${module2}.`;
    return { errors };
  }
};
var update = (module2) => async ({ id, data }) => {
  let errors = {};
  if (!data.name)
    errors.name = "Name cannot be empty.";
  if (!data.email)
    errors.email = "Email cannot be empty.";
  if (data.currentPassword.length > 0 || data.password.length > 0 || data.confirmPassword.length > 0) {
    const passwordMatches = await import_bcryptjs.default.compare(data.currentPassword, data.currentPasshash);
    if (!passwordMatches)
      errors.currentPassword = "Incorrect current password.";
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    if (data.password.length < 1)
      errors.password = "Password cannot be empty.";
  }
  if ((0, import_keys.default)(errors).length > 0) {
    return { errors };
  }
  try {
    const updatedAccount = await db[module2].update({
      where: { id },
      data: __spreadValues(__spreadValues({}, (0, import_pick.default)(data, ["name", "email", "instagram", "phone", "address"])), data.password && {
        passhash: await import_bcryptjs.default.hash(data.password, await import_bcryptjs.default.genSalt(10))
      })
    });
    return (0, import_omit.default)(updatedAccount, ["passhash"]);
  } catch {
    errors.general = `Unable to update ${module2}.`;
    return { errors };
  }
};
var get = (module2) => async ({ request, include = null }) => {
  const id = await requireId(module2)({ request });
  try {
    const account = await db[module2].findUnique(__spreadValues({
      where: { id }
    }, include && { include }));
    return (0, import_omit.default)(account, ["passhash"]);
  } catch {
    throw logout(module2)({ request });
  }
};
var auth_server_default = {
  getSessionId,
  business: {
    login: login("business"),
    register: register("business"),
    get: get("business"),
    requireId: requireId("business"),
    createSession: createSession("business"),
    update: update("business"),
    logout: logout("business")
  },
  influencer: {
    login: login("influencer"),
    register: register("influencer"),
    get: get("influencer"),
    requireId: requireId("influencer"),
    createSession: createSession("influencer"),
    update: update("influencer"),
    logout: logout("influencer")
  }
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer.jsx
var publicRoutes = [
  "/influencer/login",
  "/influencer/register"
];
var loader = async ({ request }) => {
  const { pathname } = new URL(request.url);
  if (publicRoutes.includes(pathname)) {
    return (0, import_remix4.json)({ pathname });
  }
  const influencer = await auth_server_default.influencer.get({ request });
  return (0, import_remix4.json)({ influencer, pathname });
};
function Index() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, !data.influencer && /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/login"
  }, "Login")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/register"
  }, "Sign Up")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/business/login"
  }, "Business?"))), data.influencer && /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end"
  }, /* @__PURE__ */ React.createElement("span", null, `Hi ${data.influencer.name}`), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post",
    className: "ml-2"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "module",
    value: "influencer"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout")), /* @__PURE__ */ React.createElement("ul", {
    className: "ml-2"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer"
  }, "Dashboard")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/partnerships"
  }, "Partnerships")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/businesses"
  }, "Browse Businesses")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/inquiries"
  }, "Inquiries")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/products"
  }, "My products")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/influencer/settings"
  }, "Settings")))), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null));
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/partnerships/index.jsx
var partnerships_exports = {};
__export(partnerships_exports, {
  default: () => partnerships_default,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());

// app/utils/constants.js
init_react();
var INQUIRY = {
  STATUS: {
    drafted: "drafted",
    pending: "pending",
    accepted: "accepted",
    rejected: "rejected",
    countered: "countered"
  },
  TO: {
    influencer: "influencer",
    business: "business"
  },
  FROM: {
    influencer: "influencer",
    business: "business"
  }
};
var PARTNERSHIP = {
  STATUS: {
    drafted: "drafted",
    pending: "pending",
    active: "active",
    closed: "closed",
    cancelled: "cancelled"
  },
  OWNER: {
    business: "business",
    influencer: "influencer"
  }
};
var PRODUCT = {
  NAME: {
    instagramReel: "instagram-reel",
    instagramPost: "instagram-post",
    instagramStory: "instagram-story",
    tiktokReel: "tiktok-reel"
  }
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/partnerships/index.jsx
var loader2 = async ({ request }) => {
  const influencerId = await auth_server_default.getSessionId({ request });
  const partnerships = await db.partnership.findMany({
    where: {
      AND: [
        { influencer: {
          is: { id: influencerId }
        } },
        { OR: [
          { owner: PARTNERSHIP.OWNER.influencer },
          { AND: [
            { owner: PARTNERSHIP.OWNER.business },
            { NOT: { status: PARTNERSHIP.STATUS.drafted } }
          ] }
        ] }
      ]
    },
    include: { inquiries: true }
  });
  return (0, import_remix5.json)({ partnerships });
};
var partnerships_default = () => {
  const data = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Partnerships"), /* @__PURE__ */ React.createElement("ul", null, data.partnerships.map(({ id, status }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/influencer/partnerships/${id}`
  }, id, ' - status "', status, '"'))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/reactivate/$email.jsx
var email_exports = {};
__export(email_exports, {
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader3 = async ({ params }) => {
  await db.influencer.update({ where: { email: params.email }, data: { isDeleted: false } });
  return (0, import_remix6.redirect)("/influencer/login");
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/businesses/index.jsx
var businesses_exports = {};
__export(businesses_exports, {
  default: () => businesses_default,
  loader: () => loader4
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader4 = async () => {
  const businesses = await db.business.findMany({ take: 5 });
  return (0, import_remix7.json)({ businesses });
};
var businesses_default = () => {
  const { businesses } = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Browse Businesses"), /* @__PURE__ */ React.createElement("ul", null, businesses.map(({ id, email }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: `/influencer/businesses/${id}`
  }, email))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/partnerships/$id.jsx
var id_exports = {};
__export(id_exports, {
  default: () => id_default,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_capitalize = __toESM(require("lodash/capitalize"));
var import_startCase = __toESM(require("lodash/startCase"));
var statusColors = {
  [PARTNERSHIP.STATUS.pending]: "bg-yellow-200",
  [PARTNERSHIP.STATUS.active]: "bg-green-200",
  [PARTNERSHIP.STATUS.closed]: "bg-gray-200",
  [PARTNERSHIP.STATUS.cancelled]: "bg-red-200"
};
var loader5 = async ({ request, params }) => {
  const influencerId = await auth_server_default.getSessionId({ request });
  const [partnership] = await db.partnership.findMany({
    where: { AND: [
      { id: params.id },
      { influencer: { is: { id: influencerId } } }
    ] },
    include: {
      inquiries: {
        where: { NOT: { status: INQUIRY.STATUS.drafter } },
        skip: 0,
        take: 5,
        include: {
          inquiryLineItems: {
            include: { product: true }
          }
        }
      },
      business: true
    }
  });
  if (!partnership) {
    return (0, import_remix8.redirect)("/influencer/partnerships");
  }
  return (0, import_remix8.json)({ partnership });
};
var id_default = () => {
  const { partnership } = (0, import_remix8.useLoaderData)();
  const statusBgColor = statusColors[partnership.status];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("h1", null, "Partnership with ", partnership.business.name), /* @__PURE__ */ React.createElement("div", {
    className: `ml-2 py-1 px-2 rounded-2xl flex justify-center items-center ${statusBgColor}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm"
  }, (0, import_capitalize.default)(partnership.status)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Details"), /* @__PURE__ */ React.createElement("ul", null, partnership.agreement && /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: partnership.agreement,
    target: "_blank",
    rel: "noreferrer"
  }, "Contract")), /* @__PURE__ */ React.createElement("li", null, "Business: ", " ", /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `/influencer/businesses/${partnership.business.id}`
  }, partnership.business.name)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col mt-5 md:flex-row md:mt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-5 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h2", null, "Inquiries"), /* @__PURE__ */ React.createElement("hr", {
    className: "my-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: `/influencer/inquiries?partnershipId=${partnership.id}`,
    "data-css-override": true,
    className: "bg-gray-100 hover:bg-gray-200 rounded-lg p-2 my-2"
  }, "See all inquiries")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border rounded shadow"
  }, partnership.inquiries.map(({ id, createdAt, status, inquiryLineItems }) => /* @__PURE__ */ React.createElement(import_remix8.Link, {
    key: id,
    "data-css-override": true,
    to: `/influencer/inquiries/${id}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 hover:bg-gray-50 hover:cursor-pointer border-b"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Date:"), " ", new Date(createdAt).toLocaleString(), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Status:"), " ", status, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Details:"), /* @__PURE__ */ React.createElement("ul", null, inquiryLineItems.map(({ product, quantity, interval }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, "- ", quantity, " amount of ", (0, import_startCase.default)(product.name), " costing $", product.price, "/ea every ", interval)))))))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/inquiries/index.jsx
var inquiries_exports = {};
__export(inquiries_exports, {
  default: () => inquiries_default,
  loader: () => loader6
});
init_react();
var import_remix9 = __toESM(require_remix());
var loader6 = async ({ request }) => {
  const { pathname } = new URL(request.url);
  const influencerId = await auth_server_default.getSessionId({ request });
  const inquiries = await db.inquiry.findMany({
    where: { OR: [
      { AND: [
        { partnership: { influencer: { is: { id: influencerId } } } },
        { NOT: { status: INQUIRY.STATUS.drafted } },
        { NOT: { from: INQUIRY.FROM.influencer } }
      ] },
      { AND: [
        { partnership: { influencer: { is: { id: influencerId } } } },
        { from: INQUIRY.FROM.influencer }
      ] }
    ] },
    skip: 0,
    take: 20
  });
  return (0, import_remix9.json)({ inquiries, pathname });
};
var inquiries_default = () => {
  const { inquiries, pathname } = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Inquiries"), /* @__PURE__ */ React.createElement("ul", null, inquiries.map(({ id, status }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_remix9.Link, {
    to: pathname + "/" + id
  }, id, ' - status "', status, '"'))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/businesses/$id.jsx
var id_exports2 = {};
__export(id_exports2, {
  default: () => id_default2,
  loader: () => loader7
});
init_react();
var import_remix10 = __toESM(require_remix());
var loader7 = async ({ request, params }) => {
  const business = await db.business.findUnique({ where: { id: params.id } });
  if (!business) {
    return (0, import_remix10.redirect)("/influencer/businesses");
  }
  return (0, import_remix10.json)({ business });
};
var id_default2 = () => {
  const { business } = (0, import_remix10.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Business selected: ", business.name));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/inquiries/$id.jsx
var id_exports3 = {};
__export(id_exports3, {
  action: () => action,
  default: () => id_default3,
  loader: () => loader8
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_keys2 = __toESM(require("lodash/keys"));

// app/modules/inquiry/actions.server.js
init_react();

// app/modules/legal/agreement.server.js
init_react();
var import_html_pdf_node = __toESM(require("html-pdf-node"));
var import_server2 = require("react-dom/server");
var import_startCase2 = __toESM(require("lodash/startCase"));
var import_aws_sdk = require("aws-sdk");
var s3 = new import_aws_sdk.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
var Agreement = ({
  business,
  influencer,
  endDate,
  termLength,
  sumOfProducts,
  lineItems
}) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
  style: { margin: "3rem" }
}, /* @__PURE__ */ React.createElement("h2", {
  style: { textAlign: "center" }
}, "Influencer to Business Aggreement"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "This ABC Agreement is made by and between ", business.name, "and ", influencer.name, ". During the Term, ", influencer.name, "will provide ", business.name, " with services as further described below."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
  style: { display: "flex" }
}, /* @__PURE__ */ React.createElement("span", {
  style: { marginRight: "2rem", fontWeight: "bold" }
}, "I."), /* @__PURE__ */ React.createElement("span", {
  style: { fontWeight: "bold" }
}, "Term")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "The term of this agreement begins ", endDate, " (the \u201CEffective Date\u201D) and ends ", termLength, " thereafter (the \u201CTerm\u201D)."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
  style: { display: "flex" }
}, /* @__PURE__ */ React.createElement("span", {
  style: { marginRight: "2rem", fontWeight: "bold" }
}, "II."), /* @__PURE__ */ React.createElement("span", {
  style: { fontWeight: "bold" }
}, "Subscription Fee")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "The fee for the services is $", sumOfProducts, ", due upfront and paid out to ", influencer.name, " on the final date of the contract term."), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
  style: { display: "flex" }
}, /* @__PURE__ */ React.createElement("span", {
  style: { marginRight: "2rem", fontWeight: "bold" }
}, "III."), /* @__PURE__ */ React.createElement("span", {
  style: { fontWeight: "bold" }
}, "Grant of Services to ", business.name)), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, influencer.name, " hereby grants ", business.name, " a non-exclusive, non-transferable, limited access to ", influencer.name, " services as follows:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("ul", {
  style: { marginLeft: "3rem" }
}, lineItems.map((item, idx) => /* @__PURE__ */ React.createElement("li", {
  key: idx
}, "- ", item.quantity, " amount of ", (0, import_startCase2.default)(item.product.name), " costing $", item.product.price, "/ea every ", item.interval))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
  style: { display: "flex", justifyContent: "space-between" }
}, [influencer, business].map((party, idx) => {
  var _a, _b, _c, _d;
  return /* @__PURE__ */ React.createElement("div", {
    key: idx,
    style: { display: "flex", flexDirection: "column", margin: "2rem" }
  }, /* @__PURE__ */ React.createElement("span", null, "For ", party.name, ":"), /* @__PURE__ */ React.createElement("div", {
    style: { borderTop: "2px solid black", display: "flex", justifyContent: "space-between", margin: "2rem 0" }
  }, /* @__PURE__ */ React.createElement("span", null, "Authorized Signature"), /* @__PURE__ */ React.createElement("span", {
    style: { marginLeft: "1rem" }
  }, "Date")), /* @__PURE__ */ React.createElement("div", {
    style: { borderTop: "2px solid black" }
  }, /* @__PURE__ */ React.createElement("span", null, "Printed Name")), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    style: { display: "flex", flexDirection: "column", marginTop: "2rem" }
  }, /* @__PURE__ */ React.createElement("span", null, party.name), /* @__PURE__ */ React.createElement("span", null, (_a = party.address) == null ? void 0 : _a.street), /* @__PURE__ */ React.createElement("span", null, (_b = party.address) == null ? void 0 : _b.city, " ", (_c = party.address) == null ? void 0 : _c.state), /* @__PURE__ */ React.createElement("span", null, (_d = party.address) == null ? void 0 : _d.zip)));
}))));
var generateAgreement = async ({ partnershipId, params }) => {
  const options = { format: "A4" };
  const file = { content: (0, import_server2.renderToString)(/* @__PURE__ */ React.createElement(Agreement, __spreadValues({}, params))) };
  const buffer = await import_html_pdf_node.default.generatePdf(file, options);
  const opts = {
    Key: "partnership-agreement-" + partnershipId + ".pdf",
    Body: buffer,
    Bucket: "business-athlete-marketplace",
    ContentType: "application/pdf"
  };
  const { Location: path } = await s3.upload(opts).promise();
  return path;
};

// app/modules/inquiry/actions.server.js
var import_sum = __toESM(require("lodash/sum"));
var import_pick2 = __toESM(require("lodash/pick"));
var import_map = __toESM(require("lodash/map"));
var rejectInquiry = ({ id }) => {
  return db.inquiry.update({
    where: { id },
    data: {
      status: INQUIRY.STATUS.rejected,
      partnership: {
        update: {
          status: PARTNERSHIP.STATUS.cancelled
        }
      }
    }
  });
};
var acceptInquiry = async ({ id }) => {
  var _a;
  const inquiry = await db.inquiry.findUnique({
    where: { id },
    include: {
      partnership: {
        include: { influencer: {
          include: { address: true }
        }, business: {
          include: { address: true }
        } }
      },
      inquiryLineItems: {
        include: { product: true }
      }
    }
  });
  const agreement = await generateAgreement({
    partnershipId: inquiry.partnership.id,
    params: {
      influencer: inquiry.partnership.influencer,
      business: inquiry.partnership.business,
      endDate: ((_a = inquiry.endDate) == null ? void 0 : _a.toLocaleDateString()) || "never",
      termLength: "forever",
      lineItems: inquiry.inquiryLineItems,
      sumOfProducts: (0, import_sum.default)((0, import_map.default)((0, import_map.default)(inquiry.inquiryLineItems, "product.price"), Number))
    }
  });
  return db.inquiry.update({
    where: { id },
    data: {
      status: INQUIRY.STATUS.accepted,
      partnership: {
        update: {
          agreement,
          status: PARTNERSHIP.STATUS.active
        }
      }
    }
  });
};
var counterInquiry = async ({ id }) => {
  const inquiry = await db.inquiry.findUnique({
    where: { id },
    include: { inquiryLineItems: true }
  });
  const newInquiry = await db.inquiry.create({ data: __spreadProps(__spreadValues({}, (0, import_pick2.default)(inquiry, ["startDate", "endDate", "notes"])), {
    to: inquiry.from,
    from: inquiry.to,
    partnership: { connect: { id: inquiry.partnershipId } },
    inquiryLineItems: {
      create: inquiry.inquiryLineItems.map((lineItem) => __spreadProps(__spreadValues({}, (0, import_pick2.default)(lineItem, ["quantity", "interval"])), { product: { connect: { id: lineItem.productId } } }))
    }
  }) });
  await db.inquiry.update({
    where: { id },
    data: { counterInquiry: { connect: { id: newInquiry.id } } }
  });
  return newInquiry;
};
var toArrOfObjs = (acc, [k, v]) => {
  const [idx, field] = k.split("-product-");
  if (!acc[idx]) {
    acc[idx] = {};
  }
  acc[idx][field] = v;
  return acc;
};
var toProduct = (products) => (obj) => {
  const { id } = products.find((prod) => prod.name === obj.name);
  return {
    interval: obj.interval,
    product: { connect: { id } },
    quantity: Number(obj.quantity)
  };
};
var updateInquiry = async ({
  partnershipId,
  influencerId,
  lineItemData,
  inquiryId,
  startDate,
  endDate,
  status,
  notes
}) => {
  const { products } = await db.influencer.findUnique({
    where: { id: influencerId },
    include: { products: true }
  });
  const lineItems = lineItemData.reduce(toArrOfObjs, []).map(toProduct(products));
  await db.inquiryLineItem.deleteMany({ where: { inquiry: { is: { id: inquiryId } } } });
  await db.inquiry.update({
    where: { id: inquiryId },
    data: __spreadProps(__spreadValues(__spreadValues({
      notes,
      status
    }, startDate && { startDate: new Date(startDate).toISOString() }), endDate && { endDate: new Date(endDate).toISOString() }), {
      inquiryLineItems: {
        create: lineItems
      }
    })
  });
  if (status === INQUIRY.STATUS.pending) {
    const [counteredInquiry] = await db.inquiry.findMany({ where: { counterInquiryId: inquiryId } });
    await Promise.all([
      counteredInquiry && db.inquiry.update({
        where: { id: counteredInquiry.id },
        data: { status: INQUIRY.STATUS.countered }
      }),
      db.partnership.update({
        where: { id: partnershipId },
        data: { status: PARTNERSHIP.STATUS.pending }
      })
    ]);
  }
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/inquiries/$id.jsx
var action = async ({ request, params }) => {
  const id = params.id;
  const form = await request.formData();
  const [action14] = (0, import_keys2.default)(Object.fromEntries(form));
  if (action14 === INQUIRY.STATUS.accepted) {
    await acceptInquiry({ id });
  }
  if (action14 === INQUIRY.STATUS.rejected) {
    await rejectInquiry({ id });
  }
  if (action14 === INQUIRY.STATUS.countered) {
    const { id: newInquiryId } = await counterInquiry({ id });
    return (0, import_remix11.redirect)(`/influencer/inquiries/${newInquiryId}/edit?type=counter`);
  }
  return (0, import_remix11.json)({});
};
var loader8 = async ({ request, params }) => {
  const influencerId = await auth_server_default.getSessionId({ request });
  const [inquiry] = await db.inquiry.findMany({
    where: { AND: [
      { id: params.id },
      {
        partnership: {
          influencer: {
            is: { id: influencerId }
          }
        }
      }
    ] },
    include: {
      inquiryLineItems: {
        include: { product: true }
      },
      partnership: {
        include: {
          influencer: {
            include: { products: true }
          }
        }
      }
    }
  });
  if (!inquiry) {
    return (0, import_remix11.redirect)("/influencer/inquiries");
  }
  return (0, import_remix11.json)({ inquiry });
};
var id_default3 = () => {
  return /* @__PURE__ */ React.createElement(import_remix11.Outlet, null);
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/inquiries/$id/index.jsx
var id_exports4 = {};
__export(id_exports4, {
  default: () => id_default4
});
init_react();
var import_remix13 = __toESM(require_remix());
var import_startCase3 = __toESM(require("lodash/startCase"));

// app/utils/hooks/useParentLoaderData.js
init_react();
var import_remix12 = __toESM(require_remix());
var useParentLoaderData = ({ key }) => {
  const match = (0, import_remix12.useMatches)().find(({ data }) => data && data[key]);
  return match ? { [key]: match.data[key] } : {};
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/inquiries/$id/index.jsx
var id_default4 = () => {
  const { inquiry } = useParentLoaderData({ key: "inquiry" });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Inquiry"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h3", {
    className: "my-2"
  }, "Details"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Status:"), " ", inquiry.status), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Created:"), " ", new Date(inquiry.createdAt).toLocaleDateString()), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Start Date:"), " ", new Date(inquiry.startDate).toLocaleDateString()), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "End Date:"), " ", new Date(inquiry.endDate).toLocaleDateString()), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Notes:"), " ", inquiry.notes), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Countered?"), " ", inquiry.counterInquiryId ? "Yes" : "No"), inquiry.counterInquiryId && /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: `/influencer/inquiries/${inquiry.counterInquiryId}`
  }, "Countered inquiry ", "->"))), /* @__PURE__ */ React.createElement("ul", null, inquiry.inquiryLineItems.map(({ product, quantity, interval }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, "- ", quantity, " amount of ", (0, import_startCase3.default)(product.name), " costing $", product.price, "/ea every ", interval))), inquiry.from === "influencer" && inquiry.status === INQUIRY.STATUS.drafted && /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: `/influencer/inquiries/${inquiry.id}/edit`
  }, "Edit"), inquiry.from !== "influencer" && inquiry.status === INQUIRY.STATUS.pending && /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: INQUIRY.STATUS.accepted
  }, "Accept"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: INQUIRY.STATUS.rejected
  }, "Reject"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: INQUIRY.STATUS.countered
  }, "Counter"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/inquiries/$id/edit.jsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action2,
  default: () => edit_default
});
init_react();
var import_react = require("react");
var import_remix14 = __toESM(require_remix());
var import_keys3 = __toESM(require("lodash/keys"));
var import_filter = __toESM(require("lodash/filter"));
var import_toPairs = __toESM(require("lodash/toPairs"));
var import_startCase4 = __toESM(require("lodash/startCase"));
var import_first = __toESM(require("lodash/first"));
var action2 = async ({ request, params }) => {
  const inquiryId = params.id;
  const form = await request.formData();
  const formData = Object.fromEntries(form);
  const data = {
    inquiryId,
    notes: form.get("notes"),
    endDate: form.get("endDate"),
    startDate: form.get("startDate"),
    lineItemData: (0, import_filter.default)((0, import_toPairs.default)(formData), ([k]) => k.includes("product")),
    influencerId: form.get("influencerId"),
    partnershipId: form.get("partnershipId"),
    status: (0, import_first.default)((0, import_filter.default)((0, import_keys3.default)(formData), (val) => (0, import_keys3.default)(INQUIRY.STATUS).includes(val)))
  };
  await updateInquiry(data);
  return (0, import_remix14.redirect)(`/business/inquiries/${inquiryId}`);
};
var edit_default = () => {
  const { type } = (0, import_remix14.useLoaderData)();
  const { inquiry } = useParentLoaderData({ key: "inquiry" });
  const { influencer } = inquiry.partnership;
  const [lineItems, setLineItems] = (0, import_react.useState)(inquiry.inquiryLineItems);
  const newItem = influencer.products.length > 0 && {
    quantity: 1,
    interval: "day",
    product: {
      name: influencer.products[0].name,
      price: Number(influencer.products[0].price)
    }
  };
  const startDate = inquiry.startDate ? new Date(inquiry.startDate).toISOString().substr(0, 10) : "";
  const endDate = inquiry.endDate ? new Date(inquiry.endDate).toISOString().substr(0, 10) : "";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, type ? (0, import_startCase4.default)(type) : "Edit", " Inquiry"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "influencerId",
    defaultValue: influencer.id
  }), /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "partnershipId",
    defaultValue: inquiry.partnership.id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-2 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    "html-for": "startDate",
    className: "mb-1"
  }, "Start Date"), /* @__PURE__ */ React.createElement("input", {
    name: "startDate",
    type: "date",
    defaultValue: startDate
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-2 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    "html-for": "endDate",
    className: "mb-1"
  }, "End Date"), /* @__PURE__ */ React.createElement("input", {
    name: "endDate",
    type: "date",
    defaultValue: endDate
  })), /* @__PURE__ */ React.createElement("table", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Product"), /* @__PURE__ */ React.createElement("th", null, "Price Per"), /* @__PURE__ */ React.createElement("th", null, "Quantity"), /* @__PURE__ */ React.createElement("th", null, "Every"))), /* @__PURE__ */ React.createElement("tbody", null, lineItems.map((item, idx) => /* @__PURE__ */ React.createElement("tr", {
    key: idx
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("select", {
    name: `${idx}-product-name`,
    value: item.product.name,
    onChange: (e) => {
      const newName = e.target.value;
      const item2 = __spreadProps(__spreadValues({}, lineItems[idx]), { product: {
        name: newName,
        price: influencer.products.find((prod) => prod.name === newName).price
      } });
      setLineItems((items) => items.filter((v, i) => i !== idx).concat(item2));
    }
  }, influencer.products.map((product, index) => /* @__PURE__ */ React.createElement("option", {
    key: index,
    value: product.name
  }, (0, import_startCase4.default)(product.name))))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    step: "0.01",
    name: `${idx}-product-price`,
    value: lineItems[idx].product.price,
    disabled: true,
    readOnly: true
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${idx}-product-quantity`,
    defaultValue: item.quantity
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("select", {
    name: `${idx}-product-interval`,
    defaultValue: item.interval
  }, /* @__PURE__ */ React.createElement("option", {
    value: "day"
  }, "Day"), /* @__PURE__ */ React.createElement("option", {
    value: "2-day"
  }, "2 Days"), /* @__PURE__ */ React.createElement("option", {
    value: "week"
  }, "Week"), /* @__PURE__ */ React.createElement("option", {
    value: "2-weeks"
  }, "2 Weeks"), /* @__PURE__ */ React.createElement("option", {
    value: "month"
  }, "Month"), /* @__PURE__ */ React.createElement("option", {
    value: "2-months"
  }, "2 Months"), /* @__PURE__ */ React.createElement("option", {
    value: "year"
  }, "Year"))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setLineItems((items) => items.filter((v, i) => i !== idx));
    }
  }, "Remove Product")))), newItem && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setLineItems((items) => items.concat(newItem));
    }
  }, "Add Product"))))), /* @__PURE__ */ React.createElement("textarea", {
    name: "notes",
    defaultValue: inquiry.notes
  }), /* @__PURE__ */ React.createElement("button", {
    name: INQUIRY.STATUS.pending,
    type: "submit"
  }, "Submit Inquiry"), /* @__PURE__ */ React.createElement("button", {
    name: INQUIRY.STATUS.drafted,
    type: "submit"
  }, "Save for later")));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/products.jsx
var products_exports = {};
__export(products_exports, {
  action: () => action3,
  default: () => products_default,
  loader: () => loader9
});
init_react();
var import_remix15 = __toESM(require_remix());

// app/partials/Icon.js
init_react();
var icons = {
  trash: {
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  }
};
var Icon_default = ({ name }) => {
  const params = icons[name];
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", __spreadValues({
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, params)));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/products.jsx
var import_values = __toESM(require("lodash/values"));
var import_startCase5 = __toESM(require("lodash/startCase"));
var addProduct = async ({ form, request }) => {
  const productName = form.get("name");
  const price = Number(form.get("price")).toFixed(2);
  const influencerId = await auth_server_default.influencer.requireId({ request });
  const name = productName.toLowerCase().replace(/ /g, "-");
  await db.product.create({ data: {
    name,
    price,
    influencer: { connect: { id: influencerId } }
  } });
};
var deleteProduct = async ({ form }) => {
  const id = form.get("id");
  console.log(id);
  await db.product.delete({ where: { id } });
};
var action3 = async ({ request }) => {
  const { pathname } = new URL(request.url);
  const form = await request.formData();
  const _action = form.get("_action");
  if (_action === "addProduct") {
    await addProduct({ form, request });
  }
  if (_action === "deleteProduct") {
    await deleteProduct({ form });
  }
  return (0, import_remix15.redirect)(pathname);
};
var loader9 = async ({ request }) => {
  const id = await auth_server_default.influencer.requireId({ request });
  const products = await db.product.findMany({
    where: {
      influencer: {
        is: { id }
      }
    }
  });
  return (0, import_remix15.json)({ products });
};
var products_default = () => {
  const { products } = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Products"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "flex flex-col rounded-xl border p-4 my-2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "_action",
    value: "addProduct"
  }), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "mb-2 font-bold text-lg"
  }, "Add a new product"), /* @__PURE__ */ React.createElement("select", {
    name: "name"
  }, (0, import_values.default)(PRODUCT.NAME).map((name, idx) => /* @__PURE__ */ React.createElement("option", {
    key: idx
  }, (0, import_startCase5.default)(name)))), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    step: "0.01",
    name: "price",
    defaultValue: 0,
    placeholder: "Price"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "py-1 px-2 my-2 rounded bg-gray-100 hover:bg-gray-200 w-44",
    "data-css-override": "true",
    type: "submit"
  }, "Add")), products.map(({ id, name, price }) => /* @__PURE__ */ React.createElement("div", {
    key: id,
    className: "p-2 shadow rounded-lg flex justify-between",
    "data-cy": "product-parent"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col ml-2"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Name:"), " ", (0, import_startCase5.default)(name)), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("strong", null, "Price:"), " $", price)), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "_action",
    value: "deleteProduct",
    readOnly: true
  }), /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "id",
    value: id,
    readOnly: true
  }), /* @__PURE__ */ React.createElement("button", {
    "data-css-override": true,
    className: "flex justify-center items-center hover:bg-gray-100 rounded-full p-2"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "trash"
  }))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/register.jsx
var register_exports = {};
__export(register_exports, {
  action: () => action4,
  default: () => register_default
});
init_react();
var import_remix16 = __toESM(require_remix());

// app/modules/auth/Input.js
init_react();
var import_startCase6 = __toESM(require("lodash/startCase"));
var Input_default = (_a) => {
  var _b = _a, { data, name } = _b, opts = __objRest(_b, ["data", "name"]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: name
  }, (0, import_startCase6.default)(name)), /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, opts), {
    type: opts.type || "text",
    id: name,
    name,
    className: `my-2 ${(data == null ? void 0 : data.errors[name]) ? "border-red-500" : ""}`
  })), (data == null ? void 0 : data.errors[name]) && /* @__PURE__ */ React.createElement("span", {
    className: "text-red-500 my-1"
  }, data.errors[name]));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/register.jsx
var action4 = async ({ request }) => {
  const form = await request.formData();
  const redirectTo = form.get("redirectTo") || "/influencer";
  const data = {
    name: form.get("name"),
    email: form.get("email"),
    password: form.get("password"),
    phone: form.get("phone"),
    instagram: form.get("instagram"),
    address: {
      create: {
        street: form.get("street"),
        city: form.get("city"),
        state: form.get("state"),
        zip: form.get("zip")
      }
    }
  };
  const result = await auth_server_default.influencer.register({ data });
  if (result.errors) {
    return (0, import_remix16.json)(result);
  }
  return await auth_server_default.influencer.createSession({ id: result.id, redirectTo });
};
var register_default = () => {
  const [searchParams] = (0, import_remix16.useSearchParams)();
  const data = (0, import_remix16.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement("h1", null, "Influencer Register"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "name",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "email",
    type: "email",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "password",
    type: "password",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "instagram",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "phone",
    type: "number",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "street",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "city",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "state",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "zip",
    data
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/settings.jsx
var settings_exports = {};
__export(settings_exports, {
  action: () => action5,
  default: () => settings_default,
  loader: () => loader10
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_keys4 = __toESM(require("lodash/keys"));
var action5 = async ({ request }) => {
  const [form, { id: influencerId }] = await Promise.all([
    request.formData(),
    auth_server_default.influencer.get({ request, include: { address: true } })
  ]);
  const action14 = form.get("_action");
  if (action14 === "delete") {
    await db.influencer.delete({ where: { id: influencerId } });
    return (0, import_remix17.redirect)("/influencer/login");
  }
  const street = form.get("street");
  const city = form.get("city");
  const state = form.get("state");
  const zip = form.get("zip");
  const addressData = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, street && { street }), city && { city }), state && { state }), zip && { zip });
  const data = __spreadValues({
    name: form.get("name"),
    email: form.get("email"),
    instagram: form.get("instagram"),
    password: form.get("password"),
    confirmPassword: form.get("confirmPassword"),
    currentPassword: form.get("currentPassword"),
    currentPasshash: form.get("currentPasshash"),
    phone: form.get("phone")
  }, (0, import_keys4.default)(addressData).length > 0 && {
    address: {
      upsert: {
        create: addressData,
        update: addressData
      }
    }
  });
  const res = await auth_server_default.influencer.update({ id: influencerId, data });
  if (res.errors) {
    return res;
  }
  return (0, import_remix17.redirect)(new URL(request.url).pathname);
};
var loader10 = async ({ request }) => {
  const id = await auth_server_default.influencer.requireId({ request });
  const influencer = await db.influencer.findUnique({ where: { id }, include: { address: true } });
  return (0, import_remix17.json)({ influencer });
};
var settings_default = () => {
  var _a, _b, _c, _d;
  const { influencer } = (0, import_remix17.useLoaderData)();
  const data = (0, import_remix17.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Account Settings"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "currentPasshash",
    value: influencer.passhash
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "name",
    defaultValue: influencer.name
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "email",
    type: "email",
    defaultValue: influencer.email
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "phone",
    type: "number",
    defaultValue: influencer.phone
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "instagram",
    defaultValue: influencer.instagram
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "street",
    defaultValue: (_a = influencer.address) == null ? void 0 : _a.street
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "city",
    defaultValue: (_b = influencer.address) == null ? void 0 : _b.city
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "state",
    defaultValue: (_c = influencer.address) == null ? void 0 : _c.state
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "zip",
    defaultValue: (_d = influencer.address) == null ? void 0 : _d.zip
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "currentPassword",
    type: "password"
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "password",
    type: "password"
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "confirmPassword",
    type: "password"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "update",
    className: "button"
  }, "Update"), /* @__PURE__ */ React.createElement("button", {
    hidden: true,
    type: "submit",
    name: "_action",
    value: "delete",
    className: "button"
  }, "Delete"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/index.jsx
var influencer_exports2 = {};
__export(influencer_exports2, {
  default: () => Index2
});
init_react();
var import_remix18 = __toESM(require_remix());
function Index2() {
  const { data: { influencer } } = (0, import_remix18.useMatches)().find((item) => {
    var _a;
    return (_a = item.data) == null ? void 0 : _a.influencer;
  });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Dashboard for ", influencer.name));
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/influencer/login.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action6,
  default: () => Login
});
init_react();
var import_remix19 = __toESM(require_remix());
var action6 = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/influencer";
  const result = await auth_server_default.influencer.login({ email, password });
  if (result.errors) {
    return (0, import_remix19.json)(result);
  }
  return await auth_server_default.influencer.createSession({ id: result.id, module: "influencer", redirectTo });
};
function Login() {
  const [searchParams] = (0, import_remix19.useSearchParams)();
  const data = (0, import_remix19.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement("h1", null, "Influencer Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    type: "email",
    name: "email"
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    type: "password",
    name: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))));
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business.jsx
var business_exports = {};
__export(business_exports, {
  default: () => Index3,
  loader: () => loader11
});
init_react();
var import_remix20 = __toESM(require_remix());
var publicRoutes2 = [
  "/business/login",
  "/business/register"
];
var loader11 = async ({ request }) => {
  const { pathname } = new URL(request.url);
  if (publicRoutes2.includes(pathname)) {
    return (0, import_remix20.json)({ pathname });
  }
  const business = await auth_server_default.business.get({ request });
  return (0, import_remix20.json)({ business, pathname });
};
function Index3() {
  const data = (0, import_remix20.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, !data.business && /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business/login"
  }, "Login")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business/register"
  }, "Sign Up")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/influencer/login"
  }, "Influencer?"))), data.business && /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end"
  }, /* @__PURE__ */ React.createElement("span", null, `Hi ${data.business.name}`), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post",
    className: "ml-4"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "module",
    value: "business"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Logout")), /* @__PURE__ */ React.createElement("ul", {
    className: "ml-4"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business"
  }, "Dashboard")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business/influencers"
  }, "Browse influencers")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business/partnerships"
  }, "Partnerships")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business/inquiries"
  }, "Inquiries")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix20.Link, {
    to: "/business/settings"
  }, "Settings")))), /* @__PURE__ */ React.createElement(import_remix20.Outlet, null));
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/partnerships/index.jsx
var partnerships_exports2 = {};
__export(partnerships_exports2, {
  default: () => partnerships_default2,
  loader: () => loader12
});
init_react();
var import_remix21 = __toESM(require_remix());
var loader12 = async ({ request }) => {
  const businessId = await auth_server_default.getSessionId({ request });
  const partnerships = await db.partnership.findMany({
    where: {
      AND: [
        { business: {
          is: { id: businessId }
        } },
        { OR: [
          { owner: PARTNERSHIP.OWNER.business },
          { AND: [
            { owner: PARTNERSHIP.OWNER.influencer },
            { NOT: { status: PARTNERSHIP.STATUS.drafted } }
          ] }
        ] }
      ]
    },
    include: { inquiries: true }
  });
  return (0, import_remix21.json)({ partnerships });
};
var partnerships_default2 = () => {
  const data = (0, import_remix21.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Partnerships"), /* @__PURE__ */ React.createElement("ul", null, data.partnerships.map(({ id, status }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_remix21.Link, {
    to: `/business/partnerships/${id}`
  }, id, ' - status "', status, '"'))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/influencers/index.jsx
var influencers_exports = {};
__export(influencers_exports, {
  default: () => influencers_default,
  loader: () => loader13
});
init_react();
var import_remix22 = __toESM(require_remix());
var loader13 = async () => {
  const influencers = await db.influencer.findMany({ take: 5 });
  return (0, import_remix22.json)({ influencers });
};
var influencers_default = () => {
  const data = (0, import_remix22.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Browse influencers"), /* @__PURE__ */ React.createElement("ul", null, data.influencers.map(({ id, email }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_remix22.Link, {
    to: `/business/influencers/${id}`
  }, email))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/reactivate/$email.jsx
var email_exports2 = {};
__export(email_exports2, {
  loader: () => loader14
});
init_react();
var import_remix23 = __toESM(require_remix());
var loader14 = async ({ params }) => {
  await db.business.update({ where: { email: params.email }, data: { isDeleted: false } });
  return (0, import_remix23.redirect)("/business/login");
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/partnerships/$id.jsx
var id_exports5 = {};
__export(id_exports5, {
  default: () => id_default5,
  loader: () => loader15
});
init_react();
var import_remix24 = __toESM(require_remix());
var import_capitalize2 = __toESM(require("lodash/capitalize"));
var statusBgColors = {
  [PARTNERSHIP.STATUS.pending]: "bg-yellow-200",
  [PARTNERSHIP.STATUS.active]: "bg-green-200",
  [PARTNERSHIP.STATUS.closed]: "bg-gray-200",
  [PARTNERSHIP.STATUS.cancelled]: "bg-red-200"
};
var loader15 = async ({ request, params }) => {
  const businessId = await auth_server_default.getSessionId({ request });
  const [partnership] = await db.partnership.findMany({
    where: { AND: [
      { id: params.id },
      { business: { is: { id: businessId } } }
    ] },
    include: {
      inquiries: { skip: 0, take: 5 },
      influencer: true
    }
  });
  if (!partnership) {
    return (0, import_remix24.redirect)("/business/partnerships");
  }
  return (0, import_remix24.json)({ partnership });
};
var id_default5 = () => {
  const { partnership } = (0, import_remix24.useLoaderData)();
  const statusBgColor = statusBgColors[partnership.status];
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("h1", null, "Partnership with ", partnership.influencer.name), /* @__PURE__ */ React.createElement("div", {
    className: `ml-2 py-1 px-2 rounded-2xl flex justify-center items-center ${statusBgColor}`
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-sm"
  }, (0, import_capitalize2.default)(partnership.status)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Details"), /* @__PURE__ */ React.createElement("ul", null, partnership.agreement && /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: partnership.agreement,
    target: "_blank",
    rel: "noreferrer"
  }, "Contract")), /* @__PURE__ */ React.createElement("li", null, "Influencer: ", " ", /* @__PURE__ */ React.createElement(import_remix24.Link, {
    to: `/business/influencers/${partnership.influencer.id}`
  }, partnership.influencer.name)))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col mt-5 md:flex-row md:mt-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-5 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h2", null, "Inquiries"), /* @__PURE__ */ React.createElement("hr", {
    className: "my-2"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(import_remix24.Link, {
    to: `/business/inquiries?partnershipId=${partnership.id}`,
    "data-css-override": true,
    className: "bg-gray-100 hover:bg-gray-200 rounded-lg p-2 my-2"
  }, "See all inquiries")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col border rounded shadow"
  }, partnership.inquiries.map(({ id, createdAt, to, from, status }) => /* @__PURE__ */ React.createElement(import_remix24.Link, {
    key: id,
    "data-css-override": true,
    to: `/business/inquiries/${id}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 hover:bg-gray-50 hover:cursor-pointer border-b"
  }, /* @__PURE__ */ React.createElement("strong", null, "Date:"), " ", new Date(createdAt).toLocaleString(), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("strong", null, "Status:"), " ", status)))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/influencers/$id.jsx
var id_exports6 = {};
__export(id_exports6, {
  action: () => action7,
  default: () => id_default6,
  loader: () => loader16
});
init_react();
var import_remix25 = __toESM(require_remix());
var action7 = async ({ request, params }) => {
  const businessId = await auth_server_default.getSessionId({ request });
  const { id: newInquiryId } = await db.inquiry.create({ data: {
    partnership: {
      create: {
        influencer: { connect: { id: params.id } },
        business: { connect: { id: businessId } }
      }
    }
  } });
  return (0, import_remix25.redirect)(`/business/inquiries/${newInquiryId}/edit?type=new`);
};
var loader16 = async ({ params }) => {
  const influencer = await db.influencer.findUnique({
    where: { id: params.id },
    include: { products: true }
  });
  if (!influencer) {
    return (0, import_remix25.redirect)("/business/influencers");
  }
  return (0, import_remix25.json)({ influencer });
};
var id_default6 = () => {
  const { influencer } = (0, import_remix25.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Influencer selected: ", influencer.name), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("span", null, "Products they offer:"), /* @__PURE__ */ React.createElement("ul", null, influencer.products.map((product, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, product.name))), influencer.products.length > 0 && /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "mt-2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit"
  }, "Inquire"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/inquiries.jsx
var inquiries_exports2 = {};
__export(inquiries_exports2, {
  default: () => inquiries_default2
});
init_react();
var import_remix26 = __toESM(require_remix());
var inquiries_default2 = () => {
  return /* @__PURE__ */ React.createElement(import_remix26.Outlet, null);
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/inquiries/index.jsx
var inquiries_exports3 = {};
__export(inquiries_exports3, {
  default: () => inquiries_default3,
  loader: () => loader17
});
init_react();
var import_remix27 = __toESM(require_remix());
var loader17 = async ({ request }) => {
  const { pathname } = new URL(request.url);
  const businessId = await auth_server_default.getSessionId({ request });
  const inquiries = await db.inquiry.findMany({
    where: { OR: [
      { AND: [
        { partnership: { business: { is: { id: businessId } } } },
        { NOT: { status: INQUIRY.STATUS.drafted } },
        { NOT: { from: INQUIRY.FROM.business } }
      ] },
      { AND: [
        { partnership: { business: { is: { id: businessId } } } },
        { from: INQUIRY.FROM.business }
      ] }
    ] },
    skip: 0,
    take: 20
  });
  return (0, import_remix27.json)({ inquiries, pathname });
};
var inquiries_default3 = () => {
  const { inquiries, pathname } = (0, import_remix27.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Inquiries"), /* @__PURE__ */ React.createElement("ul", null, inquiries.map(({ id, status }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, /* @__PURE__ */ React.createElement(import_remix27.Link, {
    to: pathname + "/" + id
  }, id, ' - status "', status, '"'))))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/inquiries/$id.jsx
var id_exports7 = {};
__export(id_exports7, {
  action: () => action8,
  default: () => id_default7,
  loader: () => loader18
});
init_react();
var import_remix28 = __toESM(require_remix());
var import_keys5 = __toESM(require("lodash/keys"));
var action8 = async ({ request, params }) => {
  const id = params.id;
  const form = await request.formData();
  const [action14] = (0, import_keys5.default)(Object.fromEntries(form));
  if (action14 === INQUIRY.STATUS.accepted) {
    await acceptInquiry({ id });
  }
  if (action14 === INQUIRY.STATUS.rejected) {
    await rejectInquiry({ id });
  }
  if (action14 === INQUIRY.STATUS.countered) {
    const { id: newInquiryId } = await counterInquiry({ id });
    return (0, import_remix28.redirect)(`/business/inquiries/${newInquiryId}/edit?type=counter`);
  }
  return (0, import_remix28.json)({});
};
var loader18 = async ({ request, params }) => {
  const businessId = await auth_server_default.getSessionId({ request });
  const [inquiry] = await db.inquiry.findMany({
    where: { AND: [
      { id: params.id },
      {
        partnership: {
          business: {
            is: { id: businessId }
          }
        }
      }
    ] },
    include: {
      inquiryLineItems: {
        include: { product: true }
      },
      partnership: {
        include: {
          influencer: {
            include: { products: true }
          }
        }
      }
    }
  });
  if (!inquiry) {
    return (0, import_remix28.redirect)("/business/inquiries");
  }
  return (0, import_remix28.json)({ inquiry });
};
var id_default7 = () => {
  return /* @__PURE__ */ React.createElement(import_remix28.Outlet, null);
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/inquiries/$id/index.jsx
var id_exports8 = {};
__export(id_exports8, {
  default: () => id_default8
});
init_react();
var import_remix29 = __toESM(require_remix());
var import_startCase7 = __toESM(require("lodash/startCase"));
var id_default8 = () => {
  const { inquiry } = useParentLoaderData({ key: "inquiry" });
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Inquiry"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("h3", {
    className: "my-2"
  }, "Details"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Status:"), " ", inquiry.status), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Created:"), " ", new Date(inquiry.createdAt).toLocaleDateString()), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Start Date:"), " ", new Date(inquiry.startDate).toLocaleDateString()), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "End Date:"), " ", new Date(inquiry.endDate).toLocaleDateString()), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Notes:"), " ", inquiry.notes), inquiry.counterInquiryId && /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix29.Link, {
    to: `/business/inquiries/${inquiry.counterInquiryId}`
  }, "Countered inquiry ", "->"))), /* @__PURE__ */ React.createElement("ul", null, inquiry.inquiryLineItems.map(({ product, quantity, interval }, idx) => /* @__PURE__ */ React.createElement("li", {
    key: idx
  }, "- ", quantity, " amount of ", (0, import_startCase7.default)(product.name), " costing $", product.price, "/ea every ", interval))), inquiry.from === "business" && inquiry.status === INQUIRY.STATUS.drafted && /* @__PURE__ */ React.createElement(import_remix29.Link, {
    to: `/business/inquiries/${inquiry.id}/edit`
  }, "Edit"), inquiry.from !== "business" && inquiry.status === INQUIRY.STATUS.pending && /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: INQUIRY.STATUS.accepted
  }, "Accept"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: INQUIRY.STATUS.rejected
  }, "Reject"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: INQUIRY.STATUS.countered
  }, "Counter"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/inquiries/$id/edit.jsx
var edit_exports2 = {};
__export(edit_exports2, {
  action: () => action9,
  default: () => edit_default2,
  loader: () => loader19
});
init_react();
var import_react2 = require("react");
var import_remix30 = __toESM(require_remix());
var import_keys6 = __toESM(require("lodash/keys"));
var import_filter2 = __toESM(require("lodash/filter"));
var import_first2 = __toESM(require("lodash/first"));
var import_startCase8 = __toESM(require("lodash/startCase"));
var import_toPairs2 = __toESM(require("lodash/toPairs"));
var action9 = async ({ request, params }) => {
  const inquiryId = params.id;
  const form = await request.formData();
  const formData = Object.fromEntries(form);
  const data = {
    inquiryId,
    notes: form.get("notes"),
    endDate: form.get("endDate"),
    startDate: form.get("startDate"),
    lineItemData: (0, import_filter2.default)((0, import_toPairs2.default)(formData), ([k]) => k.includes("product")),
    influencerId: form.get("influencerId"),
    partnershipId: form.get("partnershipId"),
    status: (0, import_first2.default)((0, import_filter2.default)((0, import_keys6.default)(formData), (val) => (0, import_keys6.default)(INQUIRY.STATUS).includes(val)))
  };
  await updateInquiry(data);
  return (0, import_remix30.redirect)(`/business/inquiries/${inquiryId}`);
};
var loader19 = async ({ request, params }) => {
  const { searchParams } = new URL(request.url);
  const inquiry = await db.inquiry.findUnique({ where: { id: params.id } });
  if (inquiry.status !== INQUIRY.STATUS.drafted) {
    return (0, import_remix30.redirect)(`/business/inquiries/${params.id}`);
  }
  return (0, import_remix30.json)({ type: searchParams.get("type") });
};
var edit_default2 = () => {
  const { type } = (0, import_remix30.useLoaderData)();
  const { inquiry } = useParentLoaderData({ key: "inquiry" });
  const { influencer } = inquiry.partnership;
  const [lineItems, setLineItems] = (0, import_react2.useState)(inquiry.inquiryLineItems);
  const newItem = influencer.products.length > 0 && {
    quantity: 1,
    interval: "day",
    product: {
      name: influencer.products[0].name,
      price: Number(influencer.products[0].price)
    }
  };
  const startDate = inquiry.startDate ? new Date(inquiry.startDate).toISOString().substr(0, 10) : "";
  const endDate = inquiry.endDate ? new Date(inquiry.endDate).toISOString().substr(0, 10) : "";
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, type ? (0, import_startCase8.default)(type) : "Edit", " Inquiry"), /* @__PURE__ */ React.createElement("form", {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "influencerId",
    defaultValue: influencer.id
  }), /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    name: "partnershipId",
    defaultValue: inquiry.partnership.id
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-2 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    "html-for": "startDate",
    className: "mb-1"
  }, "Start Date"), /* @__PURE__ */ React.createElement("input", {
    name: "startDate",
    type: "date",
    defaultValue: startDate
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col m-2 md:w-1/2"
  }, /* @__PURE__ */ React.createElement("label", {
    "html-for": "endDate",
    className: "mb-1"
  }, "End Date"), /* @__PURE__ */ React.createElement("input", {
    name: "endDate",
    type: "date",
    defaultValue: endDate
  })), /* @__PURE__ */ React.createElement("table", {
    className: "m-2"
  }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", null, "Product"), /* @__PURE__ */ React.createElement("th", null, "Price Per"), /* @__PURE__ */ React.createElement("th", null, "Quantity"), /* @__PURE__ */ React.createElement("th", null, "Every"))), /* @__PURE__ */ React.createElement("tbody", null, lineItems.map((item, idx) => /* @__PURE__ */ React.createElement("tr", {
    key: idx
  }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("select", {
    name: `${idx}-product-name`,
    value: item.product.name,
    onChange: (e) => {
      const newName = e.target.value;
      const item2 = __spreadProps(__spreadValues({}, lineItems[idx]), { product: {
        name: newName,
        price: influencer.products.find((prod) => prod.name === newName).price
      } });
      setLineItems((items) => items.filter((v, i) => i !== idx).concat(item2));
    }
  }, influencer.products.map((product, index) => /* @__PURE__ */ React.createElement("option", {
    key: index,
    value: product.name
  }, (0, import_startCase8.default)(product.name))))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    step: "0.01",
    name: `${idx}-product-price`,
    value: lineItems[idx].product.price,
    disabled: true,
    readOnly: true
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${idx}-product-quantity`,
    defaultValue: item.quantity
  })), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("select", {
    name: `${idx}-product-interval`,
    defaultValue: item.interval
  }, /* @__PURE__ */ React.createElement("option", {
    value: "day"
  }, "Day"), /* @__PURE__ */ React.createElement("option", {
    value: "2-day"
  }, "2 Days"), /* @__PURE__ */ React.createElement("option", {
    value: "week"
  }, "Week"), /* @__PURE__ */ React.createElement("option", {
    value: "2-weeks"
  }, "2 Weeks"), /* @__PURE__ */ React.createElement("option", {
    value: "month"
  }, "Month"), /* @__PURE__ */ React.createElement("option", {
    value: "2-months"
  }, "2 Months"), /* @__PURE__ */ React.createElement("option", {
    value: "year"
  }, "Year"))), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setLineItems((items) => items.filter((v, i) => i !== idx));
    }
  }, "Remove Product")))), newItem && /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("button", {
    onClick: (e) => {
      e.preventDefault();
      setLineItems((items) => items.concat(newItem));
    }
  }, "Add Product"))))), /* @__PURE__ */ React.createElement("textarea", {
    name: "notes",
    defaultValue: inquiry.notes
  }), /* @__PURE__ */ React.createElement("button", {
    name: INQUIRY.STATUS.pending,
    type: "submit"
  }, "Submit Inquiry"), /* @__PURE__ */ React.createElement("button", {
    name: INQUIRY.STATUS.drafted,
    type: "submit"
  }, "Save for later")));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/register.jsx
var register_exports2 = {};
__export(register_exports2, {
  action: () => action10,
  default: () => register_default2
});
init_react();
var import_remix31 = __toESM(require_remix());
var action10 = async ({ request }) => {
  const form = await request.formData();
  const redirectTo = form.get("redirectTo") || "/business";
  const data = {
    name: form.get("name"),
    email: form.get("email"),
    password: form.get("password"),
    phone: form.get("phone"),
    instagram: form.get("instagram"),
    address: {
      create: {
        street: form.get("street"),
        city: form.get("city"),
        state: form.get("state"),
        zip: form.get("zip")
      }
    }
  };
  const result = await auth_server_default.business.register({ data });
  if (result.errors) {
    return (0, import_remix31.json)(result);
  }
  return await auth_server_default.business.createSession({ id: result.id, redirectTo });
};
var register_default2 = () => {
  const [searchParams] = (0, import_remix31.useSearchParams)();
  const data = (0, import_remix31.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement("h1", null, "Business Register"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "name",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "email",
    type: "email",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "password",
    type: "password",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "instagram",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "phone",
    type: "number",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "street",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "city",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "state",
    data
  }), /* @__PURE__ */ React.createElement(Input_default, {
    name: "zip",
    data
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/settings.jsx
var settings_exports2 = {};
__export(settings_exports2, {
  action: () => action11,
  default: () => settings_default2,
  loader: () => loader20
});
init_react();
var import_remix32 = __toESM(require_remix());
var import_keys7 = __toESM(require("lodash/keys"));
var action11 = async ({ request }) => {
  const [form, { id: businessId }] = await Promise.all([
    request.formData(),
    auth_server_default.business.get({ request, include: { address: true } })
  ]);
  const action14 = form.get("_action");
  if (action14 === "delete") {
    await db.business.delete({ where: { id: businessId } });
    return (0, import_remix32.redirect)("/business/login");
  }
  const street = form.get("street");
  const city = form.get("city");
  const state = form.get("state");
  const zip = form.get("zip");
  const addressData = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, street && { street }), city && { city }), state && { state }), zip && { zip });
  const data = __spreadValues({
    name: form.get("name"),
    email: form.get("email"),
    instagram: form.get("instagram"),
    password: form.get("password"),
    confirmPassword: form.get("confirmPassword"),
    currentPassword: form.get("currentPassword"),
    currentPasshash: form.get("currentPasshash"),
    phone: form.get("phone")
  }, (0, import_keys7.default)(addressData).length > 0 && {
    address: {
      upsert: {
        create: addressData,
        update: addressData
      }
    }
  });
  const res = await auth_server_default.business.update({ id: businessId, data });
  if (res.errors) {
    return res;
  }
  return (0, import_remix32.redirect)(new URL(request.url).pathname);
};
var loader20 = async ({ request }) => {
  const id = await auth_server_default.business.requireId({ request });
  const business = await db.business.findUnique({ where: { id }, include: { address: true } });
  return (0, import_remix32.json)({ business });
};
var settings_default2 = () => {
  var _a, _b, _c, _d;
  const { business } = (0, import_remix32.useLoaderData)();
  const data = (0, import_remix32.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Account Settings"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "currentPasshash",
    value: business.passhash
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "name",
    defaultValue: business.name
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "email",
    type: "email",
    defaultValue: business.email
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "phone",
    type: "number",
    defaultValue: business.phone
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "instagram",
    defaultValue: business.instagram
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "street",
    defaultValue: (_a = business.address) == null ? void 0 : _a.street
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "city",
    defaultValue: (_b = business.address) == null ? void 0 : _b.city
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "state",
    defaultValue: (_c = business.address) == null ? void 0 : _c.state
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "zip",
    defaultValue: (_d = business.address) == null ? void 0 : _d.zip
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "currentPassword",
    type: "password"
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "password",
    type: "password"
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    name: "confirmPassword",
    type: "password"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "_action",
    value: "update",
    className: "button"
  }, "Update"), /* @__PURE__ */ React.createElement("button", {
    hidden: true,
    type: "submit",
    name: "_action",
    value: "delete",
    className: "button"
  }, "Delete"))));
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/index.jsx
var business_exports2 = {};
__export(business_exports2, {
  default: () => Index4,
  loader: () => loader21
});
init_react();
var import_remix33 = __toESM(require_remix());
var loader21 = async ({ request }) => {
  const { pathname } = new URL(request.url);
  const business = await auth_server_default.business.get({ request });
  return (0, import_remix33.json)({ business, pathname });
};
function Index4() {
  const data = (0, import_remix33.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, "Dashboard for ", data.business.name);
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/business/login.jsx
var login_exports2 = {};
__export(login_exports2, {
  action: () => action12,
  default: () => Login2
});
init_react();
var import_remix34 = __toESM(require_remix());
var action12 = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/business";
  const result = await auth_server_default.business.login({ email, password });
  if (result.errors) {
    return (0, import_remix34.json)(result);
  }
  return await auth_server_default.business.createSession({ id: result.id, redirectTo });
};
function Login2() {
  const [searchParams] = (0, import_remix34.useSearchParams)();
  const data = (0, import_remix34.useActionData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "my-2"
  }, /* @__PURE__ */ React.createElement("h1", null, "Business Login"), /* @__PURE__ */ React.createElement("form", {
    method: "post",
    className: "lg:w-1/2"
  }, /* @__PURE__ */ React.createElement("input", {
    hidden: true,
    readOnly: true,
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    type: "email",
    name: "email"
  }), /* @__PURE__ */ React.createElement(Input_default, {
    data,
    type: "password",
    name: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))));
}

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/logout.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action13
});
init_react();
var action13 = async ({ request }) => {
  const form = await request.formData();
  const module2 = form.get("module") || "business";
  return auth_server_default[module2].logout({ request });
};

// route:/Users/bryantbrock/Programs/business-athlete-marketplace/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader22
});
init_react();
var import_remix35 = __toESM(require_remix());
var loader22 = () => (0, import_remix35.redirect)("/business");

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "06c96052", "entry": { "module": "/build/entry.client-HOXSNM7B.js", "imports": ["/build/_shared/chunk-747ETDNF.js", "/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-JM2UDOB3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/business": { "id": "routes/business", "parentId": "root", "path": "business", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business-DISVV3AA.js", "imports": ["/build/_shared/chunk-SHA6BUOF.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/index": { "id": "routes/business/index", "parentId": "routes/business", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/business/index-5LITQIJ7.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/influencers/$id": { "id": "routes/business/influencers/$id", "parentId": "routes/business", "path": "influencers/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/influencers/$id-L4CDAXFH.js", "imports": ["/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/influencers/index": { "id": "routes/business/influencers/index", "parentId": "routes/business", "path": "influencers", "index": true, "caseSensitive": void 0, "module": "/build/routes/business/influencers/index-PXWLRYI5.js", "imports": ["/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/inquiries": { "id": "routes/business/inquiries", "parentId": "routes/business", "path": "inquiries", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/inquiries-ALM66LAI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/inquiries/$id": { "id": "routes/business/inquiries/$id", "parentId": "routes/business/inquiries", "path": ":id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/inquiries/$id-6THGNAB2.js", "imports": ["/build/_shared/chunk-X7Z7AJQI.js", "/build/_shared/chunk-HYRRJ2JH.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-SHA6BUOF.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/inquiries/$id/edit": { "id": "routes/business/inquiries/$id/edit", "parentId": "routes/business/inquiries/$id", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/inquiries/$id/edit-YML2OZID.js", "imports": ["/build/_shared/chunk-QSGNZWKG.js", "/build/_shared/chunk-L5I77GRQ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/inquiries/$id/index": { "id": "routes/business/inquiries/$id/index", "parentId": "routes/business/inquiries/$id", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/business/inquiries/$id/index-NIXHHWMA.js", "imports": ["/build/_shared/chunk-L5I77GRQ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/inquiries/index": { "id": "routes/business/inquiries/index", "parentId": "routes/business/inquiries", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/business/inquiries/index-HYM2Y4KX.js", "imports": ["/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-SHA6BUOF.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/login": { "id": "routes/business/login", "parentId": "routes/business", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/login-NZPMWZNT.js", "imports": ["/build/_shared/chunk-A7MG5ZZZ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/partnerships/$id": { "id": "routes/business/partnerships/$id", "parentId": "routes/business", "path": "partnerships/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/partnerships/$id-YIIH4IOV.js", "imports": ["/build/_shared/chunk-SWIJWD5S.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/partnerships/index": { "id": "routes/business/partnerships/index", "parentId": "routes/business", "path": "partnerships", "index": true, "caseSensitive": void 0, "module": "/build/routes/business/partnerships/index-3Z6TOEKQ.js", "imports": ["/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/reactivate/$email": { "id": "routes/business/reactivate/$email", "parentId": "routes/business", "path": "reactivate/:email", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/reactivate/$email-IOVEN5PR.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/register": { "id": "routes/business/register", "parentId": "routes/business", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/register-JSOSJH4D.js", "imports": ["/build/_shared/chunk-A7MG5ZZZ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business/settings": { "id": "routes/business/settings", "parentId": "routes/business", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business/settings-GILUTOXM.js", "imports": ["/build/_shared/chunk-HYRRJ2JH.js", "/build/_shared/chunk-A7MG5ZZZ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-BHG62XP6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer": { "id": "routes/influencer", "parentId": "root", "path": "influencer", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer-EZV3YM7O.js", "imports": ["/build/_shared/chunk-SHA6BUOF.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/businesses/$id": { "id": "routes/influencer/businesses/$id", "parentId": "routes/influencer", "path": "businesses/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/businesses/$id-6IFBW5BZ.js", "imports": ["/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/businesses/index": { "id": "routes/influencer/businesses/index", "parentId": "routes/influencer", "path": "businesses", "index": true, "caseSensitive": void 0, "module": "/build/routes/influencer/businesses/index-KKV35NW5.js", "imports": ["/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/index": { "id": "routes/influencer/index", "parentId": "routes/influencer", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/influencer/index-BQH26XQR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/inquiries/$id": { "id": "routes/influencer/inquiries/$id", "parentId": "routes/influencer", "path": "inquiries/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/inquiries/$id-ZHLR753K.js", "imports": ["/build/_shared/chunk-X7Z7AJQI.js", "/build/_shared/chunk-HYRRJ2JH.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/inquiries/$id/edit": { "id": "routes/influencer/inquiries/$id/edit", "parentId": "routes/influencer/inquiries/$id", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/inquiries/$id/edit-AB6ECQ2I.js", "imports": ["/build/_shared/chunk-QSGNZWKG.js", "/build/_shared/chunk-L5I77GRQ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/inquiries/$id/index": { "id": "routes/influencer/inquiries/$id/index", "parentId": "routes/influencer/inquiries/$id", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/influencer/inquiries/$id/index-O6J7LTPD.js", "imports": ["/build/_shared/chunk-L5I77GRQ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/inquiries/index": { "id": "routes/influencer/inquiries/index", "parentId": "routes/influencer", "path": "inquiries", "index": true, "caseSensitive": void 0, "module": "/build/routes/influencer/inquiries/index-JW2HZ7JM.js", "imports": ["/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/login": { "id": "routes/influencer/login", "parentId": "routes/influencer", "path": "login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/login-K5JWSCJD.js", "imports": ["/build/_shared/chunk-A7MG5ZZZ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/partnerships/$id": { "id": "routes/influencer/partnerships/$id", "parentId": "routes/influencer", "path": "partnerships/:id", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/partnerships/$id-T2FDNYC5.js", "imports": ["/build/_shared/chunk-SWIJWD5S.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/partnerships/index": { "id": "routes/influencer/partnerships/index", "parentId": "routes/influencer", "path": "partnerships", "index": true, "caseSensitive": void 0, "module": "/build/routes/influencer/partnerships/index-UYR2BIYA.js", "imports": ["/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/products": { "id": "routes/influencer/products", "parentId": "routes/influencer", "path": "products", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/products-UWLVSU27.js", "imports": ["/build/_shared/chunk-HYRRJ2JH.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-IM2ULJSR.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/reactivate/$email": { "id": "routes/influencer/reactivate/$email", "parentId": "routes/influencer", "path": "reactivate/:email", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/reactivate/$email-BUX7VYD5.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/register": { "id": "routes/influencer/register", "parentId": "routes/influencer", "path": "register", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/register-7IZD3JGV.js", "imports": ["/build/_shared/chunk-A7MG5ZZZ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/influencer/settings": { "id": "routes/influencer/settings", "parentId": "routes/influencer", "path": "settings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/influencer/settings-XBHUYFJG.js", "imports": ["/build/_shared/chunk-HYRRJ2JH.js", "/build/_shared/chunk-A7MG5ZZZ.js", "/build/_shared/chunk-2HF2H7X7.js", "/build/_shared/chunk-3QR3AR5V.js", "/build/_shared/chunk-OQGWGG43.js", "/build/_shared/chunk-36JN244Y.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/logout-764UH4WK.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-06C96052.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/influencer": {
    id: "routes/influencer",
    parentId: "root",
    path: "influencer",
    index: void 0,
    caseSensitive: void 0,
    module: influencer_exports
  },
  "routes/influencer/partnerships/index": {
    id: "routes/influencer/partnerships/index",
    parentId: "routes/influencer",
    path: "partnerships",
    index: true,
    caseSensitive: void 0,
    module: partnerships_exports
  },
  "routes/influencer/reactivate/$email": {
    id: "routes/influencer/reactivate/$email",
    parentId: "routes/influencer",
    path: "reactivate/:email",
    index: void 0,
    caseSensitive: void 0,
    module: email_exports
  },
  "routes/influencer/businesses/index": {
    id: "routes/influencer/businesses/index",
    parentId: "routes/influencer",
    path: "businesses",
    index: true,
    caseSensitive: void 0,
    module: businesses_exports
  },
  "routes/influencer/partnerships/$id": {
    id: "routes/influencer/partnerships/$id",
    parentId: "routes/influencer",
    path: "partnerships/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/influencer/inquiries/index": {
    id: "routes/influencer/inquiries/index",
    parentId: "routes/influencer",
    path: "inquiries",
    index: true,
    caseSensitive: void 0,
    module: inquiries_exports
  },
  "routes/influencer/businesses/$id": {
    id: "routes/influencer/businesses/$id",
    parentId: "routes/influencer",
    path: "businesses/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports2
  },
  "routes/influencer/inquiries/$id": {
    id: "routes/influencer/inquiries/$id",
    parentId: "routes/influencer",
    path: "inquiries/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports3
  },
  "routes/influencer/inquiries/$id/index": {
    id: "routes/influencer/inquiries/$id/index",
    parentId: "routes/influencer/inquiries/$id",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: id_exports4
  },
  "routes/influencer/inquiries/$id/edit": {
    id: "routes/influencer/inquiries/$id/edit",
    parentId: "routes/influencer/inquiries/$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/influencer/products": {
    id: "routes/influencer/products",
    parentId: "routes/influencer",
    path: "products",
    index: void 0,
    caseSensitive: void 0,
    module: products_exports
  },
  "routes/influencer/register": {
    id: "routes/influencer/register",
    parentId: "routes/influencer",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/influencer/settings": {
    id: "routes/influencer/settings",
    parentId: "routes/influencer",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/influencer/index": {
    id: "routes/influencer/index",
    parentId: "routes/influencer",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: influencer_exports2
  },
  "routes/influencer/login": {
    id: "routes/influencer/login",
    parentId: "routes/influencer",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/business": {
    id: "routes/business",
    parentId: "root",
    path: "business",
    index: void 0,
    caseSensitive: void 0,
    module: business_exports
  },
  "routes/business/partnerships/index": {
    id: "routes/business/partnerships/index",
    parentId: "routes/business",
    path: "partnerships",
    index: true,
    caseSensitive: void 0,
    module: partnerships_exports2
  },
  "routes/business/influencers/index": {
    id: "routes/business/influencers/index",
    parentId: "routes/business",
    path: "influencers",
    index: true,
    caseSensitive: void 0,
    module: influencers_exports
  },
  "routes/business/reactivate/$email": {
    id: "routes/business/reactivate/$email",
    parentId: "routes/business",
    path: "reactivate/:email",
    index: void 0,
    caseSensitive: void 0,
    module: email_exports2
  },
  "routes/business/partnerships/$id": {
    id: "routes/business/partnerships/$id",
    parentId: "routes/business",
    path: "partnerships/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports5
  },
  "routes/business/influencers/$id": {
    id: "routes/business/influencers/$id",
    parentId: "routes/business",
    path: "influencers/:id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports6
  },
  "routes/business/inquiries": {
    id: "routes/business/inquiries",
    parentId: "routes/business",
    path: "inquiries",
    index: void 0,
    caseSensitive: void 0,
    module: inquiries_exports2
  },
  "routes/business/inquiries/index": {
    id: "routes/business/inquiries/index",
    parentId: "routes/business/inquiries",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: inquiries_exports3
  },
  "routes/business/inquiries/$id": {
    id: "routes/business/inquiries/$id",
    parentId: "routes/business/inquiries",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports7
  },
  "routes/business/inquiries/$id/index": {
    id: "routes/business/inquiries/$id/index",
    parentId: "routes/business/inquiries/$id",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: id_exports8
  },
  "routes/business/inquiries/$id/edit": {
    id: "routes/business/inquiries/$id/edit",
    parentId: "routes/business/inquiries/$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports2
  },
  "routes/business/register": {
    id: "routes/business/register",
    parentId: "routes/business",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports2
  },
  "routes/business/settings": {
    id: "routes/business/settings",
    parentId: "routes/business",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports2
  },
  "routes/business/index": {
    id: "routes/business/index",
    parentId: "routes/business",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: business_exports2
  },
  "routes/business/login": {
    id: "routes/business/login",
    parentId: "routes/business",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map

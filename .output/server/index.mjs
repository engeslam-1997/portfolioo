globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-06-25T17:35:22.000Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/hero-bg-DBDuY9Dh.jpg": {
		"type": "image/jpeg",
		"etag": "\"5de98-yXaNDdPqkI1UmqlGgUHUgGx0zVg\"",
		"mtime": "2026-06-29T09:17:27.264Z",
		"size": 384664,
		"path": "../public/assets/hero-bg-DBDuY9Dh.jpg"
	},
	"/assets/gallery-3-BROO1TtD.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a8b0-T68Qx7wZzzfb8b313EeJNFetyWY\"",
		"mtime": "2026-06-29T09:17:27.253Z",
		"size": 239792,
		"path": "../public/assets/gallery-3-BROO1TtD.jpg"
	},
	"/assets/project-1-CP6dHHUp.jpg": {
		"type": "image/jpeg",
		"etag": "\"498d2-XuD78lXIFxMVkNONp0oLOUwhe8o\"",
		"mtime": "2026-06-29T09:17:27.264Z",
		"size": 301266,
		"path": "../public/assets/project-1-CP6dHHUp.jpg"
	},
	"/assets/gallery-1-C79dy93S.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b53b-jHA+HzBD8dyuEahI6zc6q8j5HaE\"",
		"mtime": "2026-06-29T09:17:27.252Z",
		"size": 374075,
		"path": "../public/assets/gallery-1-C79dy93S.jpg"
	},
	"/assets/gallery-2-DCcA0o1H.jpg": {
		"type": "image/jpeg",
		"etag": "\"78eb2-7oSTnh+vKABLvNBlV77b6XjQo1Y\"",
		"mtime": "2026-06-29T09:17:27.253Z",
		"size": 495282,
		"path": "../public/assets/gallery-2-DCcA0o1H.jpg"
	},
	"/assets/index-CLjQeJ4Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"549dd-ofxNumbtqrPVGjBXtFjgzbEehx8\"",
		"mtime": "2026-06-29T09:17:27.252Z",
		"size": 346589,
		"path": "../public/assets/index-CLjQeJ4Q.js"
	},
	"/assets/project-2-BQEbPM95.jpg": {
		"type": "image/jpeg",
		"etag": "\"53e38-y37FbYdxWehr359p/CLLpQjKjqQ\"",
		"mtime": "2026-06-29T09:17:27.265Z",
		"size": 343608,
		"path": "../public/assets/project-2-BQEbPM95.jpg"
	},
	"/assets/portrait-TR0Ny0kn.jpg": {
		"type": "image/jpeg",
		"etag": "\"29051-fFFVBcjDJibq4EzuyB2MywATrbk\"",
		"mtime": "2026-06-29T09:17:27.264Z",
		"size": 168017,
		"path": "../public/assets/portrait-TR0Ny0kn.jpg"
	},
	"/assets/styles-DZZS9wLD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15c17-3MCN2E+ysBrimWk17ZhSu5+/m7w\"",
		"mtime": "2026-06-29T09:17:27.268Z",
		"size": 89111,
		"path": "../public/assets/styles-DZZS9wLD.css"
	},
	"/assets/project-6-BS_q0TC2.jpg": {
		"type": "image/jpeg",
		"etag": "\"38283-ZnMn2ZM3eiG8gdqjm3B2gAvNQ+4\"",
		"mtime": "2026-06-29T09:17:27.267Z",
		"size": 230019,
		"path": "../public/assets/project-6-BS_q0TC2.jpg"
	},
	"/assets/project-3-CmruVSMI.jpg": {
		"type": "image/jpeg",
		"etag": "\"f82d0-Vi/izwi9ECGg/RqIlfhoD1DYBIQ\"",
		"mtime": "2026-06-29T09:17:27.266Z",
		"size": 1016528,
		"path": "../public/assets/project-3-CmruVSMI.jpg"
	},
	"/cv/eslam-cv.pdf": {
		"type": "application/pdf",
		"etag": "\"4f-744E0mrGQa86DGjpxy/iAHTB4hw\"",
		"mtime": "2026-06-25T17:35:22.000Z",
		"size": 79,
		"path": "../public/cv/eslam-cv.pdf"
	},
	"/assets/routes-BWNDSGhy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d620-zoTT/TYm6rhHcACPymSfIBC20o0\"",
		"mtime": "2026-06-29T09:17:27.252Z",
		"size": 644640,
		"path": "../public/assets/routes-BWNDSGhy.js"
	},
	"/assets/project-4-DqWiGRFf.jpg": {
		"type": "image/jpeg",
		"etag": "\"134955-5svSeHpcWfGI8/zCAoViAbQxFsM\"",
		"mtime": "2026-06-29T09:17:27.266Z",
		"size": 1263957,
		"path": "../public/assets/project-4-DqWiGRFf.jpg"
	},
	"/assets/project-5-Do5tHJ9k.jpg": {
		"type": "image/jpeg",
		"etag": "\"44041d-nBpwtmIDcwBVkwDVJGuw7AJYaQk\"",
		"mtime": "2026-06-29T09:17:27.267Z",
		"size": 4457501,
		"path": "../public/assets/project-5-Do5tHJ9k.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_wWugHu = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_wWugHu
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };

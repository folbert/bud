---
id: bud-framework.extension.module
title: module interface
sidebar_label: module interface
hide_title: true
sidebar: "api"
slug: module
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## Extension.Module interface

Bud extension interface

Signature:

```typescript
export interface Module<Options = any> extends Loose
```

Extends: [Loose](/api/bud-framework/loose)

## Properties

| Property                                                  | Type                                                                                                                                                      | Description                                                                                                                        |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [api?](/api/bud-framework/extension/module/api)           | ((app: [Framework](//bud-framework/framework)) =&gt; Promise&lt;Record&lt;string, CallableFunction&gt;&gt;) &#124; Record&lt;string, CallableFunction&gt; | <i>(Optional)</i> Objects to bind to the framework. May be expressed as an object literal or a factory function.                   |
| [boot?](/api/bud-framework/extension/module/boot)         | [Factory](//bud-framework/factory)&lt;\[[Framework](//bud-framework/framework), Signale\], any&gt;                                                        | <i>(Optional)</i> General purpose callback. Called after everything else.                                                          |
| [mixin?](/api/bud-framework/extension/module/mixin)       | (app: [Framework](//bud-framework/framework)) =&gt; Promise&lt;Record&lt;string, any&gt;&gt;                                                              | <i>(Optional)</i> Objects to bind to the framework. May be expressed as an object literal or a factory function.                   |
| [name?](/api/bud-framework/extension/module/name)         | Name                                                                                                                                                      | <i>(Optional)</i> The module name                                                                                                  |
| [options?](/api/bud-framework/extension/module/options)   | [Maybe](//bud-framework/maybe)&lt;\[[Framework](//bud-framework/framework)\], Options&gt;                                                                 | <i>(Optional)</i> Options registered to the extension module                                                                       |
| [register?](/api/bud-framework/extension/module/register) | [Factory](//bud-framework/factory)&lt;\[[Framework](//bud-framework/framework), Signale\], any&gt;                                                        | <i>(Optional)</i> General purpose callback. Called first.                                                                          |
| [when?](/api/bud-framework/extension/module/when)         | [Maybe](//bud-framework/maybe)&lt;\[[Framework](//bud-framework/framework), Container&lt;Options&gt;\], boolean&gt;                                       | <i>(Optional)</i> Boolean or a function returning a boolean indicating if the [Module](//bud-framework/module) should be utilized. |
---
title: "Two Forms of Pre-rendering"
description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quibusdam ut quisquam optio aliquid sapiente quasi? Rerum fugiat optio ad sit deserunt soluta id. Amet sint quae recusandae optio nemo."
headImage: "https://images.unsplash.com/photo-1718657532611-e1fbcf73d776?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
headAlt: ""
order: 1
tags: ["react", "taipescript"]
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

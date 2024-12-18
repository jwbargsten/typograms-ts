# Typograms TS

**This is a fork of [Typograms](https://github.com/google/typograms).**

Typograms seemed unmaintained and also the code was difficult to work with. I refactored
most of the code and added Typescript types.

I hope this setup is more inviting for code contributions.

Most prominent changes

- css is supplied separately (makes it possible to have custom styling)
- `<pre data-typograms>...</pre>` can be used (instead of `<script type="text/typogram">`)
  (google/typograms#9)
- Fixed "Text is misplaced & cut off in Firefox" (google/typograms#5)
- reduced file size to 15kb (before 24kb)

## Overview

Typograms (short for typographic diagrams) is a lightweight image format
(`text/typogram`) useful for defining simple diagrams in technical documentation,
originally developed [here](https://code.sgo.to/2022/06/20/typographic-diagrams.html).

See it in action here:

https://google.github.io/typograms/

Like markdown, typograms is heavily inspired by pre-existing conventions found in ASCII
diagrams. A small set of primitives and rules to connect them is defined, which you can
use to build larger diagrams.

Typograms optimizes for editability and portability (e.g. plain text is easy to
maintain, change, store and transmit), at the cost of expressivity (e.g. SVG is more
expressive) and ergonomics (e.g. higher level tools produce diagrams faster).

You can embed typograms into pages using the JS rendering library:

```html
<head>
  <link href="https://cdn.jsdelivr.net/gh/jwbargsten/typograms-ts/dist/typograms-ts.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/gh/jwbargsten/typograms-ts/dist/typograms-ts.min.js"></script>
  <pre data-typogram>
+----+
|    |---> My first diagram!
+----+
  </pre>
</body>
```

Option overview:

```html
<pre data-typogram data-typogram-debug data-typogram-padding="6" data-typogram-zoom="0.3">
...
</pre>
```

A full example you can find [here](https://github.com/jwbargsten/typograms-ts/blob/main/example.html)

## Backwards compatibility

You can still use the old syntax from the original Typograms

```html
<head>
  <link href="https://cdn.jsdelivr.net/gh/jwbargsten/typograms-ts/dist/typograms-ts.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <script src="https://cdn.jsdelivr.net/gh/jwbargsten/typograms-ts/dist/typograms-ts.min.js"></script>
  <script type="text/typogram">
+----+
|    |---> My first diagram!
+----+
  </script>
</body>
```

Option overview:

```html
<script type="text/typogram" padding="0" zoom="0.3" disabled grid>
...
</script>
```

## See also

A comparison with related work is available
[here](https://google.github.io/typograms/#related).

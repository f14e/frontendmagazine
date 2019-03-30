(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    155: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return u;
        });
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        c = n(166),
        s = n(164),
        l = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.site.siteMetadata.title;
              return i.a.createElement(
                c.a,
                { location: this.props.location, title: e },
                i.a.createElement(s.a, { title: "404: Not Found" }),
                i.a.createElement("h1", null, "Not Found"),
                i.a.createElement(
                  "p",
                  null,
                  "You just hit a route that doesn't exist... the sadness."
                )
              );
            }),
            t
          );
        })(i.a.Component);
      t.default = l;
      var u = "1097489062";
    },
    160: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return s;
      }),
        n.d(t, "b", function() {
          return l;
        });
      var a = n(167),
        r = n.n(a),
        o = n(168),
        i = n.n(o);
      (i.a.overrideThemeStyles = function() {
        return { "a.gatsby-resp-image-link": { boxShadow: "none" } };
      }),
        (i.a.googleFonts = [
          { name: "Roboto Condensed", styles: ["400"] },
          { name: "PT Sans", styles: ["400", "400i", "700"] },
        ]),
        (i.a.bodyFontFamily = ["PT Sans", "Roboto", "sans-serif"]),
        (i.a.headerFontFamily = ["Roboto Condensed", "Roboto", "sans-serif"]),
        (i.a.baseFontSize = "16px"),
        (i.a.scaleRatio = 1.75);
      var c = new r.a(i.a);
      var s = c.rhythm,
        l = c.scale;
    },
    161: function(e, t, n) {
      var a;
      e.exports = ((a = n(163)) && a.default) || a;
    },
    162: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        c = n(33),
        s = n.n(c);
      n.d(t, "a", function() {
        return s.a;
      });
      n(161), r.a.createContext({});
      i.a.object, i.a.string.isRequired, i.a.func, i.a.func;
    },
    163: function(e, t, n) {
      "use strict";
      n.r(t);
      n(34);
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        c = n(55),
        s = n(2),
        l = function(e) {
          var t = e.location,
            n = s.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            c.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (l.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = l);
    },
    164: function(e, t, n) {
      "use strict";
      var a = n(165),
        r = n(0),
        o = n.n(r),
        i = n(4),
        c = n.n(i),
        s = n(169),
        l = n.n(s);
      function u(e) {
        var t = e.description,
          n = e.lang,
          r = e.meta,
          i = e.keywords,
          c = e.title,
          s = a.data.site,
          u = t || s.siteMetadata.description;
        return o.a.createElement(l.a, {
          htmlAttributes: { lang: n },
          title: c,
          titleTemplate: "%s | " + s.siteMetadata.title,
          meta: [
            { name: "description", content: u },
            { property: "og:title", content: c },
            { property: "og:description", content: u },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: s.siteMetadata.author },
            { name: "twitter:title", content: c },
            { name: "twitter:description", content: u },
            { name: "msapplication-TileColor", content: "#f0db4f" },
            { name: "theme-color", content: "#ffffff" },
          ]
            .concat(
              i.length > 0 ? { name: "keywords", content: i.join(", ") } : []
            )
            .concat(r),
          link: [
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-touch-icon.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon-32x32.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon-16x16.png",
            },
            { rel: "manifest", href: "/site.webmanifest" },
            {
              rel: "mask-icon",
              href: "/safari-pinned-tab.svg",
              color: "#f0db4f",
            },
          ],
        });
      }
      (u.defaultProps = {
        lang: "ru",
        meta: [],
        keywords: [
          "frontend magazine",
          "фронденд",
          "javascript",
          "css",
          "переводы",
          "блог",
        ],
        description:
          "Образовательные материалы для Frontend инженеров.\nНовости, статьи, руководства, переводы и полезные инструменты.",
      }),
        (u.propTypes = {
          description: c.a.string,
          lang: c.a.string,
          meta: c.a.arrayOf(c.a.object),
          keywords: c.a.arrayOf(c.a.string),
          title: c.a.string.isRequired,
        }),
        (t.a = u);
    },
    165: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: "Frontend Magazine",
              description:
                "Новости, статьи и полезные материалы для фронтенд-инженеров.",
              author: "Eugene Dzhumak",
            },
          },
        },
      };
    },
    166: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(162),
        i = (n(160), n(159)),
        c = n.n(i),
        s = n(148),
        l = n.n(s),
        u = c.a.bind(l.a),
        d = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: u("container") }, t);
        },
        p = n(149),
        m = n.n(p),
        f = c.a.bind(m.a),
        h = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: f("content") }, t);
        },
        g = n(150),
        y = n.n(g),
        b = c.a.bind(y.a),
        v = function(e) {
          var t,
            n = e.location,
            a = e.title;
          return (
            (t =
              "/" === n.pathname
                ? r.a.createElement(
                    "h1",
                    null,
                    r.a.createElement(
                      o.a,
                      {
                        style: {
                          boxShadow: "none",
                          textDecoration: "none",
                          color: "inherit",
                        },
                        to: "/",
                      },
                      a
                    )
                  )
                : r.a.createElement(
                    "h3",
                    null,
                    r.a.createElement(
                      o.a,
                      {
                        style: {
                          boxShadow: "none",
                          textDecoration: "none",
                          color: "inherit",
                        },
                        to: "/",
                      },
                      a
                    )
                  )),
            r.a.createElement(
              "header",
              { className: b("header") },
              r.a.createElement(d, null, r.a.createElement(h, null, t))
            )
          );
        };
      t.a = function(e) {
        var t = e.children,
          n = e.location,
          o = e.title;
        return r.a.createElement(
          a.Fragment,
          null,
          r.a.createElement(v, { location: n, title: o }),
          r.a.createElement(
            d,
            null,
            r.a.createElement(h, null, r.a.createElement("main", null, t))
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-a8be44589171c0a98e24.js.map

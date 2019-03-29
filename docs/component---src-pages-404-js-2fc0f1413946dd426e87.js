(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    152: function(t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "pageQuery", function() {
          return u;
        });
      var a = n(7),
        o = n.n(a),
        r = n(0),
        i = n.n(r),
        s = n(159),
        c = n(160),
        l = (function(t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            o()(e, t),
            (e.prototype.render = function() {
              var t = this.props.data.site.siteMetadata.title;
              return i.a.createElement(
                s.a,
                { location: this.props.location, title: t },
                i.a.createElement(c.a, { title: "404: Not Found" }),
                i.a.createElement("h1", null, "Not Found"),
                i.a.createElement(
                  "p",
                  null,
                  "You just hit a route that doesn't exist... the sadness."
                )
              );
            }),
            e
          );
        })(i.a.Component);
      e.default = l;
      var u = "1097489062";
    },
    155: function(t, e, n) {
      var a;
      t.exports = ((a = n(158)) && a.default) || a;
    },
    156: function(t, e, n) {
      "use strict";
      var a = n(0),
        o = n.n(a),
        r = n(4),
        i = n.n(r),
        s = n(33),
        c = n.n(s);
      n.d(e, "a", function() {
        return c.a;
      });
      n(155), o.a.createContext({});
      i.a.object, i.a.string.isRequired, i.a.func, i.a.func;
    },
    157: function(t, e, n) {
      "use strict";
      n.d(e, "a", function() {
        return c;
      }),
        n.d(e, "b", function() {
          return l;
        });
      var a = n(162),
        o = n.n(a),
        r = n(163),
        i = n.n(r);
      (i.a.overrideThemeStyles = function() {
        return { "a.gatsby-resp-image-link": { boxShadow: "none" } };
      }),
        (i.a.googleFonts = [
          { name: "Roboto Condensed", styles: ["400"] },
          { name: "PT Sans", styles: ["400", "400i", "700"] },
        ]),
        (i.a.bodyFontFamily = ["PT Sans", "Roboto", "sans-serif"]),
        (i.a.headerFontFamily = ["Roboto Condensed", "Roboto", "sans-serif"]),
        (i.a.baseFontSize = "18px"),
        (i.a.scaleRatio = 1.75);
      var s = new o.a(i.a);
      var c = s.rhythm,
        l = s.scale;
    },
    158: function(t, e, n) {
      "use strict";
      n.r(e);
      n(34);
      var a = n(0),
        o = n.n(a),
        r = n(4),
        i = n.n(r),
        s = n(55),
        c = n(2),
        l = function(t) {
          var e = t.location,
            n = c.default.getResourcesForPathnameSync(e.pathname);
          return o.a.createElement(
            s.a,
            Object.assign({ location: e, pageResources: n }, n.json)
          );
        };
      (l.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (e.default = l);
    },
    159: function(t, e, n) {
      "use strict";
      n(34);
      var a = n(7),
        o = n.n(a),
        r = n(0),
        i = n.n(r),
        s = n(156),
        c = n(157),
        l = (function(t) {
          function e() {
            return t.apply(this, arguments) || this;
          }
          return (
            o()(e, t),
            (e.prototype.render = function() {
              var t,
                e = this.props,
                n = e.location,
                a = e.title,
                o = e.children;
              return (
                (t =
                  "/" === n.pathname
                    ? i.a.createElement(
                        "h1",
                        {
                          style: Object.assign({}, Object(c.b)(1.5), {
                            marginBottom: Object(c.a)(1.5),
                            marginTop: 0,
                          }),
                        },
                        i.a.createElement(
                          s.a,
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
                    : i.a.createElement(
                        "h3",
                        {
                          style: {
                            fontFamily: "Montserrat, sans-serif",
                            marginTop: 0,
                          },
                        },
                        i.a.createElement(
                          s.a,
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
                i.a.createElement(
                  "div",
                  {
                    style: {
                      marginLeft: "auto",
                      marginRight: "auto",
                      maxWidth: Object(c.a)(24),
                      padding: Object(c.a)(1.5) + " " + Object(c.a)(0.75),
                    },
                  },
                  i.a.createElement("header", null, t),
                  i.a.createElement("main", null, o)
                )
              );
            }),
            e
          );
        })(i.a.Component);
      e.a = l;
    },
    160: function(t, e, n) {
      "use strict";
      var a = n(161),
        o = n(0),
        r = n.n(o),
        i = n(4),
        s = n.n(i),
        c = n(164),
        l = n.n(c);
      function u(t) {
        var e = t.description,
          n = t.lang,
          o = t.meta,
          i = t.keywords,
          s = t.title,
          c = a.data.site,
          u = e || c.siteMetadata.description;
        return r.a.createElement(l.a, {
          htmlAttributes: { lang: n },
          title: s,
          titleTemplate: "%s | " + c.siteMetadata.title,
          meta: [
            { name: "description", content: u },
            { property: "og:title", content: s },
            { property: "og:description", content: u },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: c.siteMetadata.author },
            { name: "twitter:title", content: s },
            { name: "twitter:description", content: u },
            { name: "msapplication-TileColor", content: "#f0db4f" },
            { name: "theme-color", content: "#ffffff" },
          ]
            .concat(
              i.length > 0 ? { name: "keywords", content: i.join(", ") } : []
            )
            .concat(o),
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
          description: s.a.string,
          lang: s.a.string,
          meta: s.a.arrayOf(s.a.object),
          keywords: s.a.arrayOf(s.a.string),
          title: s.a.string.isRequired,
        }),
        (e.a = u);
    },
    161: function(t) {
      t.exports = {
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
  },
]);
//# sourceMappingURL=component---src-pages-404-js-2fc0f1413946dd426e87.js.map

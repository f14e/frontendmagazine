(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    153: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return m;
        });
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        s = n(156),
        c = n(159),
        l = n(160),
        p = n(165),
        u = n(157),
        f = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data,
                t = e.site.siteMetadata.title,
                n = e.allMarkdownRemark.edges;
              return i.a.createElement(
                c.a,
                { location: this.props.location, title: t },
                i.a.createElement(l.a, {
                  title: "Фронтенд разработка",
                  keywords: [
                    "блог",
                    "фронтенд",
                    "javascript",
                    "react",
                    "программирование",
                    "frontend",
                    "frontend magazine",
                  ],
                }),
                n.map(function(e) {
                  var t = e.node,
                    n = t.frontmatter.title || t.fields.slug;
                  return i.a.createElement(
                    "div",
                    { key: t.fields.slug },
                    i.a.createElement(
                      "h3",
                      { style: { marginBottom: Object(u.a)(0.25) } },
                      i.a.createElement(
                        s.a,
                        { style: { boxShadow: "none" }, to: t.fields.slug },
                        n
                      )
                    ),
                    i.a.createElement("small", null, t.frontmatter.date),
                    i.a.createElement("p", {
                      dangerouslySetInnerHTML: {
                        __html: t.frontmatter.description || t.excerpt,
                      },
                    })
                  );
                }),
                i.a.createElement(p.a, null)
              );
            }),
            t
          );
        })(i.a.Component);
      t.default = f;
      var m = "3630663541";
    },
    155: function(e, t, n) {
      var a;
      e.exports = ((a = n(158)) && a.default) || a;
    },
    156: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        s = n(33),
        c = n.n(s);
      n.d(t, "a", function() {
        return c.a;
      });
      n(155), r.a.createContext({});
      i.a.object, i.a.string.isRequired, i.a.func, i.a.func;
    },
    157: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return l;
        });
      var a = n(162),
        r = n.n(a),
        o = n(163),
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
        (i.a.baseFontSize = "18px"),
        (i.a.scaleRatio = 1.75);
      var s = new r.a(i.a);
      var c = s.rhythm,
        l = s.scale;
    },
    158: function(e, t, n) {
      "use strict";
      n.r(t);
      n(34);
      var a = n(0),
        r = n.n(a),
        o = n(4),
        i = n.n(o),
        s = n(55),
        c = n(2),
        l = function(e) {
          var t = e.location,
            n = c.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            s.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (l.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = l);
    },
    159: function(e, t, n) {
      "use strict";
      n(34);
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        s = n(156),
        c = n(157),
        l = (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e,
                t = this.props,
                n = t.location,
                a = t.title,
                r = t.children;
              return (
                (e =
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
                  i.a.createElement("header", null, e),
                  i.a.createElement("main", null, r)
                )
              );
            }),
            t
          );
        })(i.a.Component);
      t.a = l;
    },
    160: function(e, t, n) {
      "use strict";
      var a = n(161),
        r = n(0),
        o = n.n(r),
        i = n(4),
        s = n.n(i),
        c = n(164),
        l = n.n(c);
      function p(e) {
        var t = e.description,
          n = e.lang,
          r = e.meta,
          i = e.keywords,
          s = e.title,
          c = a.data.site,
          p = t || c.siteMetadata.description;
        return o.a.createElement(l.a, {
          htmlAttributes: { lang: n },
          title: s,
          titleTemplate: "%s | " + c.siteMetadata.title,
          meta: [
            { name: "description", content: p },
            { property: "og:title", content: s },
            { property: "og:description", content: p },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: c.siteMetadata.author },
            { name: "twitter:title", content: s },
            { name: "twitter:description", content: p },
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
      (p.defaultProps = {
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
        (p.propTypes = {
          description: s.a.string,
          lang: s.a.string,
          meta: s.a.arrayOf(s.a.object),
          keywords: s.a.arrayOf(s.a.string),
          title: s.a.string.isRequired,
        }),
        (t.a = p);
    },
    161: function(e) {
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
    165: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(166),
        i = n.n(o),
        s = n(148),
        c = n.n(s),
        l = i.a.bind(c.a);
      t.a = function() {
        return r.a.createElement(
          "footer",
          null,
          r.a.createElement(
            "div",
            { className: l("links") },
            r.a.createElement(
              "a",
              {
                href: "https://vk.com/frontendmagazine",
                target: "_blank",
                rel: "noreferrer noopener",
              },
              "Вконтакте"
            ),
            r.a.createElement(
              "a",
              {
                href: "https://t.me/frontendmagazine",
                target: "_blank",
                rel: "noreferrer noopener",
              },
              "Телеграм"
            ),
            r.a.createElement(
              "a",
              { href: "/rss.xml", title: "RSS Feed", target: "_blank" },
              "RSS"
            )
          )
        );
      };
    },
    166: function(e, t, n) {
      var a;
      !(function() {
        "use strict";
        var n = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var a = arguments[t];
            if (a) {
              var o = typeof a;
              if ("string" === o || "number" === o)
                e.push((this && this[a]) || a);
              else if (Array.isArray(a)) e.push(r.apply(this, a));
              else if ("object" === o)
                for (var i in a)
                  n.call(a, i) && a[i] && e.push((this && this[i]) || i);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (a = function() {
                return r;
              }.apply(t, [])) || (e.exports = a);
      })();
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-19b3ae7176cba5b9d8b6.js.map

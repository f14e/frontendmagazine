(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    150: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return f;
        });
      n(34);
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        s = n(156),
        l = n(159),
        c = n(160),
        p = n(165),
        m = n(157),
        u = (n(151),
        (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            r()(t, e),
            (t.prototype.render = function() {
              var e = this.props.data.markdownRemark,
                t = this.props.data.site.siteMetadata.title,
                n = this.props.pageContext,
                a = n.previous,
                r = n.next;
              return i.a.createElement(
                l.a,
                { location: this.props.location, title: t },
                i.a.createElement(c.a, {
                  title: e.frontmatter.title,
                  description: e.frontmatter.description || e.excerpt,
                }),
                i.a.createElement("h1", null, e.frontmatter.title),
                i.a.createElement(
                  "p",
                  {
                    style: Object.assign({}, Object(m.b)(-0.2), {
                      display: "block",
                      marginBottom: Object(m.a)(1),
                    }),
                  },
                  e.frontmatter.date,
                  " · ",
                  e.fields.readingTime.text
                ),
                i.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: e.html },
                }),
                i.a.createElement("hr", {
                  style: { marginBottom: Object(m.a)(1) },
                }),
                i.a.createElement(
                  "ul",
                  {
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      listStyle: "none",
                      padding: 0,
                    },
                  },
                  i.a.createElement(
                    "li",
                    null,
                    a &&
                      i.a.createElement(
                        s.a,
                        { to: a.fields.slug, rel: "prev" },
                        "← ",
                        a.frontmatter.title
                      )
                  ),
                  i.a.createElement(
                    "li",
                    null,
                    r &&
                      i.a.createElement(
                        s.a,
                        { to: r.fields.slug, rel: "next" },
                        r.frontmatter.title,
                        " →"
                      )
                  )
                ),
                i.a.createElement(p.a, null)
              );
            }),
            t
          );
        })(i.a.Component));
      t.default = u;
      var f = "1733700001";
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
        l = n.n(s);
      n.d(t, "a", function() {
        return l.a;
      });
      n(155), r.a.createContext({});
      i.a.object, i.a.string.isRequired, i.a.func, i.a.func;
    },
    157: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return l;
      }),
        n.d(t, "b", function() {
          return c;
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
      var l = s.rhythm,
        c = s.scale;
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
        l = n(2),
        c = function(e) {
          var t = e.location,
            n = l.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            s.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (c.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = c);
    },
    159: function(e, t, n) {
      "use strict";
      n(34);
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        s = n(156),
        l = n(157),
        c = (function(e) {
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
                          style: Object.assign({}, Object(l.b)(1.5), {
                            marginBottom: Object(l.a)(1.5),
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
                      maxWidth: Object(l.a)(24),
                      padding: Object(l.a)(1.5) + " " + Object(l.a)(0.75),
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
      t.a = c;
    },
    160: function(e, t, n) {
      "use strict";
      var a = n(161),
        r = n(0),
        o = n.n(r),
        i = n(4),
        s = n.n(i),
        l = n(164),
        c = n.n(l);
      function p(e) {
        var t = e.description,
          n = e.lang,
          r = e.meta,
          i = e.keywords,
          s = e.title,
          l = a.data.site,
          p = t || l.siteMetadata.description;
        return o.a.createElement(c.a, {
          htmlAttributes: { lang: n },
          title: s,
          titleTemplate: "%s | " + l.siteMetadata.title,
          meta: [
            { name: "description", content: p },
            { property: "og:title", content: s },
            { property: "og:description", content: p },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: l.siteMetadata.author },
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
        l = n.n(s),
        c = i.a.bind(l.a);
      t.a = function() {
        return r.a.createElement(
          "footer",
          null,
          r.a.createElement(
            "div",
            { className: c("links") },
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
//# sourceMappingURL=component---src-templates-blog-post-js-90b696941abef280224a.js.map

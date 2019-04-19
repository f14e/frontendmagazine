(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    153: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "pageQuery", function() {
          return p;
        });
      n(34);
      var a = n(7),
        r = n.n(a),
        o = n(0),
        i = n.n(o),
        l = n(162),
        c = n(166),
        s = n(164),
        m = n(170),
        u = n(160),
        d = (n(154),
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
                c.a,
                { location: this.props.location, title: t },
                i.a.createElement(s.a, {
                  title: e.frontmatter.title,
                  description: e.frontmatter.description || e.excerpt,
                }),
                i.a.createElement("h1", null, e.frontmatter.title),
                i.a.createElement(
                  "p",
                  {
                    style: Object.assign({}, Object(u.b)(-0.2), {
                      display: "block",
                      marginBottom: Object(u.a)(1),
                    }),
                  },
                  i.a.createElement("time", null, e.frontmatter.date),
                  " · ",
                  e.fields.readingTime.text
                ),
                i.a.createElement("div", {
                  dangerouslySetInnerHTML: { __html: e.html },
                }),
                i.a.createElement("hr", {
                  style: { marginBottom: Object(u.a)(1) },
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
                        l.a,
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
                        l.a,
                        { to: r.fields.slug, rel: "next" },
                        r.frontmatter.title,
                        " →"
                      )
                  )
                ),
                i.a.createElement(m.a, null)
              );
            }),
            t
          );
        })(i.a.Component));
      t.default = d;
      var p = "1733700001";
    },
    160: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return s;
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
      var l = new r.a(i.a);
      var c = l.rhythm,
        s = l.scale;
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
        l = n(33),
        c = n.n(l);
      n.d(t, "a", function() {
        return c.a;
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
        l = n(55),
        c = n(2),
        s = function(e) {
          var t = e.location,
            n = c.default.getResourcesForPathnameSync(t.pathname);
          return r.a.createElement(
            l.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          );
        };
      (s.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (t.default = s);
    },
    164: function(e, t, n) {
      "use strict";
      var a = n(165),
        r = n(0),
        o = n.n(r),
        i = n(4),
        l = n.n(i),
        c = n(169),
        s = n.n(c);
      function m(e) {
        var t = e.description,
          n = e.lang,
          r = e.meta,
          i = e.keywords,
          l = e.title,
          c = a.data.site,
          m = t || c.siteMetadata.description;
        return o.a.createElement(s.a, {
          htmlAttributes: { lang: n },
          title: l,
          titleTemplate: "%s | " + c.siteMetadata.title,
          meta: [
            { name: "description", content: m },
            { property: "og:title", content: l },
            { property: "og:description", content: m },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:creator", content: c.siteMetadata.author },
            { name: "twitter:title", content: l },
            { name: "twitter:description", content: m },
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
      (m.defaultProps = {
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
        (m.propTypes = {
          description: l.a.string,
          lang: l.a.string,
          meta: l.a.arrayOf(l.a.object),
          keywords: l.a.arrayOf(l.a.string),
          title: l.a.string.isRequired,
        }),
        (t.a = m);
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
        l = n.n(i),
        c = n(148),
        s = n.n(c),
        m = l.a.bind(s.a),
        u = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: m("container") }, t);
        },
        d = n(149),
        p = n.n(d),
        f = l.a.bind(p.a),
        h = function(e) {
          var t = e.children;
          return r.a.createElement("div", { className: f("content") }, t);
        },
        g = n(150),
        y = n.n(g),
        b = l.a.bind(y.a),
        E = function(e) {
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
              r.a.createElement(u, null, r.a.createElement(h, null, t))
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
          r.a.createElement(E, { location: n, title: o }),
          r.a.createElement(
            u,
            null,
            r.a.createElement(h, null, r.a.createElement("main", null, t))
          )
        );
      };
    },
    170: function(e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(159),
        i = n.n(o),
        l = n(151),
        c = n.n(l),
        s = i.a.bind(c.a);
      t.a = function() {
        return r.a.createElement(
          "footer",
          null,
          r.a.createElement(
            "div",
            { className: s("links") },
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
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-js-1881bcc41bcd91ca4f1a.js.map

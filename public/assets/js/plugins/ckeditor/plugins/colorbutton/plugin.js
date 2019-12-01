/*
 Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.plugins.add('colorbutton', {
  requires: 'panelbutton,floatpanel',
  lang: 'af,ar,az,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,es-mx,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,oc,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn',
  icons: 'bgcolor,textcolor',
  hidpi: !0,
  init: function (e) {
    function u (a, d, g, y, l) {
      var n = new CKEDITOR.style(m['colorButton_' + d + 'Style']); var q = CKEDITOR.tools.getNextId() + '_colorBox'; var k = { type: d }; var p; l = l ||
{}; e.ui.add(a, CKEDITOR.UI_PANELBUTTON, {
        label: g,
        title: g,
        modes: { wysiwyg: 1 },
        editorFocus: 0,
        toolbar: 'colors,' + y,
        allowedContent: n,
        requiredContent: n,
        contentTransformations: l.contentTransformations,
        panel: { css: CKEDITOR.skin.getPath('editor'), attributes: { role: 'listbox', 'aria-label': h.panelTitle } },
        onBlock: function (a, b) {
          p = b; b.autoSize = !0; b.element.addClass('cke_colorblock'); b.element.setHtml(z(a, d, q, k)); b.element.getDocument().getBody().setStyle('overflow', 'hidden'); CKEDITOR.ui.fire('ready', this); var c = b.keys
          var f = e.lang.dir == 'rtl'; c[f ? 37 : 39] = 'next'; c[40] = 'next'; c[9] = 'next'; c[f ? 39 : 37] = 'prev'; c[38] = 'prev'; c[CKEDITOR.SHIFT + 9] = 'prev'; c[32] = 'click'
        },
        refresh: function () { e.activeFilter.check(n) || this.setState(CKEDITOR.TRISTATE_DISABLED) },
        onOpen: function () {
          var a = e.getSelection(); var b = a && a.getStartElement(); var c = e.elementPath(b); if (c) {
            b = c.block || c.blockLimit || e.document.getBody(); do c = b && b.getComputedStyle(d == 'back' ? 'background-color' : 'color') || 'transparent'; while (d == 'back' && c == 'transparent' && b && (b = b.getParent()));c && c !=
'transparent' || (c = '#ffffff'); !1 !== m.colorButton_enableAutomatic && this._.panel._.iframe.getFrameDocument().getById(q).setStyle('background-color', c); if (b = a && a.getRanges()[0]) {
              for (var a = new CKEDITOR.dom.walker(b), f = b.collapsed ? b.startContainer : a.next(), b = ''; f;) { f.type !== CKEDITOR.NODE_ELEMENT && (f = f.getParent()); f = r(f.getComputedStyle(d == 'back' ? 'background-color' : 'color')); b = b || f; if (b !== f) { b = ''; break }f = a.next() }b == 'transparent' && (b = ''); d == 'fore' && (k.automaticTextColor = '#' + r(c)); k.selectionColor = b ? '#' + b : ''; a = b; b =
p._.getItems(); for (f = 0; f < b.count(); f++) { var g = b.getItem(f); g.removeAttribute('aria-selected'); a && a == r(g.getAttribute('data-value')) && g.setAttribute('aria-selected', !0) }
            } return c
          }
        }
      })
    } function z (a, d, g, r) {
      a = []; var l = m.colorButton_colors.split(','); var n = m.colorButton_colorsPerRow || 6; var q = e.plugins.colordialog && !1 !== m.colorButton_enableMore; var k = l.length + (q ? 2 : 1); var p = CKEDITOR.tools.addFunction(function (a, b) {
        function c (a) {
          var d = m['colorButton_' + b + 'Style']; e.removeStyle(new CKEDITOR.style(d, { color: 'inherit' })); d.childRule =
b == 'back' ? function (a) { return v(a) } : function (a) { return !(a.is('a') || a.getElementsByTag('a').count()) || v(a) }; e.focus(); a && e.applyStyle(new CKEDITOR.style(d, { color: a })); e.fire('saveSnapshot')
        }e.focus(); e.fire('saveSnapshot'); if (a == '?')e.getColorFromDialog(function (a) { if (a) return c(a) }, null, r); else return c(a && '#' + a)
      }); !1 !== m.colorButton_enableAutomatic && a.push('\x3ca class\x3d"cke_colorauto" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"', h.auto, '" draggable\x3d"false" ondragstart\x3d"return false;" onclick\x3d"CKEDITOR.tools.callFunction(',
        p, ",null,'", d, "');return false;\" href\x3d\"javascript:void('", h.auto, '\')" role\x3d"option" aria-posinset\x3d"1" aria-setsize\x3d"', k, '"\x3e\x3ctable role\x3d"presentation" cellspacing\x3d0 cellpadding\x3d0 width\x3d"100%"\x3e\x3ctr\x3e\x3ctd colspan\x3d"' + n + '" align\x3d"center"\x3e\x3cspan class\x3d"cke_colorbox" id\x3d"', g, '"\x3e\x3c/span\x3e', h.auto, '\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/a\x3e'); a.push('\x3ctable role\x3d"presentation" cellspacing\x3d0 cellpadding\x3d0 width\x3d"100%"\x3e')
      for (g = 0; g < l.length; g++) {
        g % n === 0 && a.push('\x3c/tr\x3e\x3ctr\x3e'); var t = l[g].split('/'); var b = t[0]; var c = t[1] || b; a.push('\x3ctd\x3e\x3ca class\x3d"cke_colorbox" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"', t[1] ? b : e.lang.colorbutton.colors[c] || c, '" draggable\x3d"false" ondragstart\x3d"return false;" onclick\x3d"CKEDITOR.tools.callFunction(', p, ",'", c, "','", d, "'); return false;\" href\x3d\"javascript:void('", c, '\')" data-value\x3d"' + c + '" role\x3d"option" aria-posinset\x3d"', g + 2, '" aria-setsize\x3d"', k, '"\x3e\x3cspan class\x3d"cke_colorbox" style\x3d"background-color:#',
          c, '"\x3e\x3c/span\x3e\x3c/a\x3e\x3c/td\x3e')
      }q && a.push('\x3c/tr\x3e\x3ctr\x3e\x3ctd colspan\x3d"' + n + '" align\x3d"center"\x3e\x3ca class\x3d"cke_colormore" _cke_focus\x3d1 hidefocus\x3dtrue title\x3d"', h.more, '" draggable\x3d"false" ondragstart\x3d"return false;" onclick\x3d"CKEDITOR.tools.callFunction(', p, ",'?','", d, "');return false;\" href\x3d\"javascript:void('", h.more, "')\"", ' role\x3d"option" aria-posinset\x3d"', k, '" aria-setsize\x3d"', k, '"\x3e', h.more, '\x3c/a\x3e\x3c/td\x3e'); a.push('\x3c/tr\x3e\x3c/table\x3e')
      return a.join('')
    } function v (a) { return a.getAttribute('contentEditable') == 'false' || a.getAttribute('data-nostyle') } function r (a) { return CKEDITOR.tools.normalizeHex('#' + CKEDITOR.tools.convertRgbToHex(a || '')).replace(/#/g, '') } var m = e.config; var h = e.lang.colorbutton; if (!CKEDITOR.env.hc) {
      u('TextColor', 'fore', h.textColorTitle, 10, {
        contentTransformations: [[{
          element: 'font',
          check: 'span{color}',
          left: function (a) { return !!a.attributes.color },
          right: function (a) {
            a.name = 'span'; a.attributes.color && (a.styles.color = a.attributes.color)
            delete a.attributes.color
          }
        }]]
      }); var w = {}; var x = e.config.colorButton_normalizeBackground; if (void 0 === x || x) {
        w.contentTransformations = [[{
          element: 'span',
          left: function (a) { var d = CKEDITOR.tools; if (a.name != 'span' || !a.styles || !a.styles.background) return !1; a = d.style.parse.background(a.styles.background); return a.color && d.object.keys(a).length === 1 },
          right: function (a) {
            var d = (new CKEDITOR.style(e.config.colorButton_backStyle, { color: a.styles.background })).getDefinition(); a.name = d.element; a.styles = d.styles; a.attributes =
d.attributes || {}; return a
          }
        }]]
      }u('BGColor', 'back', h.bgColorTitle, 20, w)
    }
  }
}); CKEDITOR.config.colorButton_colors = '1ABC9C,2ECC71,3498DB,9B59B6,4E5F70,F1C40F,16A085,27AE60,2980B9,8E44AD,2C3E50,F39C12,E67E22,E74C3C,ECF0F1,95A5A6,DDD,FFF,D35400,C0392B,BDC3C7,7F8C8D,999,000'; CKEDITOR.config.colorButton_foreStyle = { element: 'span', styles: { color: '#(color)' }, overrides: [{ element: 'font', attributes: { color: null } }] }; CKEDITOR.config.colorButton_backStyle = { element: 'span', styles: { 'background-color': '#(color)' } }

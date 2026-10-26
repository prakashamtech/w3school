// Tiny dependency-free syntax highlighter returning HTML strings.
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const wrap = (cls, s) => `<span class="tk-${cls}">${esc(s)}</span>`

const KW = {
  js: 'const|let|var|function|return|if|else|for|while|new|this|class|import|export|from|true|false|null|undefined|of|in|typeof|async|await',
  python: 'def|return|if|elif|else|for|while|in|import|from|class|True|False|None|and|or|not|print|range|len',
  sql: 'SELECT|FROM|WHERE|ORDER|BY|INSERT|INTO|VALUES|UPDATE|SET|DELETE|INNER|LEFT|RIGHT|JOIN|ON|AND|OR|DESC|ASC|GROUP|CREATE|TABLE|AS|LIKE|DISTINCT',
  c: 'int|return|include|using|namespace|class|public|static|void|string|String|new|if|else|for|while|private|echo|function|true|false|const|let',
  bash: 'git|init|add|commit|branch|checkout|push|pull|clone|merge',
}

function tokenize(code, kw, ci) {
  const re = new RegExp(
    String.raw`(\/\*[\s\S]*?\*\/|\/\/[^\n]*|#(?!include)[^\n]*|--[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\x60[^\x60]*\x60)|\b(\d+(?:\.\d+)?)\b|\b(${kw})\b|([A-Za-z_$][\w$]*)(?=\s*\()`,
    ci ? 'gi' : 'g')
  let out = '', last = 0, m
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index))
    out += m[1] ? wrap('com', m[0]) : m[2] ? wrap('str', m[0]) : m[3] ? wrap('num', m[0]) : m[4] ? wrap('kw', m[0]) : wrap('fn', m[0])
    last = re.lastIndex
  }
  return out + esc(code.slice(last))
}

function css(code) {
  return code.replace(/([^{}]+)(\{)([^}]*)(\})/g, '\u0000$1\u0001$3\u0002').split(/(\u0000[^\u0001]*\u0001[^\u0002]*\u0002)/).map((part) => {
    const m = part.match(/^\u0000([^\u0001]*)\u0001([^\u0002]*)\u0002$/)
    if (!m) return esc(part)
    const body = m[2].replace(/([\w-]+)(\s*:\s*)([^;]+)(;?)/g, '\u0003$1\u0004$2\u0005$3\u0006$4')
    const b = esc(body).replace(/\u0003(.*?)\u0004/g, '<span class="tk-prop">$1</span>').replace(/\u0005(.*?)\u0006/g, '<span class="tk-val">$1</span>')
    return `<span class="tk-sel">${esc(m[1])}</span>{${b}}`
  }).join('')
}

function html(code) {
  let out = ''
  const re = /(<!--[\s\S]*?-->)|(<style[^>]*>)([\s\S]*?)(<\/style>)|(<script[^>]*>)([\s\S]*?)(<\/script>)|(<\/?[!\w-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)(\s*\/?>)/g
  let last = 0, m
  const tag = (open, attrs, close) =>
    wrap('tag', open) + attrs.replace(/([\w:-]+)(\s*=\s*)?("[^"]*"|'[^']*'|[^\s>]+)?/g, (a, n, eq, v) =>
      wrap('attr', n) + (eq ? esc(eq) : '') + (v ? wrap('str', v) : '')) + wrap('tag', close)
  while ((m = re.exec(code))) {
    out += esc(code.slice(last, m.index))
    if (m[1]) out += wrap('com', m[1])
    else if (m[2]) out += wrap('tag', m[2]) + css(m[3]) + wrap('tag', m[4])
    else if (m[5]) out += wrap('tag', m[5]) + tokenize(m[6], KW.js) + wrap('tag', m[7])
    else out += tag(m[8], m[9], m[10])
    last = re.lastIndex
  }
  return out + esc(code.slice(last))
}

export function highlight(code, lang) {
  switch (lang) {
    case 'html': return html(code)
    case 'jsx': case 'javascript': case 'js': return tokenize(code, KW.js)
    case 'python': return tokenize(code, KW.python)
    case 'sql': return tokenize(code, KW.sql, true)
    case 'bash': return tokenize(code, KW.bash)
    default: return tokenize(code, KW.c)
  }
}

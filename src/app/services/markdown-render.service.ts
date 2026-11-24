import { Injectable } from '@angular/core';
import { Marked, Renderer, Tokens } from 'marked';
import katex from 'katex';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import rLang from 'highlight.js/lib/languages/r';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import yaml from 'highlight.js/lib/languages/yaml';
import sql from 'highlight.js/lib/languages/sql';
import latex from 'highlight.js/lib/languages/latex';
import markdown from 'highlight.js/lib/languages/markdown';
import kotlin from 'highlight.js/lib/languages/kotlin';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import diff from 'highlight.js/lib/languages/diff';
import plaintext from 'highlight.js/lib/languages/plaintext';

hljs.registerLanguage('python', python);
hljs.registerLanguage('r', rLang);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('latex', latex);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('kotlin', kotlin);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('plaintext', plaintext);

const LANG_ALIASES: Record<string, string> = {
  py: 'python',
  python3: 'python',
  sh: 'bash',
  shell: 'bash',
  zsh: 'bash',
  console: 'bash',
  ts: 'typescript',
  js: 'javascript',
  tex: 'latex',
  yml: 'yaml',
  kt: 'kotlin',
  html: 'xml',
  svg: 'xml',
  md: 'markdown',
  text: 'plaintext',
  txt: 'plaintext',
};

interface RepoContext {
  rawDir: string;
  rawRoot: string;
  blobDir: string;
  blobRoot: string;
}

const BADGE_PATTERNS = [
  /img\.shields\.io/i,
  /shields\.io/i,
  /badgen\.net/i,
  /badge\.fury\.io/i,
  /codecov\.io/i,
  /coveralls\.io/i,
  /\/badge\.svg/i,
  /\/actions\/workflows\//i,
];

const GITHUB_BLOB_RE =
  /^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/blob\/([^?#]+)(?:\?[^#]*)?(?:#.*)?$/i;

const GITHUB_RAW_RE =
  /^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/(?:refs\/heads\/)?([^/]+)\/(.*)$/i;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function parseRepoContext(sourceUrl?: string): RepoContext | null {
  if (!sourceUrl) return null;
  const match = sourceUrl.match(GITHUB_RAW_RE);
  if (!match) return null;

  const [, owner, repo, branch, filePath] = match;
  const lastSlash = filePath.lastIndexOf('/');
  const dirPath = lastSlash >= 0 ? filePath.slice(0, lastSlash + 1) : '';
  const rawRoot = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/`;
  const blobRoot = `https://github.com/${owner}/${repo}/blob/${branch}/`;

  return {
    rawDir: `${rawRoot}${dirPath}`,
    rawRoot,
    blobDir: `${blobRoot}${dirPath}`,
    blobRoot,
  };
}

function isBadgeUrl(url: string): boolean {
  return BADGE_PATTERNS.some((re) => re.test(url));
}

function resolveImageUrl(href: string, ctx: RepoContext | null): string {
  const trimmed = href.trim();
  if (!trimmed) return '';

  const blobMatch = trimmed.match(GITHUB_BLOB_RE);
  if (blobMatch) {
    const [, owner, repo, rest] = blobMatch;
    return `https://raw.githubusercontent.com/${owner}/${repo}/${rest}`;
  }

  if (/^(?:https?:|data:|\/\/)/i.test(trimmed)) {
    return trimmed;
  }

  if (!ctx) return trimmed;

  if (trimmed.startsWith('/')) {
    return `${ctx.rawRoot}${trimmed.replace(/^\/+/, '')}`;
  }

  try {
    return new URL(trimmed, ctx.rawDir).toString();
  } catch {
    return trimmed;
  }
}

function resolveLinkUrl(href: string, ctx: RepoContext | null): string {
  const trimmed = href.trim();
  if (
    !trimmed ||
    trimmed.startsWith('#') ||
    /^(?:https?:|mailto:|tel:|\/\/)/i.test(trimmed)
  ) {
    return trimmed;
  }

  if (!ctx) return trimmed;

  if (trimmed.startsWith('/')) {
    return `${ctx.blobRoot}${trimmed.replace(/^\/+/, '')}`;
  }

  try {
    return new URL(trimmed, ctx.blobDir).toString();
  } catch {
    return trimmed;
  }
}

function rewriteRawHtmlImages(html: string, ctx: RepoContext | null): string {
  return html.replace(/<img\b([^>]*?)>/gi, (_full, attrs: string) => {
    const srcMatch = attrs.match(/\bsrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    if (!srcMatch) return _full;

    const originalSrc = srcMatch[1] ?? srcMatch[2] ?? srcMatch[3] ?? '';
    const resolvedSrc = resolveImageUrl(originalSrc, ctx);
    const altMatch = attrs.match(/\balt\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
    const alt = altMatch ? (altMatch[1] ?? altMatch[2] ?? '') : '';
    const widthMatch = attrs.match(/\bwidth\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
    const widthAttr = widthMatch
      ? ` style="max-width: ${escapeHtml(widthMatch[1] ?? widthMatch[2] ?? widthMatch[3] ?? '')}px"`
      : '';

    if (isBadgeUrl(resolvedSrc)) {
      return `<img class="md-badge" src="${escapeHtml(resolvedSrc)}" alt="${escapeHtml(alt)}" loading="lazy" />`;
    }

    return `<img class="md-img" src="${escapeHtml(resolvedSrc)}" alt="${escapeHtml(alt)}" loading="lazy" data-zoom-src="${escapeHtml(resolvedSrc)}"${widthAttr} />`;
  });
}

function renderKatex(tex: string, displayMode: boolean): string {
  const cleaned = tex.trim();
  if (!cleaned) return '';

  try {
    const html = katex.renderToString(cleaned, {
      displayMode,
      throwOnError: false,
      strict: 'ignore',
      output: 'html',
      trust: false,
    });
    return displayMode
      ? `<div class="md-math-block">${html}</div>`
      : `<span class="md-math-inline">${html}</span>`;
  } catch {
    return `<code>${escapeHtml(cleaned)}</code>`;
  }
}

function extractMathAndProtectCode(rawMarkdown: string): {
  processed: string;
  mathHtml: string[];
} {
  const normalized = rawMarkdown.replace(/\r\n/g, '\n');
  const codeSlots: string[] = [];
  const mathHtml: string[] = [];

  // 1. Temporarily protect fenced code blocks so $ inside code is never parsed as math
  let text = normalized.replace(
    /(^|\n)([ \t]{0,3})(`{3,}|~{3,})[^\n]*\n[\s\S]*?(?:\n\2\3[ \t]*(?=\n|$)|$)/g,
    (match) => {
      const idx = codeSlots.length;
      codeSlots.push(match);
      return `MDPROTECTCODE${idx}END`;
    }
  );

  // 2. Temporarily protect inline code spans
  text = text.replace(/(`+)([^\n`]|`(?!\1))*?\1/g, (match) => {
    const idx = codeSlots.length;
    codeSlots.push(match);
    return `MDPROTECTCODE${idx}END`;
  });

  const pushMath = (expr: string, displayMode: boolean): string => {
    const idx = mathHtml.length;
    mathHtml.push(renderKatex(expr, displayMode));
    return displayMode
      ? `\n\nMDPROTECTMATH${idx}END\n\n`
      : `MDPROTECTMATH${idx}END`;
  };

  // 3. Block math: $$ ... $$
  text = text.replace(/(^|[^\\])\$\$([\s\S]+?)\$\$/g, (_m, lead: string, expr: string) => {
    return `${lead}${pushMath(expr, true)}`;
  });

  // 4. Block math: \[ ... \]
  text = text.replace(/\\\[([\s\S]+?)\\\]/g, (_m, expr: string) => {
    return pushMath(expr, true);
  });

  // 5. Inline math: \( ... \)
  text = text.replace(/\\\(([^\n]+?)\\\)/g, (_m, expr: string) => {
    return pushMath(expr, false);
  });

  // 6. Inline math: $ ... $ (ignores escaped \$, spaces around delimiters, and currency like $100)
  text = text.replace(
    /(^|[^\\$])\$(?!\s)((?:\\\$|[^$\n])+?)(?<!\s)\$(?!\d)/g,
    (_m, lead: string, expr: string) => {
      return `${lead}${pushMath(expr, false)}`;
    }
  );

  // 7. Restore code blocks/spans so marked parses & syntax-highlights them normally
  text = text.replace(/MDPROTECTCODE(\d+)END/g, (_m, idx: string) => {
    return codeSlots[Number(idx)] ?? '';
  });

  return { processed: text, mathHtml };
}

@Injectable({ providedIn: 'root' })
export class MarkdownRenderService {
  render(markdownSource: string, sourceUrl?: string): string {
    if (!markdownSource?.trim()) return '';

    const repoCtx = parseRepoContext(sourceUrl);
    const { processed, mathHtml } = extractMathAndProtectCode(markdownSource);

    const renderer = new Renderer();

    renderer.heading = function (this: Renderer, { tokens, depth }: Tokens.Heading): string {
      const inner = this.parser.parseInline(tokens);
      const id = slugify(inner);
      const idAttr = id ? ` id="${escapeHtml(id)}"` : '';
      return `<h${depth}${idAttr}>${inner}</h${depth}>\n`;
    };

    renderer.code = function ({ text, lang }: Tokens.Code): string {
      const rawLang = (lang ?? '').trim().split(/\s+/)[0].toLowerCase();
      const normalizedLang = LANG_ALIASES[rawLang] ?? rawLang;
      let highlighted: string;

      if (normalizedLang && hljs.getLanguage(normalizedLang)) {
        highlighted = hljs.highlight(text, {
          language: normalizedLang,
          ignoreIllegals: true,
        }).value;
      } else {
        highlighted = escapeHtml(text);
      }

      const displayLang = rawLang || 'text';
      return (
        `<div class="md-code-block">` +
        `<div class="md-code-block__header">` +
        `<span class="md-code-block__lang">${escapeHtml(displayLang)}</span>` +
        `<button type="button" class="md-code-block__copy" data-copy-code="true">Copy</button>` +
        `</div>` +
        `<pre><code class="hljs language-${escapeHtml(displayLang)}">${highlighted}</code></pre>` +
        `</div>\n`
      );
    };

    renderer.table = function (this: Renderer, token: Tokens.Table): string {
      const tableHtml = Renderer.prototype.table.call(this, token);
      return `<div class="md-table-wrap">${tableHtml}</div>\n`;
    };

    renderer.image = function ({ href, title, text }: Tokens.Image): string {
      const resolvedSrc = resolveImageUrl(href ?? '', repoCtx);
      if (!resolvedSrc) return '';

      const altAttr = escapeHtml(text ?? '');
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';

      if (isBadgeUrl(resolvedSrc)) {
        return `<img class="md-badge" src="${escapeHtml(resolvedSrc)}" alt="${altAttr}"${titleAttr} loading="lazy" />`;
      }

      return `<img class="md-img" src="${escapeHtml(resolvedSrc)}" alt="${altAttr}"${titleAttr} loading="lazy" data-zoom-src="${escapeHtml(resolvedSrc)}" />`;
    };

    renderer.link = function (this: Renderer, { href, title, tokens }: Tokens.Link): string {
      const inner = this.parser.parseInline(tokens);
      const resolvedHref = resolveLinkUrl(href ?? '', repoCtx);
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : '';
      const isHash = resolvedHref.startsWith('#');
      const targetAttr = isHash ? '' : ' target="_blank" rel="noopener noreferrer"';
      return `<a href="${escapeHtml(resolvedHref)}"${titleAttr}${targetAttr}>${inner}</a>`;
    };

    renderer.blockquote = function (this: Renderer, { tokens }: Tokens.Blockquote): string {
      const body = this.parser.parse(tokens);
      const alertMatch = body.match(
        /^\s*<p>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*(?:<br\s*\/?>|\n)?([\s\S]*?)<\/p>([\s\S]*)$/i
      );

      if (alertMatch) {
        const kind = alertMatch[1].toLowerCase();
        const label = alertMatch[1].charAt(0).toUpperCase() + alertMatch[1].slice(1).toLowerCase();
        const firstPara = alertMatch[2].trim();
        const rest = alertMatch[3] ?? '';
        const contentHtml = `${firstPara ? `<p>${firstPara}</p>` : ''}${rest}`;
        return (
          `<div class="md-alert md-alert--${kind}">` +
          `<div class="md-alert__title">${label}</div>` +
          `${contentHtml}` +
          `</div>\n`
        );
      }

      return `<blockquote>\n${body}</blockquote>\n`;
    };

    renderer.html = function ({ text }: Tokens.HTML | Tokens.Tag): string {
      return rewriteRawHtmlImages(text, repoCtx);
    };

    const markedInstance = new Marked({
      gfm: true,
      breaks: false,
      renderer,
    });

    let html = markedInstance.parse(processed) as string;

    // Restore KaTeX HTML blocks/spans cleanly (unwrap redundant <p> around block math)
    html = html.replace(
      /<p>\s*MDPROTECTMATH(\d+)END\s*<\/p>/g,
      (_m, idx: string) => mathHtml[Number(idx)] ?? ''
    );
    html = html.replace(
      /MDPROTECTMATH(\d+)END/g,
      (_m, idx: string) => mathHtml[Number(idx)] ?? ''
    );

    if (typeof window === 'undefined') {
      return html;
    }

    return DOMPurify.sanitize(html, {
      USE_PROFILES: { html: true, svg: true, svgFilters: true },
      ADD_TAGS: ['button'],
      ADD_ATTR: [
        'target',
        'rel',
        'loading',
        'align',
        'aria-hidden',
        'style',
        'data-copy-code',
        'data-zoom-src',
        'type',
      ],
    });
  }
}

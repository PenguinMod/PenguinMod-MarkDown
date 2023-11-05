import { merge, escape } from './utils'
import defaultOptions from './defaults'
import Parser from './parser'
import Lexer from './lexer'
import Renderer from './renderer'
import InlineLexer from './inline-lexer'

export {Parser, Lexer, Renderer, InlineLexer}
export function render(src, opt) {
  if (opt) opt = merge({}, defaultOptions, opt)
  return Parser.parse(Lexer.lex(src, opt), opt)
}

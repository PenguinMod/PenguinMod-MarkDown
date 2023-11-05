import { merge, escape } from './utils'
import defaultOptions from './defaults'
import Parser from './parser'
import Lexer from './lexer'
import Renderer from './renderer'
import InlineLexer from './inline-lexer'

export {Parser, Lexer, Renderer, InlineLexer}
export function render(src, opt) {
  try {
    if (opt) opt = merge({}, defaultOptions, opt)
    return Parser.parse(Lexer.lex(src, opt), opt)
  } catch (err) {
    err.message += '\nPlease report this to https://github.com/PenguinMod/penguinmod.github.io'
    console.error(err)
  }
}

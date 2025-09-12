; extends

(variable_declaration
  "local" @keyword
  (#set! conceal "∴"))
(function_declaration
  "local" @keyword
  (#set! conceal "∴"))

(function_definition
  "function" @keyword.function
  (#set! conceal "󰘧"))
(function_definition
  "end" @keyword.function
  (#set! conceal "∎"))
(function_declaration
  "function" @keyword.function
  (#set! conceal "λ"))

(("not" @keyword.operator) (#set! conceal "¬"))
("or" @keyword.operator (#set! conceal "∨"))
("and" @keyword.operator (#set! conceal "∧"))
("in" @keyword.operator (#set! conceal "∈"))
("not" @keyword.operator (#eq? @keyword.operator "in") (#set! conceal "∉"))

(for_statement "for" @keyword.repeat
 (#set! conceal "∀"))
(for_statement "do" @keyword.repeat
 (#set! conceal ":"))

(if_statement "then" @keyword.conditional
              (#set! conceal ""))
(elseif_statement "then" @keyword.conditional
              (#set! conceal ""))

((nil) @constant.builtin (#set! conceal "∅"))

((identifier) @variable
              (#eq? @variable "vim")
              (#set! conceal ""))

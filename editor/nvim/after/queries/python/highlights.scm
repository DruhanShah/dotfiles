; extends


(("not" @keyword.operator) (#set! conceal "¬"))
("or" @keyword.operator (#set! conceal "∨"))
("and" @keyword.operator (#set! conceal "∧"))
("in" @keyword.operator (#set! conceal "∈"))
("not" @keyword.operator (#eq? @keyword.operator "in") (#set! conceal "∉"))

((call function: (identifier) @function.builtin)
 (#eq? @function.builtin "sum")
 (#set! conceal "∑"))

(for_statement "for" @keyword.repeat
 (#set! conceal "∀"))

(for_in_clause "for" @keyword.repeat
 (#set! conceal "∀"))

((call function: (identifier) @function.builtin)
 (#eq? @function.builtin "any")
 (#set! conceal "∃"))

((call function: (identifier) @function.builtin)
 (#eq? @function.builtin "len")
 (#set! conceal "#"))

((call function: (identifier) @function.builtin)
 (#eq? @function.builtin "int")
 (#set! conceal "ℤ"))

((call function: (identifier) @function.builtin)
 (#eq? @function.builtin "float")
 (#set! conceal "ℝ"))

((call function: (attribute) @method)
 (#eq? @method "math\.sqrt")
 (#set! conceal "√"))

("lambda" @keyword.function (#set! conceal "λ"))

(((attribute) @constant)
 (#eq? @constant "math\.pi")
 (#set! conceal "π"))

((none) @constant.builtin (#set! conceal "∅"))

; Main types
((type (identifier) @type) (#eq? @type "int") (#set! conceal "ℤ"))
((type (identifier) @type) (#eq? @type "float") (#set! conceal "ℝ"))

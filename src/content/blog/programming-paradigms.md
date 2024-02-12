---
layout: ../../layouts/BlogPostLayout.astro
title: 'Programming Paradigms'
description: 'A way to classify programming languages based on their features. Programming languages can be classified into multiple paradigms at the same time.'
pubDate: 2023-10-3
category: 'programming-languages'
source:
  title: 'Wikipedia'
  url: 'https://en.wikipedia.org/wiki/Programming_paradigm'
tags:
  - programming-languages
  - paradigms
  - imperative-programming
  - object-oriented
  - functional
  - logic
  - assignment-statement
  - conditional-statement
---

<a href="https://en.wikipedia.org/wiki/Programming_paradigm" target="_blank">Programming paradigms</a> are a way to classify programming languages based on their features. Programming languages can exist in multiple paradigms at the same time. Languages can support multiple paradigms.

- <a href="https://en.wikipedia.org/wiki/Comparison_of_programming_paradigms" target="_blank">Comparison of programming paradigms</a> 

## Imperative programming

<a href="https://en.wikipedia.org/wiki/Imperative_programming" target="_blank">Imperative programming</a> is a programming paradigm that uses statements that change a program's state. In much the same way that the imperative mood in natural languages expresses commands, an imperative program consists of commands for the computer to perform.

**Patterns observed**: `assignment statements`, `conditional statements`, `loops`, `procedural abstraction`, `exception handling`, `input/output operations`

**Use cases**: Explicit steps to solve a problem.

**Languages examples**: <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>, <a href="https://en.wikipedia.org/wiki/Fortran" target="_blank">Fortran</a>, <a href="https://en.wikipedia.org/wiki/Pascal_(programming_language)" target="_blank">Pascal</a>, <a href="https://en.wikipedia.org/wiki/BASIC" target="_blank">BASIC</a>, <a href="https://en.wikipedia.org/wiki/COBOL" target="_blank">COBOL</a>, <a href="https://en.wikipedia.org/wiki/Ada_(programming_language)" target="_blank">Ada</a>

---
## Object-Oriented Programming (OOP)

Object-oriented programming is based on the concept of "objects", which contain data fields (attributes) and code as procedures (methods).

>Data types can be objects in object-oriented programming. For example, in Ruby, a integer `1` is an object of the `Integer` class, which inherits `Numeric` [Data Type](https://en.wikipedia.org/wiki/Data_type)

**Key concepts:**

- `Data encapsulation` (primitive obsession pattern is a bad smell)
- `Polymorphism` (subtyping, parametric polymorphism, ad-hoc polymorphism)
- `Inheritance` (is-a, has-a)
- `Abstraction` (interface segregation, dependency inversion)
- `Modularity` (single responsibility, open/closed, <a href="https://en.wikipedia.org/wiki/Liskov_substitution_principle" target="_blank">liskov substitution</a>, interface segregation, dependency inversion)

**Use cases**: General purpose.

**Languages examples**: 
<a href="https://en.wikipedia.org/wiki/Java_(programming_language)" target="_blank">Java</a>
, <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank">C++</a>
, <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" target="_blank">C#</a>
, <a href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">Python</a>
, <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)" target="_blank">Ruby</a>
, <a href="https://en.wikipedia.org/wiki/Smalltalk_(programming_language)" target="_blank">Smalltalk</a>

---
## Functional programming (Declarative programming)

<a href="https://en.wikipedia.org/wiki/Functional_programming" target="_blank">Functional programming</a> involves constructing programs by composing functions. It's declarative, meaning programming is done with expressions or declarations instead of statements. Functional programs model solutions from the resolution of functional expressions.

**Use cases**: AI.

**Languages examples**:
<a href="https://en.wikipedia.org/wiki/Haskell_(programming_language)" target="_blank">Haskell</a>
, <a href="https://en.wikipedia.org/wiki/Erlang_(programming_language)" target="_blank">Erlang</a>
, <a href="https://en.wikipedia.org/wiki/Scheme_(programming_language)" target="_blank">Scheme</a>
, <a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)" target="_blank">Lisp (Lisp family)</a>
, <a href="https://en.wikipedia.org/wiki/Racket_(programming_language)" target="_blank">Racket</a>

---
## Logic programming (Declarative programming)

<a href="https://en.wikipedia.org/wiki/Logic_programming" target="_blank">Logic programming</a> expresses computation using logic formulas, where program logic is defined by a set of facts and rules. These facts and rules are used to derive new facts and rules, which can be employed to solve problems.

**Use cases**: AI.

**Languages examples**:
<a href="https://en.wikipedia.org/wiki/Prolog_(programming_language)" target="_blank">Prolog</a>
, <a href="https://en.wikipedia.org/wiki/Datalog_(programming_language)" target="_blank">Datalog</a>

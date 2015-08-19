  Funcionalidade: componente de grid para formulários
  Para fazer com que os forms fiquem alinhados em grid
  Eu, como programador
  Desejo utilizar o componente h5-grid

  Cenário: Renderização do h5-grid no desktop - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar no desktop o [caso]
  Então validar [spec]
  
  Exemplos:
    caso    | estado                                                          | spec
    ----------------------------------------------------------------------------------------------------------------------------------------------
    desktop | campo: {labelText:'Nome', value:'', hintText:'Digite seu nome'} | container:
            |                                                                 |    contains: form
            |                                                                 | form:
            |                                                                 |    inside: container
            |                                                                 |    contains: row-1, row-2, row-3, row-4,row-5, row-6
            |                                                                 | row-1:
            |                                                                 |    inside: form
            |                                                                 |    contains: c1
            |                                                                 |    aligned vertically: row-2
            |                                                                 | c1:
            |                                                                 |    inside: row-1
            |                                                                 |    above: c2
            |                                                                 | row-2:
            |                                                                 |    inside: form
            |                                                                 |    contains: c2, c3
            |                                                                 |    aligned vertically: row-3
            |                                                                 | c2:
            |                                                                 |    inside: row-2
            |                                                                 |    below: c1
            |                                                                 |    left of: c3
            |                                                                 |    aligned horizontally: c3
            |                                                                 |    above: row-3
            |                                                                 | c3:
            |                                                                 |    inside: row-2
            |                                                                 |    below: c1
            |                                                                 |    right of: c2
            |                                                                 |    aligned horizontally: c2
            |                                                                 |    above: c4
            |                                                                 | row-3:
            |                                                                 |    inside: form
            |                                                                 |    contains: c4, c5
            |                                                                 |    contains partly: c6
            |                                                                 |    above: row-4
            |                                                                 |    below: row-2
            |                                                                 |    aligned vertically: row-2
            |                                                                 | c4:
            |                                                                 |    inside: row-3
            |                                                                 |    below: c2
            |                                                                 |    left of: c5
            |                                                                 |    aligned horizontally: c5
            |                                                                 |    above: c7
            |                                                                 | c5:
            |                                                                 |    inside partly: row-3
            |                                                                 |    below: row-2
            |                                                                 |    right of: c4
            |                                                                 |    left of: c6
            |                                                                 |    aligned horizontally: c6
            |                                                                 |    above: c10
            |                                                                 | c6:
            |                                                                 |    inside partly: row-3
            |                                                                 |    below: c3
            |                                                                 |    right of: c5
            |                                                                 |    aligned horizontally: c5
            |                                                                 |    above: c7
            |                                                                 | row-4:
            |                                                                 |    inside: form
            |                                                                 |    contains: c7, c8, c9, c10, c11
            |                                                                 |    above: row-5
            |                                                                 |    below: row-3
            |                                                                 |    aligned vertically: row-5
            |                                                                 | row-5:
            |                                                                 |    inside: form
            |                                                                 |    contains: c12, c13, c14, c15, c16, c17
            |                                                                 |    above: row-6
            |                                                                 |    below: row-4
            |                                                                 |    aligned vertically: row-6
            |                                                                 | row-6:
            |                                                                 |    inside: form
            |                                                                 |    contains: c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28
            |                                                                 |    contains partly: c29
            |                                                                 |    above: row-7
            |                                                                 |    below: row-5
            |                                                                 |    aligned vertically: row-7
            |                                                                 | row-7:
            |                                                                 |    inside: form
            |                                                                 |    contains: c30, c31
            |                                                                 |    contains partly: c32
            |                                                                 |    contains partly: c33
            |                                                                 |    below: row-6
            |                                                                 |    aligned vertically: row-1
            |                                                                 |

  Cenário: Renderização do h5-grid no mobile - [caso]
  Dado que o estado da estória é [estado]
  Quando eu renderizar no mobile o [caso]
  Então validar o [spec]

  Exemplos:
    caso   | estado                                                          | spec
    ----------------------------------------------------------------------------------------------------
    mobile | campo: {labelText:'Nome', value:'', hintText:'Digite seu nome'} | c1:
           |                                                                 |   aligned vertically: c2
           |                                                                 | c2:
           |                                                                 |   aligned vertically: c3
           |                                                                 | c3:
           |                                                                 |   aligned vertically: c4
           |                                                                 | c4:
           |                                                                 |   aligned vertically: c5
           |                                                                 | c5:
           |                                                                 |   aligned vertically: c6
           |                                                                 | c6:
           |                                                                 |   aligned vertically: c7
           |                                                                 | c7:
           |                                                                 |   aligned vertically: c8
           |                                                                 | c8:
           |                                                                 |   aligned vertically: c9
           |                                                                 | c9:
           |                                                                 |   aligned vertically: c10
           |                                                                 | c10:
           |                                                                 |   aligned vertically: c11
           |                                                                 | c11:
           |                                                                 |   aligned vertically: c12
           |                                                                 | c12:
           |                                                                 |   aligned vertically: c13
           |                                                                 | c13:
           |                                                                 |   aligned vertically: c14
           |                                                                 | c14:
           |                                                                 |   aligned vertically: c15
           |                                                                 | c15:
           |                                                                 |   aligned vertically: c16
           |                                                                 | c16:
           |                                                                 |   aligned vertically: c17
           |                                                                 | c17:
           |                                                                 |   aligned vertically: c18
           |                                                                 | c18:
           |                                                                 |   aligned vertically: c19
           |                                                                 | c19:
           |                                                                 |   aligned vertically: c20
           |                                                                 | c20:
           |                                                                 |   aligned vertically: c21
           |                                                                 | c21:
           |                                                                 |   aligned vertically: c22
           |                                                                 | c22:
           |                                                                 |   aligned vertically: c23
           |                                                                 | c23:
           |                                                                 |   aligned vertically: c24
           |                                                                 | c24:
           |                                                                 |   aligned vertically: c25
           |                                                                 | c25:
           |                                                                 |   aligned vertically: c26
           |                                                                 | c26:
           |                                                                 |   aligned vertically: c27
           |                                                                 | c27:
           |                                                                 |   aligned vertically: c28
           |                                                                 | c28:
           |                                                                 |   aligned vertically: c29
           |                                                                 | c29:
           |                                                                 |   aligned vertically: c30
           |                                                                 | c31:
           |                                                                 |   aligned vertically: c31
           |                                                                 | c32:
           |                                                                 |   aligned vertically: c33
           |                                                                 |
           |                                                                 |







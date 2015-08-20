  Funcionalidade: componente de layout para formulários
  Para fazer com que os forms fiquem alinhados em layout
  Eu, como programador
  Desejo utilizar o componente h5-layout

  Cenário: Renderização do h5-layout no desktop - [caso]
  Dado que o estado da estória é estado
  Quando eu renderizar no desktop o [caso]
  Então validar [spec]

  Exemplos:
    caso    | spec
    -------------------------------------------------------------------------------------------
    desktop | container:
            |    contains: form
            | form:
            |    contains: row-1,row-2,row-4,row-5,row-6,row-7,row-8,row-9,row-10,row-11,row-12
            | row-1
            |   inside: form
            |   contains: c0
            |   contains partly:c1
            |   above: row-2
            |   aligned vertically: row-2
            | row-2
            |   inside: form
            |   contains: c3
            |   contains partly:c2
            |   above: row-3
            |   below: row-1
            |   aligned vertically: row-3
            | row-3
            |   inside: form
            |   contains: c4,c5,c6
            |   above: row-4
            |   below: row-2
            |   aligned vertically: row-4
            | row-4
            |   inside: form
            |   contains: c7,c8,c9,c10,c11,c12
            |   above: row-5
            |   aligned vertically: row-5
            |   below: row-3
            | row-5
            |   inside: form
            |   contains: c13,c14
            |   above: row-6
            |   below: row-4
            |   aligned vertically: row-6
            | row-6
            |   inside: form
            |   contains: c15,c16,c17,c18
            |   above: row-7
            |   below: row-5
            |   aligned vertically: row-7
            | row-7
            |   inside: form
            |   contains: c19,c20
            |   above: row-8
            |   below: row-6
            |   aligned vertically: row-8
            | row-8
            |   inside: form
            |   contains: c21,c23,c24
            |   contains partly: c22
            |   above: row-9
            |   below: row-7
            |   aligned vertically: row-9
            | row-9
            |   inside: form
            |   contains: c25,c26,c27
            |   above: row-10
            |   below: row-8
            |   aligned vertically: row-10
            | row-10
            |   inside: form
            |   contains: c28
            |   above: row-11
            |   below: row-9
            |   aligned vertically: row-11
            | row-11
            |   inside: form
            |   contains: c29,c30,c31
            |   above: row-12
            |   below: row-10
            |   aligned vertically: row-12
            | row-12
            |   inside: form
            |   contains: c32
            |   below: row-11
            |   aligned vertically: row-1
            |

  Cenário: Renderização do h5-layout no mobile - [caso]
  Dado que o estado da estória é estado
  Quando eu renderizar no mobile o [caso]
  Então validar o [spec]

  Exemplos:
    caso   | spec
    ----------------------------------
    mobile | c0:
           |  aligned vertically: c1
           | c1:
           |   aligned vertically: c2
           | c2:
           |   aligned vertically: c3
           | c3:
           |   aligned vertically: c4
           | c4:
           |   aligned vertically: c5
           | c5:
           |   aligned vertically: c6
           | c6:
           |   aligned vertically: c7
           | c7:
           |   aligned vertically: c8
           | c8:
           |   aligned vertically: c9
           | c9:
           |   aligned vertically: c10
           | c10:
           |   aligned vertically: c11
           | c11:
           |   aligned vertically: c12
           | c12:
           |   aligned vertically: c13
           | c13:
           |   aligned vertically: c14
           | c14:
           |   aligned vertically: c15
           | c15:
           |   aligned vertically: c16
           | c16:
           |   aligned vertically: c17
           | c17:
           |   aligned vertically: c18
           | c18:
           |   aligned vertically: c19
           | c19:
           |   aligned vertically: c20
           | c20:
           |   aligned vertically: c21
           | c21:
           |   aligned vertically: c22
           | c22:
           |   aligned vertically: c23
           | c23:
           |   aligned vertically: c24
           | c24:
           |   aligned vertically: c25
           | c25:
           |   aligned vertically: c26
           | c26:
           |   aligned vertically: c27
           | c27:
           |   aligned vertically: c28
           | c28:
           |   aligned vertically: c29
           | c29:
           |   aligned vertically: c30
           | c31:
           |   aligned vertically: c31
           | c32:
           |   aligned vertically: c0
           |
           |







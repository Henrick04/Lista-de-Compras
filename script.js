var arrayCompras = [];

      function adicionar() {
        let produto = {
          nome: document.formulario.nomeProduto.value,
          preco: document.formulario.valorProduto.value,
          mostrar: function () {
            return this.nome + " -> " + this.preco + " €" + "\n";
          },
        };

        const productAlreadyExists = arrayCompras.find(
          (compra) => compra.nome === produto.nome
        );
        if (produto.nome != "" && !productAlreadyExists) {
          arrayCompras.push(produto);
        }
        document.formulario.nomeProduto.value = "";
        document.formulario.valorProduto.value = "";
      }

      function mostrar() {
        document.formulario.listaProdutos.value = "";
        for (var compra of arrayCompras) {
          document.formulario.listaProdutos.value += compra.mostrar();
        }
        document.formulario.listaProdutos.value += `\n\nNúmero Total de Produtos: ${arrayCompras.length};`;
      }
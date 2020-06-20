var { products, Product } = require('../config');

module.exports = {
  index: (_, res) => {
    return res.json({ products });
  },

  show: (req, res) => {
    let tmp = products.filter((product) => product.id == req.params.id);
    return res.json(tmp.length > 0 ? tmp : { message: "Não foi possível encontrar um produto com este ID" });
  },

  store: (req, res) => {
    const { id, nome, quantidade, valorUnt, complemento } = req.body;

    if (id && nome && quantidade && valorUnt && complemento) {
      if (products.filter((product) => product.id === id).length > 0)
        return res.json({ message: "Já existe um produto com este ID" });

      products.push(Product(req.body));
      return res.json({ message: "Produto cadastrado com sucesso" });
    }

    return res.json({ message: "Certifique-se de ter preenchido todos os campos corretamente: ID, Nome, Quantidade, Valor Unitário e Complemento" });
  },

  edit: (req, res) => {
    const { id, nome, quantidade, valorUnt } = req.body;
    let product = products.filter((product) => product.id == req.params.id)[0];

    if (!product)
      return res.json({ message: "Não foi possível encontrar um produto com este ID" });

    if (products.filter((product) => product.id === id).length > 0)
      return res.json({ message: "Já existe um produto com este ID" });

    if (id && nome && quantidade && valorUnt) {
      product.id = id;
      product.nome = nome;
      product.quantidade = quantidade;
      product.valorUnt = valorUnt;
      return res.json({ message: "Produto alterado com sucesso" });
    }

    return res.json({ message: "Certifique-se de ter preenchido todos os campos corretamente: ID: Number, Nome: String, Quantidade: Number e Valor Unitário: Number" });
  },

  destroy: (req, res) => {
    let product = products.filter((product) => product.id == req.params.id)[0];

    if (!product)
      return res.json({ message: "Não foi possível encontrar um produto com este ID" });

    products.splice(products.findIndex(p => p.id == req.params.id), 1);

    return res.json({ message: "Produto removido com sucesso", product });
  },

  complemento: (req, res) => {
    const { complemento } = req.body;
    let product = products.filter((product) => product.id == req.params.id)[0];

    if (!product)
      return res.json({ message: "Não foi possível encontrar um produto com este ID" });

    if (complemento) {
      product.complemento = complemento;
      return res.json({ message: "Complemento inserido com sucesso" });
    }

    return res.json({ message: "Certifique=se de ter preenchido o campo de complementos corretamente: Complementos: Array" });
  }
}
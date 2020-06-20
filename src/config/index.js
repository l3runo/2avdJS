var products = [];

const Product = ({ id, nome, quantidade, valorUnt, complemento }) => {
  let tmp = {
    id,
    nome,
    quantidade,
    valorUnt,
    complemento: complemento || 'Não foi encontrado um complemento para este produto',
    precoTotal: quantidade * valorUnt,
    precoVenda: valorUnt * 1.20,
    situacao: quantidade >= 100 ? 'Excelente' : (quantidade >= 50 && quantidade < 100) ? 'Boa' : (quantidade < 50 && quantidade > 0) ? 'Estável' : 'Ruim'
  }
  tmp.lucro = parseFloat((tmp.precoVenda - tmp.valorUnt).toFixed(5));
  return tmp;
}

products.push(Product({
  id: 0,
  nome: 'Produto A',
  quantidade: parseInt(Math.random() * 10),
  valorUnt: parseFloat(Math.random() * 10).toFixed(5),
}));

initial = {
  app: 'Controle  de Estoque da Empresa ABC',
  apiPaths: [
    { req: 'GET', uri: '/produtos' },
    { req: 'GET', uri: '/produtos/:id' },
    { req: 'PUT', uri: '/produtos/:id' },
    { req: 'PUT', uri: '/produtos/:id/complemento' },
    { req: 'POST', uri: '/produtos' },
    { req: 'DELETE', uri: '/produtos/:id' }
  ]
};

module.exports = {
  products,
  Product,
  initial
}

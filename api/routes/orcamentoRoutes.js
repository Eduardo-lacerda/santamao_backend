var orcamentoController = require('../controllers/orcamentoController.js');

module.exports = function(app) {
    app.post('/api/orcamento', orcamentoController.criarOrcamento);
    app.post('/api/lead', orcamentoController.criarLead);
};

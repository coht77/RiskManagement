const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    // Conectar al servicio remoto de Business Partner
    const BPsrv = await cds.connect.to("BusinessPartnerA2X");

    // Delegar ÚNICAMENTE las lecturas de la entidad remota a S/4HANA / API Hub
    // CAP se encarga automáticamente de optimizar las consultas del Value Help y los $expand de Fiori
    this.on("READ", "A_BusinessPartner", async (req) => {
        return BPsrv.run(req.query);
    });
});
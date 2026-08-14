using { RiskManagementService } from './service';

// 1. Requerir usuario autenticado a nivel de servicio global
annotate RiskManagementService with @(requires: [
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
]);

// 2. Control de acceso granular para Risks
annotate RiskManagementService.Risks with @(restrict: [
    {
        grant: ['READ'],
        to   : ['RiskViewer']
    },
    {
        grant: ['*'],
        to   : ['RiskManager']
    }
]);

// 3. Control de acceso granular para Mitigations
annotate RiskManagementService.Mitigations with @(restrict: [
    {
        grant: ['READ'],
        to   : ['RiskViewer']
    },
    {
        grant: ['*'],
        to   : ['RiskManager']
    }
]);

// 4. Lectura de Business Partner para usuarios con cualquier rol
annotate RiskManagementService.A_BusinessPartner with @(restrict: [
    {
        grant: ['READ'],
        to   : ['RiskViewer', 'RiskManager']
    }
]);

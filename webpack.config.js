const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const pagoRemesasMf= withModuleFederationPlugin({

  name: 'micf-pago-remesas',

  exposes: {
    './PagoRemesasModule': './src/app/components/remesas/remesas.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

pagoRemesasMf.output.publicPath = 'http://localhost:4202/';
module.exports = pagoRemesasMf;
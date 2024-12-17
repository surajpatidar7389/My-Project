const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Service = require('./Service');

const ServicePriceOption = sequelize.define('ServicePriceOption', {
  duration: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  type: { type: DataTypes.ENUM('Hourly', 'Weekly', 'Monthly'), allowNull: false },
});

Service.hasMany(ServicePriceOption, { foreignKey: 'serviceId' });
ServicePriceOption.belongsTo(Service, { foreignKey: 'serviceId' });

module.exports = ServicePriceOption;

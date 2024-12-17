const Category = require('../models/Category');
const Service = require('../models/Service');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  return res.status(201).json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.findAll();
  return res.json(categories);
};

exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  await Category.update({ name }, { where: { id: categoryId } });
  return res.json({ message: 'Category updated' });
};

exports.deleteEmptyCategory = async (req, res) => {
  const { categoryId } = req.params;
  const services = await Service.findAll({ where: { categoryId } });
  if (services.length > 0) return res.status(400).json({ message: 'Category has services' });
  
  await Category.destroy({ where: { id: categoryId } });
  return res.json({ message: 'Category deleted' });
};

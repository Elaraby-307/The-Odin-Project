const test = require('node:test');
const assert = require('node:assert/strict');

const createController = require('../controller/creatController');
const { indexPostController } = require('../controller/indexController');
const db = require('../db/queries');

test('indexPostController redirects to the home page after creating a product', async () => {
    const originalCreateItem = db.CreateItem;
    const originalAddCategory = db.add_category;

    db.CreateItem = async () => { };
    db.add_category = async () => { };

    let redirectUrl = null;
    let renderedView = null;

    await indexPostController(
        { body: { name: 'Milk', price: 18, category: 'food' } },
        {
            redirect: (url) => {
                redirectUrl = url;
            },
            render: (view) => {
                renderedView = view;
            },
        }
    );

    db.CreateItem = originalCreateItem;
    db.add_category = originalAddCategory;

    assert.equal(redirectUrl, '/');
    assert.equal(renderedView, null);
});

test('createController renders the existing-category form when selected', async () => {
    let viewName = null;
    let viewData = null;

    await createController(
        { method: 'GET', query: { choice: 'existing' } },
        {
            render: (view, data) => {
                viewName = view;
                viewData = data;
            },
        }
    );

    assert.equal(viewName, 'createExist');
    assert.equal(viewData.title, 'Create Product');
});

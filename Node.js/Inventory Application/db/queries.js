const pool = require('./pool')


async function getAllItems (){
    const {rows} = await pool.query('SELECT id,name,price FROM product ORDER BY id');
    return rows;
}


async function getPartItems (category){
    const {rows} = await pool.query('SELECT id,name,price FROM product WHERE category_id = (SELECT id FROM category WHERE name = $1) ORDER BY id', [category]);
    return rows;
}


async function updateItem(id ,name, price, category_name){

    await pool.query(`UPDATE product SET name = $1 , price = $2 , category_id = (SELECT id FROM category WHERE name = $4) WHERE id = $3`, [name, price, id, category_name]) ;

}




async function CreateItem(name, price, category){
    await pool.query(`INSERT INTO product (name, price, category_id) VALUES ($1, $2, (SELECT id FROM category WHERE name = $3))`, [name, price, category]) ;
}





async function add_category(category){
    await pool.query('INSERT INTO category (name) VALUES($1)', [category]);
}





async function delete_Item(id){
    await pool.query('DELETE FROM category WHERE id = $1', [id])
}





async function get_category(){
    const { rows } = await pool.query('SELECT name FROM category');
    return rows ;
    
}







async function deleteItem(id){
    await pool.query(`DELETE FROM product Where id = $1`, [id]) ;
}






module.exports = {
    getAllItems,
    getPartItems,
    updateItem,
    CreateItem,
    deleteItem,
    add_category,
    get_category
}

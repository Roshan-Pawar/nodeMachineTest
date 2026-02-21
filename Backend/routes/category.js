const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', (req, res) => {
    const { category_name } = req.body;
    db.query(
        'INSERT INTO category (category_name) VALUES (?)',
        [category_name],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send('Category Created');
        }
    );
});

// READ
router.get('/', (req, res) => {
    db.query('SELECT * FROM category', (err, result) => {
        if (err) return res.status(500).send(err);
        res.render('category', { categories: result });
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    db.query(
        'UPDATE category SET category_name = ? WHERE category_id = ?',
        [req.body.category_name, req.params.id],
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.send('Category Updated');
        }
    );
});

// DELETE
router.post('/delete/:id', (req, res) => {
    db.query(
        'DELETE FROM category WHERE category_id = ?',
        [req.params.id],
        (err) => {
            if (err) return res.status(500).send(err);
            res.redirect('/category');
        }
    );
});

module.exports = router;
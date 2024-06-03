const Film = require('../Model/films.js');

const getFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.status(200).json(films);
    } catch (error) {
        console.error('Error getting films', error);
        res.status(500).json({ error: 'Failed to get films' });
    }
};

const postFilm = async (req, res) => {
    const { title, description, rating, genre } = req.body;
    try {
        const newFilm = new Film({
            title,
            description,
            rating,
            genre
        });
        const savedFilm = await newFilm.save();
        res.status(200).json(savedFilm);
    } catch (error) {
        console.error('Error adding film', error);
        res.status(500).json({ error: 'Failed to add film' });
    }
};

const updateFilm = async (req, res) => {
    const filmId = req.params.id;
    const { title, description, rating, genre } = req.body;
    try {
        const updatedFilm = await Film.findByIdAndUpdate(filmId, { title, description, rating, genre }, { new: true });
        if (!updatedFilm) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.status(200).json(updatedFilm);
    } catch (error) {
        console.error('Error updating film', error);
        res.status(500).json({ error: 'Failed to update film' });
    }
};

const deleteFilm = async (req, res) => {
    const filmId = req.params.id;
    try {
        const deletedFilm = await Film.findByIdAndDelete(filmId);
        if (!deletedFilm) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.status(200).json({ message: 'Film deleted successfully' });
    } catch (error) {
        console.error('Error deleting film', error);
        res.status(500).json({ error: 'Failed to delete film' });
    }
};

module.exports = { getFilms, postFilm, updateFilm, deleteFilm };

import express from 'express';


import {
    createNote,
    deleteNote,
    editNote,
    getNote,
    getNotes
} from '../controllers/noteController.js';

const noteRouter = express.Router();

noteRouter.post('/notes/create', createNote)
noteRouter.get('/notes', getNotes)
noteRouter.get('/notes/:id', getNote)
noteRouter.put('/notes/edit/:id', editNote)
noteRouter.delete('/notes/delete/:id', deleteNote)

export default noteRouter
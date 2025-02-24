import noteModel from "../models/noteModel.js"

export const createNote = async (request, response) => {

    const { title, description } = request.body;

    const createdNote = new noteModel({
        title,
        description
    });

    await createdNote.save();

    return response.status(201).json(createdNote);
}

export const getNotes = async (request, response) => {

    const sortByDate = { createdAt: -1 };

    const notes = await noteModel.find().sort(sortByDate);

    return response.status(200).json(notes);
}

export const getNote = async (request, response) => {

    const { id } = request.params;

    const note = await noteModel.findById(id);

    return response.status(200).json(note);
}

export const editNote = async (request, response) => {

    const { id } = request.params;
    const { title, description } = request.body;

    const updatedNote = await noteModel.findByIdAndUpdate(id,
        { title, description },
        { new: true }
    );

    await updatedNote.save();

    return response.status(200).json(updatedNote);
}

export const deleteNote = async (request, response) => {

    const { id } = request.params;

    const deletedNote = await noteModel.findByIdAndDelete(id);

    return response.status(200).json(deletedNote);
} 
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Layout from './pages/Layout/Layout'
import Dashboard from './pages/Main/Dashboard/Dashboard'
import CreateNotePage from './pages/REST/CreateNotePage'
import NotePage from './pages/NotePage/NotePage'
import EditNotePage from './pages/REST/EditNotePage'

import PathTo from './utils/pathTo.js'

function App() {

  return (
    <>

      <Routes>

        <Route path={PathTo.Dashboard} element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path={PathTo.CreateNotePage} element={<CreateNotePage />} />
          <Route path={PathTo.NotesPageId} element={<NotePage />} />
          <Route path={PathTo.EditNotePageId} element={<EditNotePage />} />

        </Route>

      </Routes>

    </>
  )
}

export default App

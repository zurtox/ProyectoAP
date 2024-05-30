import express from 'express'
import { 
    getAllContent,
    getContentById,
    insertContent,
    updateContent,
    deleteContent,
    activateContent,
    deactivateContent,
    getTop250ContentByCategory,
    getTop250ContentByViews,
    getTop250ContentMovie,
    getTop250ContentDocumental,
    getTop250ContentDocumentalCategory,
    getTop250ContentMovieCategory,
    getTop250ContentSerieCategory,
    getContentStarsId,
    getContentStars,
    getAmountMovies,
    getAmountSeries,
    isContentBought,
    getContentByCategory,
    getAmountDocumental,
    isMovie,
    isDocumental,
    isSerie
     } from '../modules/Content.js';

const router = express.Router();

router.get('/getAllContent', getAllContent);
router.get('/getContentById/:id', getContentById)
router.get('/getContentByCategory/:id', getContentByCategory)
router.post('/insertContent', insertContent)
router.put('/updateContent', updateContent)
router.delete('/deleteContent/:id', deleteContent)
router.delete('/activateContent', activateContent)
router.put('/deactivateContent', deactivateContent)
router.put('/activateContent', activateContent)
router.get('/getTop250ContentByViews', getTop250ContentByViews)
router.get('/getTop250ContentMovie', getTop250ContentMovie)
router.get('/getTop250ContentDocumental', getTop250ContentDocumental)
router.get('/getTop250ContentByCategory', getTop250ContentByCategory)
router.get('/getTop250ContentDocumentalCategory', getTop250ContentDocumentalCategory)
router.get('/getTop250ContentMovieCategoryv', getTop250ContentMovieCategory)
router.get('/getTop250ContentSerieCategory', getTop250ContentSerieCategory)
router.get('/getContentStarsId/:id', getContentStarsId)
router.get('/getContentStars', getContentStars)
router.get('/getAmountMovies', getAmountMovies)
router.get('/getAmountSeries', getAmountSeries)
router.get('/getAmountDocumentals', getAmountDocumental)
router.get('/isContentBought', isContentBought)
router.get('/isMovie/:id', isMovie)
router.get('/isDocumental/:id', isDocumental)
router.get('/isSerie/:id', isSerie)



export { router }
import express from 'express'
import {getAllItems,getSingelItem,runMiddleWhere} from '../controller/items.controller.js'

// const app = express();
const router  =express.Router();

router.use(runMiddleWhere)
router.get('/',getAllItems)
router.get('/:id',getSingelItem)


export default router;
import { Router } from "express"
import * as objectBuilderController from './qbController'
const router = Router();

router.get('/', objectBuilderController.getQueryBuilder);
router.post('/', objectBuilderController.saveQueryBuilder);
router.get('/hadoopMetaData', objectBuilderController.getHadoopMetaData);
router.get('/hadoopTableType', objectBuilderController.getHadoopTableType);
router.get('/failDesc', objectBuilderController.getFailDesc);
router.get('/xml', objectBuilderController.getXML);
router.get('/columns', objectBuilderController.getColumns);
router.get('/distinctValues', objectBuilderController.getDistinctValues);
router.get('/hadoopColumn/:tblname', objectBuilderController.getHadoopColumn);
router.get('/tableColumnInfo', objectBuilderController.getTableColumnInfo);
router.get('/tableObjectInfo', objectBuilderController.getTableObjectInfo);
router.get('/hadoopTablesColumns/:tblname', objectBuilderController.getHadoopTablesColumns);
router.get('/appendedColumns', objectBuilderController.getAppendedColumns);
router.get('/programOrderId', objectBuilderController.getProgramOrderId);
router.get('/primaryKeys', objectBuilderController.getPrimaryKeys);

export default router;
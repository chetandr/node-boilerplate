import { Router } from "express"
import * as queryBuilderController from './qbController'
const router = Router();

router.get('/', queryBuilderController.getQueryBuilder);
router.post('/', queryBuilderController.saveQueryBuilder);
router.get('/hadoopMetaData', queryBuilderController.getHadoopMetaData);
router.get('/hadoopTableType', queryBuilderController.getHadoopTableType);
router.get('/failDesc', queryBuilderController.getFailDesc);
router.get('/xml', queryBuilderController.getXML);
router.post('/columns', queryBuilderController.getColumns);
router.get('/distinctValues', queryBuilderController.getDistinctValues);
router.get('/hadoopColumn/:tblname', queryBuilderController.getHadoopColumn);
router.get('/tableColumnInfo', queryBuilderController.getTableColumnInfo);
router.post('/tableObjectInfo', queryBuilderController.getTableObjectInfo);
router.get('/tableData', queryBuilderController.getTableData);
router.get('/hadoopTablesColumns/:tblname', queryBuilderController.getHadoopTablesColumns);
router.get('/appendedColumns', queryBuilderController.getAppendedColumns);
router.get('/programOrderId', queryBuilderController.getProgramOrderId);
router.get('/primaryKeys', queryBuilderController.getPrimaryKeys);

export default router;
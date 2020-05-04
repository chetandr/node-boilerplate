import { Router } from "express"
import * as queryBuilderController from './qbController'
import { validateSchema } from "../../middleware/JsonValidator"
import { qbSchema }  from './queryBuilderSchema'
const router = Router();

router.get('/', queryBuilderController.getQueryBuilder);
router.post('/', queryBuilderController.saveQueryBuilder);
router.get('/hadoopMetaData', queryBuilderController.getHadoopMetaData);
router.get('/hadoopTableType', queryBuilderController.getHadoopTableType);
router.get('/failDesc', queryBuilderController.getFailDesc);
router.get('/xml', queryBuilderController.getXML);
router.post('/columns', queryBuilderController.getColumns);
router.post('/distinctValues', queryBuilderController.getDistinctValues);
router.get('/hadoopColumn/:tblname', queryBuilderController.getHadoopColumn);
router.get('/tableColumnInfo', queryBuilderController.getTableColumnInfo);
router.post('/tableObjectInfo', validateSchema('tableObjectInfo', qbSchema), queryBuilderController.getTableObjectInfo);
router.get('/tableData', queryBuilderController.getTableData);
router.get('/hadoopTablesColumns/:tblname', queryBuilderController.getHadoopTablesColumns);
router.get('/appendedColumns', queryBuilderController.getAppendedColumns);
router.get('/programOrderId', queryBuilderController.getProgramOrderId);
router.get('/primaryKeys', queryBuilderController.getPrimaryKeys);
router.get('/tableData', queryBuilderController.getTableData);
router.get('/hadoopTableData', queryBuilderController.getHadoopTableData);
router.get('/hadoopschema', queryBuilderController.getHadoopSchema);
router.post('/employees', queryBuilderController.getEmployees);

export default router;
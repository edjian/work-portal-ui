/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.

 */
export const tableOption = {
  dialogDrag: true,
  border: true,
  index: true,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  menuType: 'text',
  searchShow: false,
  excelBtn: true,
  printBtn: true,
  column: [
	  {
      label: 'PK',
      prop: 'id',
      sortable:true
    },
	  {
      label: '所属租户',
      prop: 'tenantId',
      sortable:true
    },
	  {
      label: '逻辑删除标记（0：显示；1：隐藏）',
      prop: 'delFlag',
      sortable:true
    },
	  {
      label: '创建时间',
      prop: 'createTime',
      sortable:true
    },
	  {
      label: '最后更新时间',
      prop: 'updateTime',
      sortable:true
    },
	  {
      label: '用户编号',
      prop: 'userId',
      sortable:true
    },
	  {
      label: '收货人名字',
      prop: 'userName',
      sortable:true
    },
	  {
      label: '邮编',
      prop: 'postalCode',
      sortable:true
    },
	  {
      label: '省名',
      prop: 'provinceName',
      sortable:true
    },
	  {
      label: '市名',
      prop: 'cityName',
      sortable:true
    },
	  {
      label: '区名',
      prop: 'countyName',
      sortable:true
    },
	  {
      label: '详情地址',
      prop: 'detailInfo',
      sortable:true
    },
	  {
      label: '电话号码',
      prop: 'telNum',
      sortable:true
    },
	  {
      label: '是否默认 0是1否',
      prop: 'isDefault',
      sortable:true
    },
  ]
}

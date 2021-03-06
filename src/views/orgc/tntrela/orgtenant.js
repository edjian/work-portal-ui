/**
 * Copyright (C) 2020
 * All rights reserved, Designed By AiCoder.
 * date 2021-01-28 14:42:15
 */
export const tableOption = {
    dialogDrag: true,
    border: true,
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
            label: '记录编号',
            prop: 'id',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '租户编号',
            prop: 'tenantId',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '组织机构编号',
            prop: 'orgId',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '记录状态',
            prop: 'rstate',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '创建时间',
            prop: 'createTime',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        {
            label: '修改时间',
            prop: 'updateTime',
            sortable: false,
            hide: false,
            showColumn: true,
            addDisplay: true,
            editDisplay: true,
            viewDisplay: true,
        },
        ]
}

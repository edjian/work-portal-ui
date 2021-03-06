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
    menu: false,
    column: [
        {
            label: '领券时间',
            prop: 'createTime',
            sortable: true
        },
        {
            label: '用户信息',
            prop: 'userId',
            slot: true
        },
        {
            label: '电子券',
            prop: 'couponId',
            type: 'select',
            slot: true,
            search: true,
            props: {
                label: 'name',
                value: 'id'
            },
            dicUrl: '/mall/couponinfo/list'
        },
        {
            label: '电子券码',
            prop: 'couponCode',
            search: true,
        },
        {
            label: '有效期',
            prop: 'validEndTime',
            slot:true
        },
        {
            label: '状态',
            prop: 'status',
            type: 'radio',
            search: true,
            dicData: [{
                label: '未使用',
                value: '0'
            },{
                label: '已使用',
                value: '1'
            },{
                label: '已过期',
                value: '2'
            }]
        },
        {
            label: '使用时间',
            prop: 'usedTime',
            sortable: true
        },
    ]
}

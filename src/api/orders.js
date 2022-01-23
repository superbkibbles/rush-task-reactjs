import client from './client';

const getAllOrders = () => client.get('admin/order/all');
const getPendingOrders = () => client.get('admin/order/pending');
const getOngoingOrders = () => client.get('admin/order/ongoing');
const getDoneOrders = () => client.get('admin/order/done');

const requests = {
    getAllOrders,
    getPendingOrders,
    getOngoingOrders,
    getDoneOrders,
};

export default requests;